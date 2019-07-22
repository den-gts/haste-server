FROM alpine
RUN apk update && apk add git
FROM node:alpine
WORKDIR /src
COPY . .
RUN npm install && npm install memcached
CMD npm start
