let t = parseFloat(prompt("qual a temperatura? escreva em maiuscolo"));
let medida = prompt("escolha uma unidade de temperatura - celcius - fahrenheit - Kelvin ");
let convmed = prompt("para qual unidade de temperatura vai converter - celcius - fahrenheit - Kelvin escreva em maiusculo");
let celcius = 1;
let Kelvin = 274.15;
let fah = 33.8;


if(convmed == "KELVIN" )
{if (medida == "CELCIUS"){ let result1 = t * Kelvin;
    alert(`${result1}kelVIN`);
}}else{
    let result = t / Kelvin;
    alert(`${result}celcius`);

} 

if(convmed == "FAHRENHEIT" )
{if (medida == "CELCIUS"){ let result1 = t * fah;
    alert(`${result1}FAHRENHEIT`);
}}else{
    let result = t / fah;
    alert(`${result}celcius`);

} if(convmed == "KELVIN" )
{if (medida == "FAHRENHEIT"){ let result1 = t * Kelvin;
    alert(`${result1}kelVIN`);
}}else{
    let result = t / fah;
    alert(`${result}FAHRENHEIT`);

} 




