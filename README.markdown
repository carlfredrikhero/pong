# PONG

`webpack-dev-server --content-base build/`

`s` - Start game

`p` - Pause game

`g` - go 1 step forward

`q` - Player 1 go up

`a` - Player 1 go down

`i` - Player 2 go up

`k` - Player 2 go down

## Version 2 with Redux

### Actions
const INCREASE_SCORE
const MOVE_RACKET i, upOrDown
const MOVE_BALL, x, y
const BOUNCE_BALL
const START
const STOP
const INCREASE_SPEED
const RESET

### Functions

setup()
tick()
start()
stop()
step()

draw_game_canvas(ctx)
draw_score(ctx, i, score)
draw_racket(ctx, racket)
draw_ball(ctx, x, y)

isBallTouchingRacket()
isBallTouchingWall()
isBallTouchingRoof()
isBallTouchingFloor()

### Init Store object

```
{
  running: true,
  players: [{
    score: 0,
    racket: {}
  }, {
    score: 0,
    racket: {}
  }]
}
```
