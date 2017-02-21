function renderSnakeSquare(x, y, ctx) {
  ctx.fillStyle = 'green';
  ctx.fillRect(x * constants.snakeSize, y * constants.snakeSize, constants.snakeSize, constants.snakeSize);
  ctx.strokeStyle = 'darkgreen';
  ctx.strokeRect(x * constants.snakeSize, y * constants.snakeSize, constants.snakeSize, constants.snakeSize);
}

function renderFood(x, y, ctx) {
  ctx.fillStyle = 'yellow';
  ctx.fillRect(x * constants.snakeSize, y * constants.snakeSize, constants.snakeSize, constants.snakeSize);
  ctx.fillStyle = 'red';
  ctx.fillRect(x * constants.snakeSize + 1, y * constants.snakeSize + 1, constants.snakeSize - 2, constants.snakeSize - 2);
}

function renderScore(ctx, score) {
  ctx.fillStyle = 'blue';
  ctx.fillText(`Score: ${score}`, 145, constants.h - 5);
}

function render(ctx, state) {
  ctx.fillStyle = 'lightgrey';
  ctx.fillRect(0, 0, constants.w, constants.h);
  ctx.strokeStyle = 'black';
  ctx.strokeRect(0, 0, constants.w, constants.h);

  for (let i = 0; i < state.snake.length; i++) {
    renderSnakeSquare(state.snake[i].x, state.snake[i].y, ctx);
  }

  renderFood(state.food.x, state.food.y, ctx);
  renderScore(state.score, ctx);
}