let nome = "Leonardo";
let idade = 24
const aluno = 'true';

function popularParagrafo(){
    const p = document.querySelector("#primeiro");
    p.textContent= nome;
    const pp =document.querySelector ("#segundo")
    pp.textContent= idade
    const ppp= document.querySelector("#terceiro")
    ppp.textContent= aluno
}

popularParagrafo()
