let nome = prompt("digite seu nome");
let idade = parseInt(prompt("sua idade aqui"));
let niver = prompt("vc ja fez aninhos esse ano?");

var ana = 2023 - idade;
//um (=) significa que está guardando algo
//dois (==) significa que estou comparando os caracteres
//tres (===) significa que estou comparando caracteres e o tipo de dado.
if(niver == 'sim' ){
    alert(`vc nasceu em: ${ana}`); // interpolação: chama uma variavel dentro de uma mensagem (contatenar)
}else{
    let carol = ana - 1; 
    alert(`vc nascer em: ${carol}`);
};