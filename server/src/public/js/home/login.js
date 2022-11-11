"use strict";

const id = document.querySelector("#id");
const passward = document.querySelector("#passward");
const loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id : id.value,
        passward : passward.value,
    };
    
    fetch("/login",{
        method: "post",
        headers: {
            "Content-type": "application/json"
        },
        body : JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = '/';
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.log(new Error("에러"));
    });
};