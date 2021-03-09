//Ctrl + K + C = Comentar
//Ctrl + K + U = Tirar o comentário
//Alt + Shift + F = Identar

let variavel = 123;
console.log(variavel, typeof variavel);
variavel = "123";
console.log(variavel, typeof variavel);
variavel = true;
console.log(variavel, typeof variavel);
variavel = { nome: "Diogo" };
console.log(variavel, typeof variavel);

console.log("123" === 123);

if("123" === 123){
    console.log("igual");
}else{
    console.log("diferente");
}

console.log(5 * "abcd");