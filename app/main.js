import { createStore } from 'redux'
import initialState from './initialState'
import createReducer from './reducers/reducer'
import { Game } from './game'
import position_ball from './actions/position_ball'

let store = createStore(createReducer(initialState),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

window.onkeypress = function(ev){
  switch(ev.key){
    case 'p':
      store.dispatch({type: 'STOP'})
      break;
    case 's':
      store.dispatch({type: 'START'})
      break;
  }
}

let game = Game(document.getElementById('gc'), store, {
  position_ball
})
