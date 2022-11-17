"use strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body;
    }
    login(){
        const {id,passward} = UserStorage.getUserInfo(this.body.id);
        
        if(id){
            if(id == this.body.id && passward == this.body.passward){
                return {success : true};
            }
            return {success: false, msg: "비밀번호가 틀림"};
        }
        return {success: false, msg: "아이디가 없습니다."};
    }
}

module.exports = User;