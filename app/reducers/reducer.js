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
    default:
      return state
  }
}
