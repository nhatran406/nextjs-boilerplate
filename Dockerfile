# Stage 1, based on Node.js, to build and compile the react app
FROM node:10-alpine as build

RUN mkdir -p /app
WORKDIR /app

COPY package*.json /app/
COPY ./ /app/

RUN npm install -global yarn
RUN yarn install 

RUN yarn export \
    && yarn cache clean

# Stage 2, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.17-alpine

RUN mkdir -p /app
WORKDIR /app

RUN apk add --update bash jq curl \
    && rm -rf /var/cache/apk/*

COPY --from=build /app/build/ /app/build

COPY ./scripts /app/scripts
COPY ./nginx.conf.template /etc/nginx/conf.d/nginx.conf.template

RUN chmod +x /app/scripts/run.sh

CMD ["/bin/bash", "-c", "/app/scripts/run.sh"]
