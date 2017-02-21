const constants = {
  snakeSize: 10,
  snakeLength: 4,
  numOfSquares: 30,
  w: 350,
  h: 350,
};

function createState() {
  let snake = [];
  for (var i = length - 1; i >= 0; i--) {
    snake.push({ x: i, y: 0 });
  }

  return {
    direction: 'right',
    score: 0,
    snake: snake,
    gameOver: false
  };
}