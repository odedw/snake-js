
document.onkeydown = (event) => {
  switch (event.keyCode) {
    case 37:
      state.direction = 'left';
      break;
    case 39:
      state.direction = 'right';
      break;
    case 38:
      state.direction = 'up';
      break;
    case 40:
      state.direction = 'down';
      break;
  }
};

