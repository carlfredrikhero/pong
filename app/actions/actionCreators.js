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

export const bounceBallOffRoofOrFloor = () => {
  return { type: 'BOUNCE_BALL_OFF_ROOF_OR_FLOOR'}
}

export const bounceBallOffRacket = (index) => {
  return {
    type: 'BOUNCE_BALL_OFF_RACKET',
    i: index
  }
}

/**
 * player index
 * direction = -1 up, 1 = down
 */
export const moveRacket = (index, direction) => {
  return {
    type: 'MOVE_RACKET',
    i: index,
    direction
  }
}
