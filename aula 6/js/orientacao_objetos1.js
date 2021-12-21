console.log("deu certo");

//aluno
//atributos = variaveis (S)
//nome number
//idade number
//nota number
//matricula
//senha
//
//metodos = funções sem o comando function
//conversar (ouviu) --> return resposta
//responderChamada (professor) --> "professor, MEU_NOME presente"
//meApresentar () --> "Oi meu nome é NOME e tenho XX anos minha matricula é XXXXXXXXXX" 


class Aluno {

    nome
    idade
    matricula
    senha
    nota

    constructor(nome, idade, matricula, senha, nota) {
        this.nome = nome
        this.idade = idade
        this.matricula = matricula
        this.senha = senha
        this.nota = nota
    }

    conversar(ouviu) {
        return ouviu + ", Hmmm, que interessante!"
    }
    chamarProfessor(mensagem) {
        return "Ja resolveu era isso (" + mensagem + ")"
    }
    meApresentar() {
        return "ola meu nome é " + this.nome + " tenho " + this.idade + " anos, matricula = " + this.matricula + " e prefiro nao dizer minha senha"
    }
}

let nome = "Joao"

let aluno1 = new Aluno("Joao Arthur", 17, "1090700326", "123", 10)

let alunoX = new Aluno("Miranha", 20, "000", "miranha123", 9)

console.log(aluno1);
console.log(aluno1.nome);
console.log(aluno1.matricula);

console.log(alunoX.senha);

aluno1.nome = "XXX"
console.log(aluno1);

alunoX.nome = "Enrico"
alunoX.idade = 13
alunoX.matricula = "003"
alunoX.senha = "enrico123"
alunoX.nota = 7

console.log(alunoX);
console.log(alunoX.idade);

let colega = new Aluno("Joao Paulo", 19, "004", "jp123", 5)

console.log(colega);

aluno1.conversar("sobre o filme do miranha")

document.write(aluno1.conversar("conversar sobre o filme do miranha"))
let resposta = aluno1.conversar("sobre o filme do miranha")

console.log(resposta);

console.log(alunoX.conversar("Nada a declarar"));

let aluno2 = new Aluno("Derik", 20, "005", "EuSouODerik", 6)

console.log(aluno2.nome);
console.log(aluno2.idade);

console.log("Olá, meu nome é ", aluno2.nome);
console.log("oi, eu tenho " + aluno2.idade + " anos");

console.log(aluno2.conversar("aprendi orientação a objetos"));

console.log(aluno2.chamarProfessor("erro na linha 64"));

console.log(aluno1.meApresentar());
console.log(aluno2.meApresentar());