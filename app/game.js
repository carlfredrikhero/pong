import draw_canvas from './draw_canvas'
import draw_ball from './draw_ball'

export const Game = (canvas, store, actions) => {
  let ctx = canvas.getContext('2d');

  console.log(actions)

  // update store with default settings
  // place ball in the middle
  store.dispatch(actions.position_ball(canvas.width/2, canvas.height/2))
  // racket 0 position
  store.dispatch(actions.position_racket(0, 10, canvas.height/2))
  // racket 1 position
  store.dispatch(actions.position_racket(1, c.width-10-4, canvas.height/2))



  /**
 * Runs all things for each frame
 */
  const tick = () => {
    // # trigger all actions
    // move_ball

    //draw_canvas
    // draw_scores
    //draw_ball
    // draw_rackets
  }

  return {}
}



