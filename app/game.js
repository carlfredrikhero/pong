import { drawCanvas } from './drawCanvas'
import { drawBall } from './drawBall'
import { drawScore } from './drawScore'
import { drawRacket } from './drawRacket'

export const Game = (canvas, store, actions) => {
  window.onkeydown = function(e) {
    store.dispatch(actions.keyDown(e.key))
  }
  window.onkeyup = function(e) {
    store.dispatch(actions.keyUp(e.key))
  }

  let ctx = canvas.getContext('2d');

  // update store with default settings
  // place ball in the middle
  store.dispatch(actions.positionBall(canvas.width/2, canvas.height/2))
  // racket 0 position
  store.dispatch(actions.positionRacket(0, 10, canvas.height/2))
  // racket 1 position
  store.dispatch(actions.positionRacket(1, canvas.width-10-4, canvas.height/2))

  /**
 * Runs all things for each frame
 */
  const tick = () => {
    let state = store.getState()
    // # trigger all actions
    // move_ball
    store.dispatch(actions.moveBall())

    // moveRacket 1?

    drawCanvas(ctx, canvas.width, canvas.height)
    // draw_scores
    drawScore(ctx, canvas, state.players[0], 0)
    drawScore(ctx, canvas, state.players[1], 1)
    //draw_ball
    drawBall(ctx, state.ball)
    // draw_rackets
    drawRacket(ctx, state.players[0].racket)
    drawRacket(ctx, state.players[1].racket)
  }

  return { tick }
}



