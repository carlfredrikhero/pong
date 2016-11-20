export default (initialState) => (state = initialState, action) => {
  switch (action.type){
    case 'START':
      return Object.assign({}, state, {
        running: true
      })
    case 'STOP':
      return Object.assign({}, state, {
        running: false
      })
    case 'KEY_DOWN':
    case 'KEY_UP':
      return Object.assign({}, state, {
        keys: keys(state.keys, action)
      })
    case 'POSITION_BALL':
    case 'MOVE_BALL':
      return Object.assign({}, state, {
        ball: ball(state.ball, action)
      })
    case 'POSITION_RACKET':
      return Object.assign({}, state, {
        players: state.players.map((player, index) => {
          if (action.i !== index) {
            return player
          }

          return {
            score: player.score,
            racket: racket(player.racket, action)
          }
        })
      })
    default:
      return state
  }
}

// ball: {
//     'x': 0,
//     'y': 0,
//     'w': 4,
//     'h': 4,
//     'color': 'white',
//     'x_dir': 1,
//     'y_dir': 1,
//     'velocity': 1
//   }
const ball = (state, action) => {
  switch (action.type){
    case 'POSITION_BALL':
      return Object.assign({}, state, {
        x: action.x,
        y: action.y
      })
    case 'MOVE_BALL':
      return Object.assign({}, state, {
        x: state.x + state.x_dir,
        y: state.y + state.y_dir
      })
    default:
      return state
  }
}

const racket = (state, action) => {
  switch (action.type){
    case 'POSITION_RACKET':
      return Object.assign({}, state, {
        x: action.x,
        y: action.y
      })
    default:
      return state
  }
}

const keys = (state, action) => {
  let new_obj = {}
  switch (action.type){
    case 'KEY_DOWN':
      new_obj[action.key] = true
      return Object.assign({}, state, new_obj)
    case 'KEY_UP':
      new_obj[action.key] = false
      return Object.assign({}, state, new_obj)
    default:
      return state
  }
}
