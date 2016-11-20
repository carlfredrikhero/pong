export const positionBall = (x, y) => {
  return {
    type: 'POSITION_BALL',
    x: x,
    y: y
  }
}

export const positionRacket = (i, x, y) => {
  return {
    type: 'POSITION_RACKET',
    i: i,
    x: x,
    y: y
  }
}

export const start = () => {
  return { type: 'START' }
}
export const stop = () => {
  return { type: 'STOP' }
}

export const moveBall = () => {
  return { type: 'MOVE_BALL' }
}

export const keyDown = (key) => {
  return { type: 'KEY_DOWN', key: key }
}

export const keyUp = (key) => {
  return { type: 'KEY_UP', key: key }
}
