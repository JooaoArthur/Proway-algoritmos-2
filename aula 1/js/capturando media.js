/*
criar variaveis para o nome do aluno, as 3 notas e calcular a media

//pode usar 3 variaveis para as notas ou usar repetição para a quantidade de notas 
*/

console.log("Calculando a media do aluno");

let nome = prompt("Informe seu nome:")
//let nota1 = Number(prompt("Informe sua primeira nota:"))
//let nota2 = Number(prompt("Informe sua segunda nota:"))
//let nota3 = Number(prompt("Informe sua terceira:"))

//let media = (nota1 + nota2 + nota3) / 3

//if (media >= 7) {

// console.log("o aluno", nome, "passou com media", media);

//} else {

// console.log("o aluno", nome, "nao passou com media", media);

//}

let qtdnotas
let nota
let soma

qtdnotas = Number(prompt("Informe a quantidade de notas"))

soma = 0

for (let contador = 1; contador <= qtdnotas; contador++) {

    nota = Number(prompt("Informe a " + contador + " ª nota do aluno" + nome))
    soma += nota

}

let media = (soma) / qtdnotas

alert("Media é " + media);

if (media < 7) {
    alert("reprovado");
} else {
    alert("aprovado");
}
