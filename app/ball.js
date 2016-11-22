export const touchesRoof = (canvas, ball) => {
  return ball.y <= 0 && ball.y_dir < 0
}

export const touchesFloor = (canvas, ball) => {
  return ball.y >= canvas.height - ball.h && ball.y_dir > 0
}

export const touchesLeftWall = (canvas, ball) => {
  return ball.x <= 0
}

export const touchesRightWall = (canvas, ball) => {
  return ball.x + ball.h >= canvas.width
}

/**
 * Return 0 or 1 which equals the player index whose racket is touched
 * otherwise returns -1
 */
export const touchesRacket = (state) => {
  let ball = state.ball

  // touches left racket?
  let r0 = state.players[0].racket
  if (ball.x_dir < 0 &&
      ball.x <= r0.x+r0.w &&
      ball.y >= r0.y &&
      ball.y <= (r0.y+r0.h)) return 0

  // touches right racket?
  let r1 = state.players[1].racket
  if (
    ball.x_dir > 0 &&
    ball.x >= r1.x-r1.w &&
    ball.y >= r1.y &&
    ball.y <= (r1.y+r1.h)) return 1

  return -1
}
