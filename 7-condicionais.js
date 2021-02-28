console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos Possiveis:");
console.log(listaDeDestinos);

//if (idadeComprador >= 18) {
//    console.log("Comprador Maior de Idade");
//    listaDeDestinos.splice(1, 1); // removendo item
//} else if (estaAcompanhada == true) {
//    console.log("Comprador esta acompanhado");
//    listaDeDestinos.splice(1, 1); // removendo item
//} else {
//    console.log("Nao é maior de Idade e nao posso vender");
//}

if (
    idadeComprador >= 18 || estaAcompanhada == true ) {
    console.log("Boa Viagem!!!");
    listaDeDestinos.splice(2, 1); // removendo item
}  else {
    console.log("Nao é maior de Idade e nao posso vender");
}

console.log("Embarque: \n\n");
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa Viagem!!");
}else{
    console.log("Voce nao pode embarcar");
}

console.log(listaDeDestinos);


// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);