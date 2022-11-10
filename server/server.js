"use strict";
const path = require('path');
//모듈
const express = require('express'); //라이브러리 첨부
const bodyParser = require("body-parser");
const app = express();

//라우팅
const home = require(path.join( __dirname, "/src/routes/home"))//읽어 달로고 요구

app.set("views", path.join( __dirname, "/src/views"));
app.set("view engine","ejs");
app.use('/js',express.static(`${__dirname}/src/public/js`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/",home);//use 미들웨어를 등록해주는 메소드

module.exports = app;