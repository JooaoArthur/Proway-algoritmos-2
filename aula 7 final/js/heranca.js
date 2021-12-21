
class Pessoa {

    nome
    idade
    altura
    salario

    constructor(nome, idade, altura, salario) {
        this.nome = nome
        this.idade = idade
        this.altura = altura
        this.salario = salario

    }
}

class Diretor extends Pessoa {
    qtdProfessores

    constructor(nome, idade, qtdProfessores) {

        super(nome, idade)
        this.qtdProfessores = qtdProfessores
    }
}

class Aluno extends Pessoa {

    //atributos da classe aluno
    
    matricula

    //constructor utilizado no new que recebe os parametros para inicializar 
    //os atributos no novo objeto do tipo Aluno
    constructor(nome, idade, matricula) {

        //para cada parametro inicializo respectivamente o atributo do objeto 
        //o (this.) é utilizado para identificar que o atributo é do objeto 
        //isso ajuda a nao confundir parametro com atributo
        super(nome, idade)
        this.matricula = matricula
    }

    meApresentar() {
        return "ola meu nome é " + this.nome + " tenho " + this.idade + " anos, e minha matricula é " + this.matricula

    }
}

class Professor extends Pessoa {

    
    qtdAlunos

    constructor(nome, idade, qtdAlunos, altura, salario) {

        super(nome, idade, altura, salario)
        this.qtdAlunos = qtdAlunos
    }

    meApresentar() {
        return "Ola meu nome é " + this.nome + "tenho " + this.idade + " anos, e tenho " + this.qtdAlunos + " alunos"
    }
}

let prof1 = new Professor("Rubem", 32, 15, 1.80, 5000)
console.log(prof1);
console.log(prof1.nome);
console.log(prof1.idade);
console.log(prof1.qtdAlunos);

let paulo = new Diretor("Paulo Y Kano", 80, 30)

console.log(paulo);
console.log(paulo.idade);
console.log(paulo.qtdProfessores);