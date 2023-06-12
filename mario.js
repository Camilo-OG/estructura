/* 
--------Tarea --------
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

function esDivisible(numero){
    if( numero % 7 === 0 && numero % 8 ===0){
        console.log("El numero es divisible por 7 y por 8")
    } else if( numero % 8 === 0){
        console.log("El numero es divisible por 8")
    } else if( numero % 7 === 0){
        console.log("El numero es divisible por 7")
    } else {
        console.log("El numero no es divisible ni por 7 ni por 8")
    }
};

esDivisible(56);
console.log("--------------------------------------------");
esDivisible(7);
console.log("--------------------------------------------");
esDivisible(8);
console.log("--------------------------------------------");
esDivisible(0);
console.log("--------------------------------------------");
esDivisible(224);
console.log("--------------------------------------------");
esDivisible(73);


