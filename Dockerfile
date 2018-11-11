
FROM node:11.1.0-alpine

WORKDIR /usr/app

RUN apk update && apk add postgresql

COPY package.json .
RUN npm install --quiet

COPY . .