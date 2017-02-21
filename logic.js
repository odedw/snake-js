function createFood(snake) {
  let food = {
    x: Math.floor((Math.random() * constants.numOfSquares) + 1),
    y: Math.floor((Math.random() * constants.numOfSquares) + 1)
  }

  for (var i = 0; i > snake.length; i++) {
    var snakeX = snake[i].x;
    var snakeY = snake[i].y;

    if (food.x === snakeX && food.y === snakeY || food.y === snakeY && food.x === snakeX) {
      food.x = Math.floor((Math.random() * 30) + 1);
      food.y = Math.floor((Math.random() * 30) + 1);
    }
  }
}

function checkCollision(x, y, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].x === x && arr[i].y === y)
      return true;
  }
  return false;
}

function update(state) {
  let snakeX = state.snake[0].x;
  let snakeY = state.snake[0].y;

  if (state.direction == 'right') {
    snakeX++;
  }
  else if (state.direction == 'left') {
    snakeX--;
  }
  else if (state.direction == 'up') {
    snakeY--;
  } else if (state.direction == 'down') {
    snakeY++;
  }

  if (snakeX == -1 || snakeX == constants.w / constants.snakeSize || snakeY == -1 || snakeY == constants.h / constants.snakeSize || checkCollision(snakeX, snakeY, state.snake)) {
    //restart game
    state.gameOver = true;
  }

  let tail;

  if (snakeX == state.food.x && snakeY == state.food.y) {
    tail = { x: snakeX, y: snakeY }; //Create a new head instead of moving the tail
    state.score++;

    state.food = createFood(state.snake); //Create new food
  } else {
    tail = state.snake.pop(); //pops out the last cell
    tail.x = snakeX;
    tail.y = snakeY;
  }
  //The snake can now eat the food.
  state.snake.unshift(tail); //puts back the tail as the first cell  
}



