export default (initialState) => (state = initialState, action) => {
  switch (action.type){
    case 'START':
      return Object.assign({}, state, {
        running: true
      })
      break
    case 'STOP':
      return Object.assign({}, state, {
        running: false
      })
      break
    case 'POSITION_BALL':
    case 'MOVE_BALL':
      return Object.assign({}, state, {
        ball: ball(state.ball, action)
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
const ball = (state, action) =>{
  switch (action.type){
    case 'POSITION_BALL':
      return Object.assign({}, state, {
        x: action.x,
        y: action.y
      })
  }
}
