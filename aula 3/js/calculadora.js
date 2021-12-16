console.log("deu certo");


function capturarNumeros(acao) {

    let nA = promptNumero("Informe o primeiro numero")
    let nB = promptNumero("Informe o segundo numero")
    console.log(acao);

    switch (acao) {

        case "somar":
        somar(nA,nB)
            break

        case "subtrair":
        subtrtair(nA,nB)
            break

        case "divisão":
        divisão(nA,nB)
            break

        case "multiplicação":
        multiplicação(nA,nB)
            break

        default:
        console.log("fazer nada pq nn tem uma opçao certa aq");
            break
    }

}

function promptNumero(frase) {

    let temporario = Number(prompt(frase))
    return temporario
}

function somar(numeroA,numeroB){

    alert(numeroA+numeroB)
    
}

function subtrtair(numeroA,numeroB){

    alert(numeroA-numeroB)

}

function divisão(numeroA,numeroB){

    alert(numeroA/numeroB)

}

function multiplicação(numeroA,numeroB){

   alert(numeroA*numeroB)

}