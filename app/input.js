export const Input = () => {
  let keys = {}
  let listeners = []
  let actions = {
    start: 'START',
    stop: 'STOP',
  }

  let rackets = [{
    'q': -1, // q move racket 0 up
    'a': 1, // q move racket 0 up
  }, {
    'i': -1, // q move racket 0 up
    'k': 1, // q move racket 0 up
  }]

  window.onkeydown = function(e) {
    keys[e.key] = true
  }
  window.onkeyup = function(e) {
    keys[e.key] = false
  }

  window.onkeypress = function(ev){
    switch(ev.key){
      case 'p':
        emit(actions.start)
        break;
      case 's':
        emit(actions.stop)
        break;
    }
  }

  const subscribe = (listener) => {
    listeners.push(listener);

    return function unsubscribe(){
      let index = listeners.indexOf(listener)
      listeners.splice(index, 1)
    }
  }

  const emit = (action) => {
    for (let i = 0; i < listeners.length; i++) {
      let listener = listeners[i]
      listener(action)
    }
  }

  const moveRacket = (index) => {
    let racket = rackets[index]
    for (let key in racket){
      if (keys[key]) return racket[key]
    }

    return 0
  }

  return {
    subscribe,
    moveRacket,
    keys
  }
}
