"use strict";

class UserStorage {
    static #users = {
        id: ["A", "B", "C"],
        passward: ["123","456", "789"],
        name: ["나","너","우리"],
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;