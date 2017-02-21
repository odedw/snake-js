const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const food = document.getElementById('food');
const snakeSquare = document.getElementById('snake-square');

// constants
const SQUARE_SIZE = 10;
const SNAKE_LENGTH = 4;
const NUMBER_OF_SQUARES = 30;
const WIDTH = 350;
const HEIGHT = 350;
const BACKGROUND_COLOR = '#adc127';
const SNAKE_COLOR = '#5f5a0d';

// input
let direction = 'left';
document.onkeydown = (event) => {
  switch (event.keyCode) {
    case 37:
      direction = 'left';
      break;
    case 39:
      direction = 'right';
      break;
    case 38:
      direction = 'up';
      break;
    case 40:
      direction = 'down';
      break;
    default:
      break;
  }
};


function createFood(state) {
  let collision;
  let food;
  do {
    food = {
      x: Math.floor((Math.random() * NUMBER_OF_SQUARES) + 1),
      y: Math.floor((Math.random() * NUMBER_OF_SQUARES) + 1),
    };
    collision = state.snake.filter(square => square.x === food.x && square.y === food.y).length > 0;
  }
  while (collision);
  state.food = food;
}

function createInitialState() {
  const snake = [];
  for (let i = SNAKE_LENGTH - 1; i >= 0; i--) {
    snake.push({ x: i, y: 0 });
  }

  const state = {
    direction: 'right',
    score: 0,
    snake,
    gameOver: false,
  };
  createFood(state);
  return state;
}

function update(state) {
  let newX = state.snake[0].x;
  let newY = state.snake[0].y;
  if (direction === 'right') newX++;
  else if (direction === 'left') newX--;
  else if (direction === 'up') newY--;
  else if (direction === 'down') newY++;

  if (newX === -1 || newY === -1 ||
      newX === WIDTH / SQUARE_SIZE || newY === HEIGHT / SQUARE_SIZE ||
      state.snake.filter(square => square.x === newX && square.y === newY).length > 0) {
    state.gameOver = true;
    return;
  }

  if (newX === state.food.x && newY === state.food.y) {
    state.score++;
    createFood(state);
  } else {
    state.snake.pop();
  }
  state.snake.unshift({ x: newX, y: newY });
}

function render(state) {
  ctx.fillStyle = BACKGROUND_COLOR;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  ctx.strokeStyle = SNAKE_COLOR;
  ctx.strokeRect(0, 0, WIDTH, HEIGHT);

  state.snake.forEach(square => ctx.drawImage(snakeSquare, square.x * SQUARE_SIZE, square.y * SQUARE_SIZE));
  ctx.drawImage(food, state.food.x * SQUARE_SIZE, state.food.y * SQUARE_SIZE);

  ctx.fillStyle = SNAKE_COLOR;
  ctx.fillText(`Score: ${state.score}`, 145, HEIGHT - 5);
}

function run() {
  const state = createInitialState();
  direction = 'right';

  const gameLoop = setInterval(() => {
    update(state);
    render(state);

    if (state.gameOver) {
      clearInterval(gameLoop);
      run();
    }
  }, 80);
}

run();
