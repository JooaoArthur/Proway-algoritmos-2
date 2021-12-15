console.log("Deu certo");

let nomes = []

console.log(nomes);


let cursos = [
    "algoritmos 1",
    "algoritmos 2",
    "fundamentos em html",
    "java fundamentos",
    "javascript avançado",
    "fundamentos em css"
]

console.log(cursos);

console.log(cursos[1]);
console.log(cursos.indexOf("algoritmos 2"));


cursos.splice(3, 1)

cursos.push("python")
cursos.push("algunlar")

console.log(cursos);

for (let contador = 0; contador < cursos.length; contador++) {

    console.log("na posciçao " + contador + " tem o valor = " + cursos[contador]);

}

console.log("====================================================");
for (let contador = 1; contador <= cursos.length; contador++) {
    console.log("na posição " + contador + " tem o valor = " + cursos[contador - 1]);
}