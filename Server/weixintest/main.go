package main

import (
	"crypto/sha1"
	"fmt"
	"io"
	"log"
	"net/http"
	"reflect"
	"sort"
	"strings"
)
func main(){
	http.HandleFunc("/api/wechatconfirm", wechat_confirm)
	fmt.Println("go server start running...")
	err := http.ListenAndServe(":9000", nil)
	echo_err(err)
}

func wechat_confirm(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Access-Control-Allow-Origin", "*")             //允许访问所有域
	w.Header().Add("Access-Control-Allow-Headers", "Content-Type") //header的类型
	w.Header().Set("content-type", "application/json")             //返回数据格式是json
	r.ParseForm()
	fmt.Println(r.Form)
	fmt.Println("path", r.URL.Path)
	fmt.Println("scheme", r.URL.Scheme)
	fmt.Println("收到客户端请求: ",r.Method)
	fmt.Println("timestamp",r.Form["timestamp"])
	fmt.Println("type",reflect.TypeOf(r.Form["timestamp"]))

	Token:="dis"						//开发者自定义Token
	signature,_:=r.Form["signature"]	//微信加密签名，signature结合了开发者填写的token参数和请求中的timestamp参数、nonce参数。
	timestamp,_:=r.Form["timestamp"]	//时间戳
	nonce,_:=r.Form["nonce"]			//随机数
	echostr,_:=r.Form["echostr"]		//随机字符串,注意，以上三个变量均为字符串组

	//1. 将 plat_token、timestamp、nonce三个参数进行字典序排序
	sl := []string{Token,timestamp[0] , nonce[0]}
	sort.Strings(sl)

	//2. 将三个参数字符串拼接成一个字符串进行sha1加密
	s := sha1.New()
	io.WriteString(s, strings.Join(sl, ""))

	//3. 比较微信服务器的signature与本地服务器生成的signature,如相同则返回echostr
	if signature[0]==fmt.Sprintf("%x", s.Sum(nil)){
		fmt.Println("It's the signature from wechat official")
		w.Write([]byte(echostr[0]))
	}else{
		fmt.Println("unknown signature")
	}
	defer r.Body.Close()
}
func echo_err (err error){
	if err != nil {
		log.Fatal("ListenAndServe: ")
	}
}

