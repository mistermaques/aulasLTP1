/*et val = 0;

while(val <= 10){
    console.log("numero", val);
    //val = (val + 1);
    //o ++ soma 1 na varialvel
    // val += 3 ou val -=3 para soma ou subtrair 3
    val += 2;
}*/

let cleber = parseFloat(prompt("digita um numerozin"));
let ana = 0;
let ope = prompt(" digite a operação +, -, * ou /");
 if(ope == "*" ){
    while(ana <= 20){
        console.log(cleber, `x `, ana, `=`, cleber * ana);
        ana++
    }
 }else if(ope == "+" ){
    while(ana <= 10){
    console.log(cleber, `+ `, ana, `=`, cleber + ana);
    ana++
}
 }else if(ope == "-"){
    while(ana <= 10){
        console.log(cleber, `- `, ana, `=`, cleber - ana);
        ana++
    }
 }else if(ope == "/" && cleber != 0){
    while(ana <= 10){
        console.log(cleber, `/ `, ana, `=`, cleber / ana);
        ana++
    }
 }else{
    console.log("operação invalida")
 }
