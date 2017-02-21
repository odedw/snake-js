const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
let gameloop;

function init(ctx) {
  let state = createState();
  createFood(state.snake);

  gameloop = setInterval(() => {
    state = update(state);
    if (!state.gameOver) {
      render(ctx, state);
    } else {
      clearInterval(gameloop);
      init(ctx);
    }
  }, 80);
}

init(ctx);