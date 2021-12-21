//criar uma classe CALCULADORA com os atributos numeroA e numeroB
//criar os metodos somar, subtrair, dividir e multiplicar, 
//capturarNumeros e ele recebe por parametro o valor de A e B (com prompt)

//esses metodos serao chamados por botoes no html usando onclick="nomeDaFuncao()"

class Calculadora {
    numeroA
    numeroB

    constructor(numeroA, numeroB) {
        this.numeroA = numeroA
        this.numeroB = numeroB
    }

    capturarNumeros(nA, nB, operacao) {
        this.numeroA = nA
        this.numeroB = nB
    

        switch(operacao) {
            case "somar":
               return this.somar()
             break;
            case "diminuir":
               return this.subtrair()
             break;
        }
    }
    somar() {
        return this.numeroA + this.numeroB
    }

    subtrair() {
        return this.numeroA - this.numeroB
    }
}

let calculadora = new Calculadora(1, 2)
console.log("a soma é " + calculadora.somar());
console.log("a subtração é " + calculadora.subtrair());
console.log("a operação de soma é " + calculadora.capturarNumeros(5,3,"somar"));