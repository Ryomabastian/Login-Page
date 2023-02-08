//const {users} = require("./database")
import { users } from "./database.js"

export function insertUserBackend(username) {

    if (username == "") {
        return false
    }

    if (!checar(username)) {
        return false
    }
    
    users.push(username)
    return true

}

function checar(username) {

    for (let i = 0; i < users.length; i++) {

        if (users[i] == username) {
            return false
        }

    }
    return true

}



