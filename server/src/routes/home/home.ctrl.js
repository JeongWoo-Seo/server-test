"use strict";

const ueser = {
    id: ["A", "B", "C"],
    passward: ["123","456", "789"],
};

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
    
        if(ueser.id.includes(id)){
            const idx = ueser.id.indexOf(id);
            if(ueser.passward[idx] == passward){
                return res.json({
                    success: true,
                });
            }
        }
        return res.json({
            success: false,
            msg: "실패",
        })
    },
}

module.exports = {
    output,
    process,
};
