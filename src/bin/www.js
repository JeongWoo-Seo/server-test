"use strict";

const PORT = 8080;

const app = require("../server");

//앱 세팅
app.listen(PORT,function(){//8080포트로 서버 오픈. 실행할 함수
    console.log('listening on 8080')
});