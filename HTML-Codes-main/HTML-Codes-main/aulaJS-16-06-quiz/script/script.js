const botaoJogar = document.getElementById("botaoJogar");
const diviniciojogo = document.getElementById("iniciojogo");
const botonProximo = document.getElementById("botaoProximo");
botonProximo.classList.add("disativar");
//const nomeNivelAtualSpan = document.getElementById("nomeNivelAtual");
const caixaUniQuizDiv = document.getElementById("caixaUniQuiz");
const divOpcoes = document.getElementById("opcoesRespostas");
let indicePerguntas = 0;
var numero =  Math.floor((Math.random() * 4) +1); 
// Arrays
const perguntasQuiz = [
    { pergunta: "Qual é o maior deserto do mundo?", resposta:  "Antártida"},
    { pergunta: "Qual é a capital do Brasil?", resposta: "Brasilia" },
    { pergunta: "Qual é a capital da Austrália?", resposta: "Camberra " },
    { pergunta: "Qual é o país com maior população no mundo?", resposta: "India" },
    { pergunta: "Qual a linha imaginária que atravessa o Brasil?", resposta: "Linha do Equador" },
    { pergunta: "Qual o oceano que banha o Brasil?", resposta: " Oceano Atlântico" }
    
];
const repostas_erradas = ["nao sei", "nulo", "verdadeiro", "PARANGARICUTIRIMICUARO", "exatamento", "e o gustavo"]


function iniciarjogo() {
    diviniciojogo.classList.add("disativar")
    carregarQuestao()
}

function carregarQuestao() {
    caixaUniQuizDiv.classList.add("active");

    var testo = document.createElement("h1");
    testo.textContent = perguntasQuiz [indicePerguntas].pergunta;
    opcoesRespostas.appendChild(testo);

    for (let index = 0; index <= 3; index++) {
        let valor = index + Math.floor(Math.random());

        var resposta_boton = document.createElement("button")
        resposta_boton.classList.add("incorrect")
        resposta_boton.textContent =  repostas_erradas[valor] 
        respostasButton.appendChild(resposta_boton);
    }
    
    var btones = Array.from(document.querySelectorAll("button"));

    btones[numero].classList.remove("incorrect")
    btones[numero].classList.add("correct")

    btones[numero].textContent = perguntasQuiz[indicePerguntas].resposta;

    btones[numero].addEventListener("click", () =>{
        alert("Parabens")
        btones[numero].classList.add("color")
        bton_errado[0].classList.add("color")
        bton_errado[1].classList.add("color")
        bton_errado[2].classList.add("color")
        botonProximo.classList.remove("disativar");
        botonProximo.classList.add("active");
    })
    let bton_errado = document.querySelectorAll(".incorrect");
    for (let index = 0; index < bton_errado.length; index++) {
        bton_errado[index].addEventListener("click", () =>{
            alert("errado")
            bton_errado[0].classList.add("color")
            bton_errado[1].classList.add("color")
            bton_errado[2].classList.add("color")
            btones[numero].classList.add("color")
            botonProximo.classList.remove("disativar");
            botonProximo.classList.add("active");
        })
    }
}

function carregarProximaQuestao(){
    divOpcoes.remove();
    indicePerguntas++;
    carregarQuestao();
    if(indicePerguntas >= perguntasQuiz.length) {
        alert("CABO");
    }
}
