export default (ctx, width, height, color = 'black') => {
    ctx.fillStyle = color
    ctx.fillRect(0,0, width, height)
  }