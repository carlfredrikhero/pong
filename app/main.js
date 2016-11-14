let c = document.getElementById('gc')
let ctx = c.getContext('2d');
let timerId
let running = false
let keys = []
let score = [0,0]

window.onkeypress = function(ev){
  switch(ev.key){
    case 'p':
      pause()
      break;
    case 's':
      start()
      break;
    case 'g':
      update()
      break;
  }
};

window.onkeyup = function(e) {keys[e.key]=false;}
window.onkeydown = function(e) {keys[e.key]=true;}

let ball = {
  'x': c.width/2,
  'y': c.height/2,
  'w': 4,
  'h': 4,
  'color': 'white',
  'x_dir': 2,
  'y_dir': .6,
  'velocity': 1
}

let racket = [{
  'x': 10,
  'y': c.height/2,
  'w': 4,
  'h': 60,
  'color': 'white',
  'velocity': 2
}, {
  'x': c.width-10-4,
  'y': c.height/2,
  'w': 4,
  'h': 60,
  'color': 'white',
  'velocity': 2
}]

function update (){
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, c.width, c.height)

  ctx.fillStyle = 'white'
  ctx.font='12px monospace';
  ctx.textAlign = 'left'
  ctx.fillText(('00' + score[0]).substr(-3),10,20);
  ctx.textAlign = 'right'
  ctx.fillText(('00' + score[1]).substr(-3),c.width-10,20);

  ctx.fillStyle = ball.color;
  moveBall()
  ctx.fillRect(ball.x, ball.y, ball.w, ball.h);

  ctx.fillStyle = racket[0].color;
  moveRacket(0)
  ctx.fillRect(racket[0].x, racket[0].y, racket[0].w, racket[0].h);

  moveRacket(1)
  ctx.fillRect(racket[1].x, racket[1].y, racket[1].w, racket[1].h);
  // console.log('Racket', racket);
  // console.log('Ball', ball);
  if (running) step()
}

function moveBall(){
  // set y
  if (
    ball.y <= 0 ||
    ball.y >= c.height - ball.h){
    ball.y_dir *= -ball.velocity;
  }

  ball.y += ball.y_dir;

  switch (true){
    case (ball.x <= 0): // ball is behind racket
      score[1]++
      ball.x = c.width/2
      ball.y = c.height/2
      ball.velocity = 1
      ball.x_dir = randomDir()
      ball.y_dir = randomDir()
    break;
    case (ball.x >= c.width - ball.w): // ball hits the right wall
      score[0]++
      ball.x = c.width/2
      ball.y = c.height/2
      ball.velocity = 1
      ball.x_dir = randomDir()
      ball.y_dir = randomDir()
    break;
    case ((ball.x <= racket[0].x+racket[0].w && ball.y >= racket[0].y && ball.y <= (racket[0].y+racket[0].h)) ||  // ball hits racket[0]
    (ball.x >= racket[1].x-racket[1].w && ball.y >= racket[1].y && ball.y <= (racket[1].y+racket[1].h))): // ball hits racket[1]
      ball.x_dir *= -ball.velocity;
    break;

  }

  ball.x += ball.x_dir;
}

function moveRacket(){
  if (keys['q'] && racket[0].y > 0){
    racket[0].y -= racket[0].velocity
  }

  if (keys['a']  && racket[0].y < c.height - racket[0].h){
    racket[0].y += racket[0].velocity
  }

  if (keys['i'] && racket[1].y > 0){
    racket[1].y -= racket[1].velocity
  }

  if (keys['k']  && racket[1].y < c.height - racket[1].h){
    racket[1].y += racket[1].velocity
  }
}

function doesBallTouchRacket(){}
function isBallBehindRacket(){}

function start(){
  if (!running){
    running = true
    step()
  }
}

function step(){
  timerId = requestAnimationFrame(update)
}

function pause(){
  if (running){
    cancelAnimationFrame(timerId)
    running = false
  }
}

function randomDir(min, max) {
  min = min || 0.1
  max = max || 3
  return Math.random() * (max - min) + min;
}

step()
