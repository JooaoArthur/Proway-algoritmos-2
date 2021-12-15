console.log("Criar um vetor de gostos pessoais");
console.log("Pode criar o vetor js com valores ou nao");
console.log("Se nao tiver  valores usar o push para incluir item a item")

console.log("Exibir a lista toda em log");
console.log("Percorrer a lista para apresentar cada valor com uma frase");

let gostos = [
    "jogar no pc",
    "jogar futebol",
    "treinar na academia",
    "tocar violao",
    "tocar piano"
]

console.log(gostos);

for (let contador = 1; contador <= gostos.length; contador++) {
    console.log("Na posição " + contador + " gosto muito de " + gostos[contador - 1]);
}

console.log(gostos[0]);