export default {
  running: false,
  canvas: {
    w: 0,
    h: 0
  },
  ball: {
    x: 0,
    y: 0,
    w: 4,
    h: 4,
    color: 'white',
    x_dir: 1,
    y_dir: 0,
    speed: 1
  },
  score: [0,0],
  players: [
    {
      racket: {
        x: 0,
        y: 0,
        w: 4,
        h: 100,
        color: 'white',
        velocity: 2,
      }
    }, {
      racket: {
        x: 0,
        y: 0,
        w: 4,
        h: 100,
        color: 'white',
        velocity: 2,
      }
    }
  ]
}
