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
    case 'SET_CANVAS':
      return Object.assign({}, state, {
        canvas: {
          w: action.w,
          h: action.h
        }
      })
    case 'POSITION_BALL':
    case 'MOVE_BALL':
    case 'BOUNCE_BALL_OFF_ROOF_OR_FLOOR':
    case 'BOUNCE_BALL_OFF_RACKET':
      return Object.assign({}, state, {
        ball: ball(state.ball, action)
      })
    case 'POSITION_RACKET':
    case 'MOVE_RACKET':
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
    case 'ADD_SCORE':
      return Object.assign({}, state, {
        score: score(state.score, action)
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
    case 'BOUNCE_BALL_OFF_ROOF_OR_FLOOR':
      return Object.assign({}, state, {
        y_dir: state.y_dir *= -1
      })
    case 'BOUNCE_BALL_OFF_RACKET':
      return Object.assign({}, state, {
        x_dir: state.x_dir *= -1,
        y_dir: action.y_dir
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
    case 'MOVE_RACKET':
      return Object.assign({}, state, {
        y: state.y + (action.direction * state.velocity )
      })
    default:
      return state
  }
}

const score = (state, action) => {
  switch (action.type){
    case 'ADD_SCORE':
      return state.map((val, i) => {
        return (i === action.i) ? val+1 : val
      })
      default:
        return state
  }
}
