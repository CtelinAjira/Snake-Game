import {
    SNEK_SPEED,
    update as updateSnek,
    draw as drawSnek,
    getSnekHead,
    snekIntersect
} from './snake.js';
import {
    update as updateFud,
    draw as drawFud
} from './food.js';
import {
    outGrid
} from './grid.js';

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');

function main(currentTime) {
    if (gameOver) {
        if (confirm('GAME OVER\nPress OK to reset')) {
            window.location = '/';
        }
        return;
    }
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < (1 / SNEK_SPEED)) return;
    lastRenderTime = currentTime;
    update();
    draw();
}

window.requestAnimationFrame(main);

function update() {
    updateSnek();
    updateFud();
    checkDeath();
}

function draw() {
    gameBoard.innerHTML = '';
    drawSnek(gameBoard);
    drawFud(gameBoard);
}

function checkDeath() {
    gameOver = outGrid(getSnekHead()) || snekIntersect();
}