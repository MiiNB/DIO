let vitorias = parseInt(prompt("Digite o número de vitórias:"));
let derrotas = parseInt(prompt("Digite o número de derrotas:"));

let classificacao = vitorias + derrotas;
let nivel;

if (classificacao < 10) {
    nivel = "Ferro";
} else if (classificacao >= 11 && classificacao < 20) {
    nivel = "Bronze";
} else if (classificacao > 21 && classificacao < 50) {
    nivel = "Prata";
} else if (classificacao > 51 && classificacao < 80) {
    nivel = "Ouro";
} else if (classificacao > 81 && classificacao < 90) {
    nivel = "Diamante";
    else if (classificacao > 91 && classificacao < 100) {
        nivel = "Lendário";
} else {
    nivel = "Imortal;
}

console.log("O herói tem" + classificacao `vitórias, está no nível${nivel}` )