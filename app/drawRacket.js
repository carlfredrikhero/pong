export const drawRacket = (ctx, racket) => {
    ctx.fillStyle = racket.color
    ctx.fillRect(racket.x, racket.y, racket.w, racket.h)
  }
