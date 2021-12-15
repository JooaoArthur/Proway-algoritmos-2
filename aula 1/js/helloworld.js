
let nome = "Joao Arthur" // variavel do tipo string
let idade = 17 // varialvel do tipo number
let DistanciaProway = 0.3 // variavel do tipo number
let qualquer = ""

console.log("Olá, meu nome é", nome, "e tenho", idade, "anos e moro à", DistanciaProway, "Km de distancia daqui");

//let bairro = prompt("Informe o seu bairro")

//alert(bairro)

if (idade >= 18) {
    console.log("vc é maior de idade");
} else {
    console.log("vc é menor de idade");
}

if (idade <= 15) {
    console.log("vc é um adolescente");
} else {
    console.log("vc nn é mais um adolescente");
}

console.log("Escolha uma opção:");
console.log("1 - primavera");
console.log("2 - verao");
console.log("3 - inverno");
console.log("4 - outono");
let opcao = 1

switch (opcao) {
    case 1:
        console.log("vc escolheu a primavera")

        break;

    case 2:
        console.log("vc escolheu o verao")

        break;

    case 3:
        console.log("vc escolheu o inverno");

        break;

    case 4:
        console.log("vc escolheu o outono");

        break;

    default:
        console.log("vc escolheu nada");

        break;
}

let quantidade = 15

for (let contador = 1; contador <= quantidade; contador++) {
    console.log("repetindo pela", contador, "x");
}

for (let variavel = 1; variavel <= 50; variavel + 10) {
    console.log("repetindo pela", variavel, "x");
}

let resposta

do {

    resposta = prompt("tinham 2 dog, o pita e o repita, o pita morreu, quem sobrou?")

} while (resposta = "repita");