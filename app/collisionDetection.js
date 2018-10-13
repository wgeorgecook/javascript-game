
export function collisionDetection(ball, gameObject) {

        // object collision
        let bottomBall = ball.pos.y + ball.size;
        let topBall = ball.pos.y;
        let topObject = gameObject.pos.y;
        let leftObject = gameObject.pos.x;
        let rightObject = gameObject.pos.x + gameObject.width;
        let bottomObject = gameObject.pos.y + gameObject.height;

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