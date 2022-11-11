"use strict";

const UserStorage = require("../../model/UserStorage");

const output = {
    home:(req,res) =>{
        res.render('home/index');
    },
    login:(req,res) =>{
        res.render('home/login');
    },
};

const process = {
    login: (req,res) =>{
        const id = req.body.id;
        const passward = req.body.passward;

        const users = UserStorage.getUsers("id","passward");
        
        const response = {};
        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.passward[idx] == passward){
                response.success = true;
                return res.json(response);
            }
        }

        response.success = false;
        response.msg = "에러";
        return res.json(response);
    },
}

module.exports = {
    output,
    process,
};
