import Brick from '/app/brick.js';

export function buildLevel(game, level) {
    let bricks = [];

    level.forEach( ( row, rowIndex ) => {
        row.forEach( ( brick, brickIndex ) => {
            if ( brick === 1 ) {
                let pos = { x: 80 * brickIndex, y: 75 + 24 * rowIndex }
                bricks.push( new Brick(game, pos) )
            }
        });
    });

    return bricks;
}

export const level1 = [
    [1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]