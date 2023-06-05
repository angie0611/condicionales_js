"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

// Ejercicios de práctica numérica
// Comparadores
// Ingrese dos números cualesquiera y realice las sigueintes
// comparaciones entre ellos
const numero1 = parseInt(prompt('Ingrese el primer número:\n'));

const numero2 = parseInt(prompt('Ingrese el segundo número:\n'));

// Compare cual de los dos números es mayor
// Imprima en pantalla según corresponda

if (numero1 > numero2) {
    alert("Número: " + numero1 + " es mayor que número: " + numero2);
  } else if (numero2 > numero1) {
    alert("Número: " + numero2 + " es mayor que número: " + numero1);
  } else {
    alert("Número: " + numero2 + " y número: " + numero1 + " son iguales");
  }

// Verifique si el numero1 positivo, negativo o cero
// Imprima el resultado en cada caso

if (numero1 > 0) {
    alert("El " + numero1 + " es positivo");
  } else if (numero1 < 0) {
    alert("El " + numero1 + " es negativo");
  } else {
    alert("El número es cero");
  }
// Verifique si el numero1 es mayor a 0 y menor a 100
// Imprima en pantalla si se cumple o no la condición

if (numero1 > 0&& numero1 < 100) {
    alert("La condición se cumple");
  } else {
    alert("La condición no se cumple");
  }
  

// Verifique si el numero1 es menor a 10 o el numero2
// es mayor a - 2
// Imprima en pantalla si se cumple o no la condición

if (numero1 < 8 || numero2 > -2) {
    alert("Se cumple la condición");
  } else {
    alert("No se cumple la condición");
  }