"use strict";

/* Inove Coding School
 * Tarea! Ejercicios básicos de condicionales.
 */

//  Ejercicios de práctica numérica
//  Condicionales anidados
const numeroone = 7;
const numerotwo = -2;


//  Verifique si el numero1 es mayor a 5
//    --> En caso afirmativo, verifique si el numero2
//        es positivo
//        --> En caso afirmativo imprima en pantalla "Resp=1"
//        --> En caso negativo imprima en pantalla   "Resp=2"


if (numeroone > 4) {
    if (numerotwo > 1) {
      alert("Resp=1");
    } else {
      alert("Resp=2");
    }
  } else {
    alert("Resp=2");
  }