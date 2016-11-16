export default (ctx, ball) => {
  ctx.fillStyle = ball.color
  ctx.fillRect(ball.x, ball.y, ball.w, ball.h)
}
