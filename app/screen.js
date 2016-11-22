export default Screen = (el) => {
  let ctx = el.getContext('2d');
  const render = (state) => {
    // draw canvas
    ctx.fillStyle = 'black'
    ctx.fillRect(0,0, el.width, el.width)
    // draw_scores
    state.players.forEach(drawScore)
    //draw_ball
    let ball = state.ball
    ctx.fillStyle = ball.color
    ctx.fillRect(ball.x, ball.y, ball.w, ball.h)
    // draw_rackets
    state.players.forEach(drawRacket)
  }

  const drawScore = (player, i) => {
    ctx.fillStyle = 'white'
    ctx.font='12px monospace';
    ctx.textAlign = (i) ? 'right' : 'left'

    let x = (i) ? el.width-10 : 10

    ctx.fillText(('00' + player.score).substr(-3), x, 20);
  }

  const drawRacket = (player) => {
    let racket = player.racket
    ctx.fillStyle = racket.color
    ctx.fillRect(racket.x, racket.y, racket.w, racket.h)
  }

  return {
    render
  }
}
