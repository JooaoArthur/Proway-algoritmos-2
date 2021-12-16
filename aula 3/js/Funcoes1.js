console.log("deu certo");

let nome = capturaTexto("Informe seu nome")
let idade = capturaNumeroEspecial("Informe sua idade")
let anoAtual = capturaNumeroEspecial("Informe o ano atual")
let cidade = capturaTexto("Informe sua cidade")

console.log("oi meu nome é " + nome + " tenho " + idade + " anos, estamos no ano de " + anoAtual + " e estou em " + cidade)


//declaração de função
//tem palavra reservada function
//tem nome da função
//() gaveta de parametros
//{} escopo tudo que sera executado
//conteudo que eu qro executar
function meApresentar() {

    let nome = "joao"
    let idade = 17

    console.log("meu nome é " + nome + " e tenho " + idade + " anos");

}

function retornoSimples() {
    return "ta aq oq vc precisa"
}

function retorneInteiro() {
    return 14
}


function capturaTexto(texto) {

    let temporario = prompt(texto)
    return temporario

}

function capturaNumero() {

    let temporario = Number(prompt("informe sua idade"))
    return temporario

}

function capturaNumero() {

    let temporario = Number(prompt("informe o ano atual"))
    return temporario

}

function capturaNumeroEspecial(frase) {
    let temporario = Number(prompt(frase))
    return temporario
}