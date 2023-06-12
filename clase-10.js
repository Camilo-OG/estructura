// console.log("Hola Mundo");

/*
console.log(typeof 2); // Number --> indica el tipo de dato
Operador menor que (<)
Operador mayor que (>)
Operador menor que o igual (<=)
Operador mayor que o igual (>=)
Igual (==)    --> compara solo el valor
No Igual (!=)       --> compara solo el valor
Igual Estricto (===)    --> compara tipo de dato y valor
Estricto No Igual (!==)      --> compara tipo de dato y valor
*/

// console.log(2<3); //true
// console.log(2>3); // false
// console.log(2<=2); // true
// console.log(2>=3); // false
// console.log(2 == "2"); // true
// console.log(2 != "2"); // false
// console.log(2 === "2"); // false
// console.log(2 !== "2"); // true

/*  ------------------------------------
|              Comparador if
    ------------------------------------*/

/*function sentenceIf (anioActual, anioPersona){
    // Guardo en una variable el resultado de la resta
    const resultado = anioActual - anioPersona;
    // Verificar mediante un if si la persona es mayor de edad
    if(resultado >= 18){
        console.log("La persona es mayor de edad y tiene:",resultado, "años.")
    }
    //si no es verdadero el if, ejecuta else 
    else{
        console.log("La persona es menor de edad y le faltan:",(18 - resultado),"años para serlo.")
    }
};
// Se llama la funcion sentence If y se ingresan los valores
sentenceIf(2023,2013); */

/*function sentenceIf (anioActual, anioPersona){
    // Guardo en una variable el resultado de la resta
    const resultado = anioActual - anioPersona;
    // Verificar mediante un if si la persona es mayor de edad
    if(resultado >= 10 && resultado < 20){
        console.log("La persona es mayor de 10 años.")
    } else if (resultado >=20) { // de no cumplir la primera sentencia se ejecuta la siguiente
        console.log("La persona tiene mas de 20 años.")
    } else if (resultado )
};
sentenceIf(2023,1995); */


/* --------Tarea --------
Mario quiere averiguar si un número es divisible entre 7 y 8. Ayuda a Mario escribiendo un programa que tome un número. Si el número es divisible entre 7 y 8, el programa debe devolver verdadero. Si el número no es divisible entre 7 y 8, devuelve falso.

Casos de prueba que los participantes deberían probar:
56
7
8
0 
224
73 
---------Tarea -------
*/

/* 
=============ARRAY=============
*/
/*
let arreglo = [1, 2, 3];
arreglo.push(4); // metodo .push agrega un valor al arreglo al final de este
console.log(arreglo); // [ 1, 2, 3, 4 ]
arreglo.shift(); // metodo .shift elimina el primer elemento del arreglo
console.log(arreglo); // [ 2, 3, 4 ]
arreglo.pop(); // metodo .pop elimina el ultimo valor de un arreglo
console.log(arreglo); // [ 2, 3]
console.log(arreglo.length); //metodo .length entrega el numero de elementos dentro de un array

let frutas = ["manzanas", "peras", "bananas"];
let primeraFruta = frutas[0];
let segundaFruta = frutas[1];
let terceraFruta = frutas[2];
console.log(primeraFruta, segundaFruta,terceraFruta);

frutas.push("duraznos","naranja");
console.log(frutas);

let elementosAzar = [2, true, "nombre", "hola", undefined] // Un arreglo puede contener distintos tipos de elementos
console.log(elementosAzar[1]); // true

let posicion = frutas.indexOf("bananas"); // el metodo .indexOf te devuelve la posición del elemento buscado dentro de un array
console.log(posicion);
*/


/*
__________________________________________________
____________________ Ciclo for ___________________
__________________________________________________
*/

// for (inicializarVariable, condicion, incremento){}

let frutas = ["manzanas", "peras", "bananas","duraznos","uvas","naranjas"];

for( let i = 0; i < frutas.length; i++){
    // i = 0 ; frutas.lenght = 6 ; i = 1 --> frutas[0]
    // i = 0 ; frutas.lenght = 6 ; i = 1 --> frutas[1]
    // i = 0 ; frutas.lenght = 6 ; i = 1 --> frutas[2]
    // i = 0 ; frutas.lenght = 6 ; i = 1 --> frutas[3]
    // i = 0 ; frutas.lenght = 6 ; i = 1 --> frutas[4]
    // i = 0 ; frutas.lenght = 6 ; i = 1 --> frutas[5]
    console.log(frutas[i])
};

const array = [1,2,3,4,5,6,7,8,9];

for( let i = 0; i < array.length ; i++ ){
    console.log(array[i])
};