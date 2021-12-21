//criar uma classe professor com os atributos
//nome strin
//idade number
//qtdAlunos number

//metodos fazerChamadas que recebe por parametro o nome do aluno e retorna (presença verificada)
//calcularMedia recebe 3 notas e devolve a media

//apos criar a classe instanciar 1 objeto da classe Professor para atribuir os valores 
//atualizar algum valor de atributo do professor
//utilizar os metodos do professor

class Professor {
    nome
    idade
    qtdAlunos

    constructor(nome, idade, qtdAlunos) {
        this.nome = nome
        this.idade = idade
        this.qtdAlunos = qtdAlunos
    }

    fazerChamada(marcar) {
        return " presença verificada " + marcar + " marcado na lista"
    }
    calcularMedia(nota1, nota2, nota3) {
        return (nota1 + nota2 + nota3) / 3
    }

}

let professor1 = new Professor("Fulano", 60, 30)
professor1.qtdAlunos = 20

console.log(professor1.fazerChamada("Ciclaninho"));

let media = professor1.calcularMedia(5, 7, 9)

console.log(media);

//instanciem outro professor e utilizem seus atributos e metodos 
//ler valores separadamente 
//atualizar valores e ver o ANTES e DEPOIS
//fazer mais de uma CHAMADA
//calcular mais de uma MEDIA

let professor2 = new Professor("Fuplano", 45, 15)
professor2.qtdAlunos = 30

console.log(professor2.fazerChamada("Plutaninho"));

let mediA = professor2.calcularMedia(7,7,10)

console.log(mediA);

console.log(professor2.fazerChamada("Enriquinho"));

let mediaa = professor2.calcularMedia(7,10,10)

console.log(mediaa);

