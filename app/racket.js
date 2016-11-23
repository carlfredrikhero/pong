export const touchesRoof = (canvas, racket, direction) => {
  return racket.y <= 0 && direction < 0
}

export const touchesFloor = (canvas, racket, direction) => {
  return racket.y >= canvas.height - racket.h && direction > 0
}
