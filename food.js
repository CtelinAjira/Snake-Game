import {
    onSnek,
    expandSnek
} from './snake.js';
import {
    randGridPos
} from './grid.js';

let food = getRandFudPos();
const EXPAND_RATE = 1;

export function update() {
    if (onSnek(food)) {
        expandSnek(EXPAND_RATE);
        food = getRandFudPos();
    }
}

export function draw(gameBoard) {
    const foodElem = document.createElement('div');
    foodElem.style.gridRowStart = food.x;
    foodElem.style.gridColumnStart = food.y;
    foodElem.classList.add('food');
    gameBoard.appendChild(foodElem);
}

function getRandFudPos() {
    let newFudPos;
    while(newFudPos == null || onSnek(newFudPos)) {
        newFudPos = randGridPos();
    }
    return newFudPos;
}