#!/bin/bash
bash /app/scripts/getEnv.sh

envsubst '${APIGW_URL}' < /etc/nginx/conf.d/nginx.conf.template > /etc/nginx/conf.d/default.conf

nginx -t
nginx -g "daemon off;"
