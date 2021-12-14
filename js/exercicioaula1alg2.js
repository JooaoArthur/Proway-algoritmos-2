/*
Solicite uma quantidade definida de numeros a serem capturados
para cada captura deve verificar qual o maior e o menor numero

após a captura dos numeros exibir o maior o menor e a media geral desses numeros
*/


let quantidade = Number(prompt("Informe quantos numeros serao capturados"))
let menor
let maior
let media
let soma

soma = 0

for (let contador = 1; contador <= quantidade; contador++) {

    let numero = Number(prompt("Informe o" + contador + "ª numero"))
    soma += numero
    if (contador == 1) {
        menor = numero
        maior = numero
    } else {

        if (numero < menor) {
            menor = numero
        }

        if (numero > maior) {
            maior = numero
        }

    }
}

media = soma / quantidade
alert("menor " + menor)
alert("maior " + maior)
alert("media " + media)