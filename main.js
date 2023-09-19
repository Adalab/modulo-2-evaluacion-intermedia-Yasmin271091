"use strict";

/*-crear estructura HTML--Boton, select, parrafo.
2-dar clases de js, js-btn...
3-crear los constantes.
4-eventos y funciones manejadoras--click.

    Generar un número aleatorio entre 1 y 9 con la ayuda de Math.random y Math.ceil. Puedes usar la
siguiente función, copia estas 3 líneas de código en vuestro JS y no las modifiquéis:
    1-const numeroRandom = funcion numeroRandom;

    Generar un movimiento aleatorio y para eso puedes seguir las siguientes indicaciones:
si el número aleatorio generado en el paso anterior es menor o igual que 3 el movimiento es
piedra si el número aleatorio generado es mayor o igual que 7 el movimiento es papel
y sino, el movimiento generado es tijera*/

//Constantes
const select = document.querySelector(".js-select");
const btn = document.querySelector(".js-btn");
const textResult = document.querySelector(".js-textResult");
const playerOne = document.querySelector(".js-player");
const playerComputer = document.querySelector(".js-computer");
//variables
let playerPoints = 0; // Puntos del jugador
let computerPoints = 0; //Puntos del ordenador
let game = 0; // Numero de partidas

//FUNCIONES
//crea numeros aleatorios de 0 a 9
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
//al escoger un resultado (piedra, papel o tijera) lo convierte en nuemero(puntos)
function userPlayer(){
    return parseInt(result.value);
}

function getComputer() {
  const randomNumber = getRandomNumber(9);
  let result = "";
  if (randomNumber >= 3) {
    result = piedra;
  } else if (randomNumber <= 7) {
    result = papel;
  } else {
    result = tijera;
  }
  return result;
}

function handleClick(event) {
  event.preventDefault();
}

//EVENTOS

btn.addEventListener("click", handleClick);
