import { createStore } from 'redux'
import initialState from './initialState'
import createReducer from './reducers/reducer'

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

let c = document.getElementById('gc')
let ctx = c.getContext('2d');
