console.log(`Trabalhando com Listas`);
// const salvador = `Salvador`;
// const saoPaulo = `Sao Paulo`;
// const riodeDeJaneiro = `Rio de Janeiro`;

// let new = 2;

const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`,
);

listaDeDestinos.push(`Cuririba`)

console.log("Destinos Possiveis:");
// console.log(salvador, saoPaulo, riodeDeJaneiro);
console.log(listaDeDestinos);


listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);


console.log(listaDeDestinos[1], listaDeDestinos[0]);