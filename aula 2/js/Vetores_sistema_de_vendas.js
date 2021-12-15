//precisamos catalogar todos os veiculos e seus valores
//para isso precisamos de dois vetores
//1 para nomes e 1 para valores
//cada posicao sera respectivamente nome e valor
//a quantidade de veiculos é indefinida ate que informe que nn deseje continuar com o cadastro
//apos o cadastro exibir o nome e valor do primeiro veiculo e do ultimo 

//primeiro é lista[0]
//ultimo lista[ lista.length- 1 ]

let nomes = []
let valores = []
let resposta
let nome
let valor

do {

    nome = prompt("informe o nome do veiculo")
    nomes.push(nome)

    valor = Number(prompt("informe o valor do veiculo" + nome))
    valores.push(valor)

    resposta = prompt("deseja continuar S/N ?")
} while (resposta == "S" || resposta == "s")

alert("o primeiro veiculo foi " + nomes[0] + "custando R$ " + valores[0])
alert("o primeiro veiculo foi " + nomes[nomes.length+1] + " custando R$ " + valores[valores.length-1])