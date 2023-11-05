/**
let val1 = parseInt(prompt("qual sua idade"));
let val2 = prompt("ja possui habilitação?");

if(val1 >= 18){
    if(val2 == "sim"){
        alert("pode dirigir");
    }else{
        alert("não pode mas se tem a manha vai fundo");
    }
    }else if(val1 <= 17){
    alert("nem pode ter carta ainda mlk sai fora");
}


/**
 * not(!=) - negação 
 * and(&&) - todas as codições tem que ser verdadeira para a condição ser verdadeira 
 * or(||) - precisa que pelo menos uma das condições sejam verdadeiras para retornar verdadeiro
 ternarios - java sricpt 
estrutura de reptção
 */




let vaga = prompt("voce é gestante,/n idoso ou pcd ?")
vaga = vaga.toLowerCase();

if(vaga == "gestante" || vaga == "idoso" || vaga == "pcd"){
    alert("pode usar a vaga preferencial");
}else{
    alert("pare em vaga comum");
}


