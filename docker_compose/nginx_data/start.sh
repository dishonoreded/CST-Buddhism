#!/bin/sh
cp /containerdata/nginx.conf /usr/local/nginx/conf && nginx -g "daemon off;"
