let inDir = {x: 0, y: 0};
let lastInDir = {x: 0, y: 0};

window.addEventListener('keydown', e => {
    switch(e.key) {
        case 'ArrowLeft':
            if (lastInDir.y !== 0) break;
            inDir = {x: 0, y: -1};
            break;
        case 'ArrowRight':
            if (lastInDir.y !== 0)
            break; inDir = {x: 0, y: 1};
            break;
        case 'ArrowUp':
            if (lastInDir.x !== 0) break;
            inDir = {x: -1, y: 0};
            break;
        case 'ArrowDown':
            if (lastInDir.x !== 0) break;
            inDir = {x: 1, y: 0};
            break;
    }
});

export function getInDir() {
    lastInDir = inDir;
    return inDir;
}