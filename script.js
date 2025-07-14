import Dexie from 'https://cdn.jsdelivr.net/npm/dexie@3.2.4/+esm';

const db = new Dexie('DB');
db.version(1).stores({ registros: '++id,&nombre,&contrasena' });
var nome;
var senha;
document.querySelector("button").addEventListener("click", () => {

  senha = document.getElementById("input2").value;
  nome = document.getElementById("input1").value;

  db.registros
    .filter(registro => registro.nombre === nome && registro.contrasena === senha)
    .toArray()
    .then(result => {
      if (result == 1) {
        alert("Usuario cadastrado")
      } else {
        alert("Usuario NAO cadastrado")
      }
    })
});

let gus = false;

document.querySelector(".check").addEventListener("click", () => {
  gus = !gus;

  if (gus == true) {
    document.body.classList.remove("add-normal");
    document.body.classList.add("add-black");
  } else {
    document.body.classList.remove("add-black");
    document.body.classList.add("add-normal");
  }
});
// npm install Dexie
// install live server ATL + L + O
/** 
 *  db.registros.add({ nombre: nome, contrasena: senha }).then(() => {
    db.registros.toArray().then(result => {
      console.log(result);
    });
  });
 */