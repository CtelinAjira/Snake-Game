const GRID_SIZE = 21;

export function randGridPos() {
    return {
        x: 1 + Math.floor(Math.random() * GRID_SIZE),
        y: 1 + Math.floor(Math.random() * GRID_SIZE)
    };
}

export function outGrid(pos) {
    return (pos.x < 1 || pos.x > GRID_SIZE || pos.y < 1 || pos.y > GRID_SIZE);
}