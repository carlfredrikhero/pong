export default {
  running: false,
  keys: {},
  ball: {
    'x': 0,
    'y': 0,
    'w': 4,
    'h': 4,
    'color': 'white',
    'x_dir': 1,
    'y_dir': 1,
    'speed': 1
  },
  players: [
    {
      score: 0,
      racket: {
        'x': 0,
        'y': 0,
        'w': 4,
        'h': 60,
        'color': 'white',
        'velocity': 2,
      }
    }, {
      score: 0,
      racket: {
        'x': 0,
        'y': 0,
        'w': 4,
        'h': 60,
        'color': 'white',
        'velocity': 2,
      }
    }
  ]
}
