# 會載入程式需要的執行環境，會根據不同的需求下載不同的映像檔，這裡是指 node v10.15,3
FROM node:10.15.3

WORKDIR /app

COPY package*.json ./

ADD . /app

RUN npm install

EXPOSE 3000

CMD npm start
