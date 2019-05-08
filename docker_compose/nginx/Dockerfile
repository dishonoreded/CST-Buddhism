FROM alpine

#换源
RUN echo "http://mirrors.ustc.edu.cn/alpine/v3.3/main/" > /etc/apk/repositories
#nginx依赖包
RUN build_pkgs="build-base linux-headers openssl-dev pcre-dev wget zlib-dev" \
  && runtime_pkgs="ca-certificates openssl pcre zlib" \
  && apk --update add ${build_pkgs} ${runtime_pkgs}


#nginx安装
COPY ./copy_data/nginx-1.14.2.tar.gz /
RUN tar -zxvf nginx-1.14.2.tar.gz
RUN cd nginx-1.14.2 \
        && ./configure --prefix=/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module \
        && make && make install
RUN ln -s /usr/local/nginx/sbin/nginx /usr/bin/
RUN rm -r nginx-1.14.2.tar.gz nginx-1.14.2
COPY ./copy_data/cert/ /usr/local/nginx/cert/
