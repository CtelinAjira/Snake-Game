import {
    getInDir
} from './input.js'

export const SNEK_SPEED = 4;
const snekBody = [{x: 11, y: 11}];
let newSeg = 0;

export function update() {
    addSeg();
    const inDir = getInDir();
    for (let i = snekBody.length - 2; i >= 0; i--) {
        snekBody[i + 1] = {...snekBody[i]};
    }
    snekBody[0].x += inDir.x;
    snekBody[0].y += inDir.y;
    console.log(snekBody[0].x + ', ' + snekBody[0].y);
}

export function draw(gameBoard) {
    snekBody.forEach(seg => {
        const snekElem = document.createElement('div');
        snekElem.style.gridRowStart = seg.x;
        snekElem.style.gridColumnStart = seg.y;
        snekElem.classList.add('snake');
        gameBoard.appendChild(snekElem);
    });
}

export function expandSnek(amt) {
    newSeg += amt;
}

export function onSnek(pos, {ignoreHead = false} = {}) {
    return snekBody.some((seg, index) => {
        if (ignoreHead && index === 0) return false;
        return equalPos(seg, pos);
    });
}

export function getSnekHead() {
    return snekBody[0];
}

export function snekIntersect() {
    return onSnek(snekBody[0], {ignoreHead: true});
}

function equalPos(pos1, pos2) {
    return (pos1.x === pos2.x && pos1.y === pos2.y);
}

function addSeg() {
    for (let i = 0; i < newSeg; i++) {
        snekBody.push({...snekBody[snekBody.length - 1]});
    }
    newSeg = 0;
}