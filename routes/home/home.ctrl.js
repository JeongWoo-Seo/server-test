"use strict";

const home =function(req,res){//root
        res.send(' 안녕하세요');
};

const login = function(req,res){
    res.render("home/login");
};

module.exports = {
    home,
    login,
};
