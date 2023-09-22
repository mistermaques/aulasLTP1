let  num1 = parseFloat(prompt("digita um numerozin"));
let  num2 = parseFloat(prompt("digite outro numerozin"));
let ope = prompt("digite a operação (soma, subtração, multiplicação, divisão ou potencia");
ope = ope.toUpperCase();

if(ope == "SOMA"){
    const result = num1 + num2;
    alert(`o resultado é ${result}`);
}else if(ope == "SUBTRAÇÃO"){
    const result = num1 - num2;
    alert(`o resultado é ${result}`);
}else if(ope == "MULTIPLICAÇÃO"){
    const result = num1 * num2;
    alert(`o resultado é ${result}`);
}else if(ope == "DIVISÃO"){
    if(num2 == 0){
        alert("não da por 0 porr")
    }else{
        const result = num1 / num2;
    alert(`o resultado é ${result}`)
    }
}else if(ope == "POTENCIA"){
    const result = num1 ** num2;
    alert(`o resultado é ${result}`);
}else{
    alert("operação invalida")
}