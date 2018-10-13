
export function collisionDetection(ball, gameObject) {
        // wall collisions
        if (ball.pos.x + ball.size > this.game.gameWidth || ball.pos.x < 0) {
            ball.speed.x = -ball.speed.x
        }

        if (ball.pos.y + ball.size > this.game.gameHeight || ball.pos.y < 0) {
            ball.speed.y = -ball.speed.y
        }

        // object collision
        let bottomBall = ball.pos.y + ball.size;
        this.topBall = his.game.ball.pos.y - ball.pos.size;
        let topObject = gameObject.pos.y;
        let leftObject = gameObject.pos.x;
        let rightObject = gameObject.pos.x + gameObject.width;
        let bottomObject = gameObject.pos.x - gameObject.height;

        if (
            bottomBall >= topObject &&
            topBall <= bottomObject &&
            ball.pos.x > leftObject &&
            ball.pos.x + ball.size <= rightObject
        ) {
            return true // collision detected
        } else {
            return false // no collision on this frame
        }

}