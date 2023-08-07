
let nombre = 'Jose'; 

console.log (`Hola mundo, mi nombre es ${nombre}`)

//Ternary Operator
let edad = 19;
let mensaje = (edad >= 18) ? "Eres adulto" : "Eres menor de edad";
console.log(mensaje);

//Else statement 
const mayor = true; 
mensaje = 'Eres adulto, puedes ingresar'; 
if (mayor){

    console.log(mensaje);

}else{
     console.log("No puedes ingresar");
}

//Switch statement 
 let mes = 3 ; 

 switch(mes){
    case 1: 
        console.log("Enero");
        break; 
    case 2: 
        console.log("Febrero");
        break; 
    case 3: 
        console.log("Marzo");
        break; 
    case 4:
        console.log("Abril");
   default:
        console.log("Otro");
 }

//if statement 

 if (mes ==3 ){
    console.log("feliz cumpleaños" + nombre)}


//Logical Operator !
let esDiaSoleado = true;
let tienesSombrero = false;
let message = esDiaSoleado && tienesSombrero ? "Lleva tu sombrero para protegerte del sol" : "No necesitas un sombrero en este momento";
let messageNegate = !esDiaSoleado || !tienesSombrero ? "Lleva un sombrero para protegerte del sol" : "No necesitas un sombrero en este momento";
console.log(message);
console.log(messageNegate);

//else if Clause
const nota = 4.5;

if (nota >= 4.5) {
    console.log("Tienes una A");
} else if (nota >= 4) {
    console.log("Tienes una B");
} else if (nota >= 3) {
    console.log("Tienes una C");
} else if (nota >= 2) {
    console.log("Tienes una D");
} else {
    console.log("Tienes una F");
}

//Truthy and Falsy 
if (nombre) {
    console.log(`Hola, ${nombre}`); 
} else {
    console.log("Hola, desconocido"); 
}

//Reverse Loop
const animales =['Perro','Gato','Conejo','Loro'];

for(let a = animales.length - 1; a>=0 ; a -=1){
    console.log(`${a+1}. ${animales[a]} `)
}

//Do While Statement
cont = 1; 
do{
    console.log(`Jugador # ${cont}`)
    cont ++; 

}while (cont < 10); 

//For Loop
let suma = 0;
for (let i = 1; i <= 10; i++) {
    suma += i;
}
console.log("La suma es:", suma);

// Looping Through Arrays
let numeros = [1, 2, 3, 4, 5];
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

//Break Keyword
for (i = 0; i < numeros.length; i++) {
    if (i === 3) {
        break; 
    }
    console.log(i);
}

//Nested For Loop
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("----------------");
}

//While Loop
suma = 0;
let numero = 1;

while (numero <= 10) {
    suma += numero;
    numero++;
}

console.log("La suma es:", suma);




