export const Game = (canvas, screen, input, store, actions, ball, racket) => {
  let state = store.getState()
  let running = state.running
  let timerId

    /**
 * Runs all things for each frame
 */
  const tick = () => {
    let state = store.getState()

    if (running) {
      // # trigger all actions
      // move_ball
      store.dispatch(actions.moveBall())

      // TODO racket 0 cannot be off screen
      let racket0_dir = input.moveRacket(0);
      if (racket0_dir !== 0 &&
          !racket.touchesRoof(canvas, state.players[0].racket, racket0_dir) &&
          !racket.touchesFloor(canvas, state.players[0].racket, racket0_dir)
      ){
        store.dispatch(actions.moveRacket(0, racket0_dir))
      }

      // TODO racket 0 cannot be off screen
      let racket1_dir = input.moveRacket(1);
      if (racket1_dir !== 0 &&
          !racket.touchesRoof(canvas, state.players[1].racket, racket1_dir) &&
          !racket.touchesFloor(canvas, state.players[1].racket, racket1_dir)){
        store.dispatch(actions.moveRacket(1, racket1_dir))
      }

      // does Ball touch anything?
      // dispatch appropriate actions
      if (ball.touchesRoof(canvas, state.ball) ||
          ball.touchesFloor(canvas, state.ball)) {
        store.dispatch(actions.bounceBallOffRoofOrFloor())
      }

      // does ball touch racket
      let racket_action = ball.touchesRacket(state)
      if (false !== racket_action){
        store.dispatch(actions.bounceBallOffRacket(racket_action.y_dir))
      }

      // does thr ball touch any wall
      // i.e. points to anyone?
      if (ball.touchesLeftWall(canvas, state.ball)) {
        // add score to player 1
        store.dispatch(actions.addScore(1))
        // reset ball and start the game again
        reset()
      }

      if (ball.touchesRightWall(canvas, state.ball)) {
        // add score to player 0
        store.dispatch(actions.addScore(0))
        // reset ball and start the game again
        reset()
      }
    }

    screen.render(store.getState())

    step()
  }

  const start = () => {
    step()
  }

  const step = () => {
    timerId = requestAnimationFrame(tick)
  }

  const stop = () => {
    cancelAnimationFrame(timerId)
  }

  const reset = () => {
    store.dispatch(actions.stop())
    store.dispatch(actions.positionBall(canvas.width/2, canvas.height/2))
    setTimeout(() => {
      store.dispatch(actions.start())
    }, 3000)
  }

  store.subscribe(() => {
    let state = store.getState()
    let old_running = running
    let changed = (running !== state.running)
    running = state.running

    if (!old_running && changed) start()

    if (old_running && changed) stop()
  })

  input.subscribe(function(action){
    switch(action){
      case 'START':
        store.dispatch(actions.start())
        break;
      case 'STOP':
        store.dispatch(actions.stop())
    }
  })


  // update store with default settings
  store.dispatch(actions.setCanvas(canvas.width, canvas.height));
  // place ball in the middle
  // TODO add a screen.getCenter
  store.dispatch(actions.positionBall(canvas.width/2, canvas.height/2))
  // racket 0 position
  // TODO add a screen.getLeftPosition?
  store.dispatch(actions.positionRacket(0, 10, canvas.height/2))
  // racket 1 position
  // TODO add a screen.getRightPosition?
  store.dispatch(actions.positionRacket(1, canvas.width-10-4, canvas.height/2))

  return { tick, stop }
}



