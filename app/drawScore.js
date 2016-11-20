export const drawScore = (ctx, canvas, player, i) => {
  ctx.fillStyle = 'white'
  ctx.font='12px monospace';
  ctx.textAlign = (i) ? 'right' : 'left'

  let x = (i) ? canvas.width-10 : 10

  ctx.fillText(('00' + player.score).substr(-3), x, 20);
  }
