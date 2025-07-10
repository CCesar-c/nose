//Dexie.delete('DB')

var nome = document.getElementById("input1").value
var senha = document.getElementById("input2").value

import Dexie from 'https://cdn.jsdelivr.net/npm/dexie@3.2.4/+esm';

const db = new Dexie('DB');

db.version(1).stores({ registros: '++id,nombre!,contrasea!' });

db.registros.add({ nombre: nome, contrasena: senha }).then(() => {
  db.registros.toArray().then(result => {
    console.log('registros no banco:', result);
  });
});

let gus = false;

document.querySelector(".check").addEventListener("click", () => {
    gus = !gus;

    if (gus) {
        document.body.classList.remove("add-white");
        document.body.classList.add("add-black");
        document.querySelector("form").classList.add("cor");
    } else {
        document.body.classList.remove("add-black");
        document.body.classList.add("add-white");
        document.querySelector("form").classList.remove("cor");
    }
});
