function createChessboard() {
  const chessboard = document.getElementById('chessboard');
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square = document.createElement('div');
      square.classList.add('square');

    
      if ((row + col) % 2 === 0) {
        square.classList.add('dark');
      } else {
        square.classList.add('light');
      }
      chessboard.appendChild(square);
    }
  }
}


window.onload = createChessboard;