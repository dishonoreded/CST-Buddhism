import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

export interface Message{
  Uid?:number,
  WechatID:string,
  Created_at?:string,
  Xinde:string
}

@Component({
  selector: 'app-xinde',
  templateUrl: './xinde.component.html',
  styleUrls: ['./xinde.component.css']
})


export class XindeComponent implements OnInit {

  public messagelist:Message[]=[];
  constructor( public http:HttpClient ) {
   }

  ngOnInit() {
    this.getxinde();
  }
  
  getxinde(){
    let api = 'https://127.0.0.1:9000';
    this.http.get<Message[]>(api).subscribe(res=>{
      console.log(res);
      this.addxinde(res);
    })
  }

  addxinde(message:Message[]){
    this.messagelist=message;
  }
}