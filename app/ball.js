export const ballTouchRoof = (canvas, ball) => {
  return ball.y <= 0
}

export const ballTouchFloor = (canvas, ball) => {
  return ball.y + ball.h >= canvas.height
}

export const ballTouchLeftWall = (canvas, ball) => {
  return ball.x <= 0
}

export const ballTouchRightWall = (canvas, ball) => {
  return ball.x + ball.h >= canvas.width
}
