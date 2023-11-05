// exercicio 1
let cleber = parseFloat(prompt("digite um numero de 0 a 10 ")); 

while(cleber > 10 || cleber < 0){
 cleber = parseFloat(prompt("numero invalido digite novamente"))
};
alert("sua nota é "+ cleber);


//exercicio 2 
let cleber = prompt("nome de usuario");
let ana = prompt("sua senha");

while(cleber == ana ){
 ana = prompt("senha invalida, digite senha diferente de usuario");
}
alert("login feito");

//exercicio 3 
//Faça um programa que leia 5 números e informe a soma e a média dos números

let val = 1;

while(val <= 50){
    console.log("numero", val);
    val += 2}

//exercicio 4 

let cleber = parseFloat(prompt("digita um numerozin"));
let ana = 0;
while(ana <= 10){
    console.log(cleber, `x `, ana, `=`, cleber * ana);
    ana++
}
