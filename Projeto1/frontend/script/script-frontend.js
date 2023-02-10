// const {insertUserBackend} = require('../../backend/script-backend')
//const {users} = require('../../backend/database')


// https://www.figma.com/community/file/1098858239874808657

import { insertUserBackend } from "../../backend/script-backend.js";
import { users } from "../../backend/database.js"


const elemento = document.getElementById("botao")
const erro = document.getElementById("erro")




elemento.addEventListener('click', () => {

    const input = document.getElementById("input")
    const username = input.value

    if (insertUserBackend(username)) {
        alert("funcionou")
    } else {
        erro.innerHTML = "ERRO"
    }

    console.log(users)


})
