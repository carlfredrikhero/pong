import { createStore } from 'redux'
import initialState from './initialState'
import createReducer from './reducers/reducer'
import { Game } from './game'
import * as actions from './actions/actionCreators'

let store = createStore(createReducer(initialState),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

window.onkeypress = function(ev){
  switch(ev.key){
    case 'p':
      store.dispatch(actions.start())
      break;
    case 's':
      store.dispatch(actions.stop())
      break;
  }
}

let game = Game(document.getElementById('gc'), store, actions)

game.tick()
