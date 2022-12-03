const board = document.getElementById('board');
const puntosboard = document.getElementById('puntos');
const comenzoboton = document.getElementById('comenzo');
const perdistesing = document.getElementById('perdiste');
// configuracion de el juego
const boarsize = 10;
const gamespeed = 100;
const cuadrados = {
    cuadrados: 0,
    cuadradosculebra: 1,
    cuadradosfood: 2,
};
//movimiento
const direccion = {
    arriba: -10,
    abajo: 10,
    derecha: 1,
    izquierda: -1,

};
// variables del juego
let snake;
let score;
let direction;
let squares;
let boardsquare;
let emptysquare;
let moveintervalo;

const setgame = () => {

    snake =[00,01,02,03];
    score = snake.length;
    direccion = derecha;
    boardsquare = Array.from(Array(boarsize), () => new Array(boarsize).fill(cuadrados.emptysquare));
    console.log(boardsquare)
}
const startgame = () => {
    setgame();

}


comenzoboton.addEventListener('click', startgame);
