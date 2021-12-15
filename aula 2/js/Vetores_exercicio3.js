//criar um vetor vazio para solicitar do usuario frases aleatorias
//repetir essa captura ate que o usuario digite ""
//e para cada repetição escrever em tela a frase aleatoria capturada

let frases
let frase

do {
    frase = prompt("Informe uma frase")

    document.write("<br>" + frase)

} while (frase != "")