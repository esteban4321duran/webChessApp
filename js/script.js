'use strict';
// const boardSquares = document.querySelectorAll(".board-square");
// let boardSquarePiece;

// for (let i = 0; i < boardSquares.length; i++) {
//   boardSquarePiece = boardSquares[i].firstElementChild;
//   console.log(boardSquarePiece);
//   boardSquarePiece.src = "../assets/SVGWithShadow/b_rook_svg_withShadow.svg";
// }

const initializeBoard = function () {
  const boardSquares = document.querySelectorAll('.board-square');
  const board = buildBoard(boardSquares);
  return board;
};

const buildBoard = function (boardSquares) {
  let k = 0;
  let row = [];
  let board = [];
  for (let i = 0; i < ROWS; i++) {
    row = [];
    for (let j = 0; j < COLUMNS; j++) {
      row.push(boardSquares[k]);
      k++;
    }
    board.push(row);
  }
  return board;
};

const initializePieces = function () {
  let pieces = buildPieces();
  return pieces;
};

const buildPieces = function () {
  let pieces = [];
  buildBlackPieces(pieces);
  buildWhitePieces(pieces);

  return pieces;
};

const buildBlackPieces = function (pieces) {
  pieces.push({
    x: 0,
    y: 0,
    color: 'black',
    type: 'rook',
    alive: true,
    selected: false,
    moves: [],
    sprite: '../assets/pieces/b_rook_svg_withShadow.svg',
  });
  pieces.push({
    x: 1,
    y: 0,
    color: 'black',
    type: 'knight',
    alive: true,
    selected: false,
    moves: [],
    sprite: '../assets/pieces/b_knight_svg_withShadow.svg',
  });
  pieces.push({
    x: 2,
    y: 0,
    color: 'black',
    type: 'bishop',
    alive: true,
    selected: false,
    moves: [],
    sprite: '../assets/pieces/b_bishop_svg_withShadow.svg',
  });
  pieces.push({
    x: 3,
    y: 0,
    color: 'black',
    type: 'queen',
    alive: true,
    selected: false,
    moves: [],
    sprite: '../assets/pieces/b_queen_svg_withShadow.svg',
  });
  pieces.push({
    x: 4,
    y: 0,
    color: 'black',
    type: 'king',
    alive: true,
    selected: false,
    moves: [],
    sprite: '../assets/pieces/b_king_svg_withShadow.svg',
  });
  pieces.push({
    x: 5,
    y: 0,
    color: 'black',
    type: 'bishop',
    alive: true,
    selected: false,
    moves: [],
    sprite: '../assets/pieces/b_bishop_svg_withShadow.svg',
  });
  pieces.push({
    x: 6,
    y: 0,
    color: 'black',
    type: 'knight',
    alive: true,
    selected: false,
    moves: [],
    sprite: '../assets/pieces/b_knight_svg_withShadow.svg',
  });
  pieces.push({
    x: 7,
    y: 0,
    color: 'black',
    type: 'rook',
    alive: true,
    selected: false,
    moves: [],
    sprite: '../assets/pieces/b_rook_svg_withShadow.svg',
  });

  for (let i = 0; i < COLUMNS; i++) {
    pieces.push({
      x: i,
      y: 1,
      color: 'black',
      type: 'pawn',
      alive: true,
      selected: false,
      moves: [],
      sprite: '../assets/pieces/b_pawn_svg_withShadow.svg',
    });
  }
};

const buildWhitePieces = function (pieces) {
  for (let i = 0; i < COLUMNS; i++) {
    pieces.push({
      x: i,
      y: 6,
      color: 'white',
      type: 'pawn',
      alive: true,
      selected: false,
      moves: [],
      sprite: '../assets/pieces/w_pawn_svg_withShadow.svg',
    });
  }
  pieces.push({
    x: 0,
    y: 7,
    color: 'white',
    type: 'rook',
    alive: true,
    selected: false,
    moves: [],
    sprite: '../assets/pieces/w_rook_svg_withShadow.svg',
  });
  pieces.push({
    x: 1,
    y: 7,
    color: 'white',
    type: 'knight',
    alive: true,
    selected: false,
    moves: [],
    sprite: '../assets/pieces/w_knight_svg_withShadow.svg',
  });
  pieces.push({
    x: 2,
    y: 7,
    color: 'white',
    type: 'bishop',
    alive: true,
    selected: false,
    moves: [],
    sprite: '../assets/pieces/w_bishop_svg_withShadow.svg',
  });
  pieces.push({
    x: 3,
    y: 7,
    color: 'white',
    type: 'queen',
    alive: true,
    selected: false,
    moves: [],
    sprite: '../assets/pieces/w_queen_svg_withShadow.svg',
  });
  pieces.push({
    x: 4,
    y: 7,
    color: 'white',
    type: 'king',
    alive: true,
    selected: false,
    moves: [],
    sprite: '../assets/pieces/w_king_svg_withShadow.svg',
  });
  pieces.push({
    x: 5,
    y: 7,
    color: 'white',
    type: 'bishop',
    alive: true,
    selected: false,
    moves: [],
    sprite: '../assets/pieces/w_bishop_svg_withShadow.svg',
  });
  pieces.push({
    x: 6,
    y: 7,
    color: 'white',
    type: 'knight',
    alive: true,
    selected: false,
    moves: [],
    sprite: '../assets/pieces/w_knight_svg_withShadow.svg',
  });
  pieces.push({
    x: 7,
    y: 7,
    color: 'white',
    type: 'rook',
    alive: true,
    selected: false,
    moves: [],
    sprite: '../assets/pieces/w_rook_svg_withShadow.svg',
  });
};

const initializeBoardSquares = function () {
  let boardSquares = buildBoardSquares();
  return boardSquares;
};

const subscribeEventListeners = function () {
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLUMNS; j++) {
      board[i][j].addEventListener('click', boardSquareClicked);
    }
  }
};

// DONE
const renderAllPieces = function () {
  let cleanupInfo = [];
  let drawInfo = getPiecesDrawInfo(cleanupInfo);
  draw(drawInfo); // assign sprites to the src attribute of the boardSquares if there's a piece on them
  cleanup(cleanupInfo); //add none to the classList of any empty boardSquare
};

// const getPiecesDrawInfo = function (cleanupInfo) {
//   let p = 0;
//   let drawInfo = [];
//   for (let y = 0; y < ROWS; y++) {
//     for (let x = 0; x < COLUMNS; x++) {
//       if (!pieces[p].alive) {
//         p++;
//         cleanupInfo.push([x, y]);
//         continue;
//       }
//       if (x === pieces[p].x && y === pieces[p].y) {
//         drawInfo.push([x, y, pieces[p].sprite]);
//         p++;
//       } else {
//         cleanupInfo.push([x, y]);
//       }
//     }
//   }
//   return drawInfo;
// };
const getPiecesDrawInfo = function (cleanupInfo) {
  let piece;
  let pieceAtPos = false;
  const drawInfo = [];

  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLUMNS; x++) {
      pieceAtPos = false;
      for (let p = 0; p < pieces.length; p++) {
        piece = pieces[p];
        if (x === piece.x && y === piece.y) {
          if (piece.alive) {
            pieceAtPos = true;
            break;
          }
        }
      }
      if (pieceAtPos) {
        piece = getPieceAtSquare([y, x]);
        drawInfo.push([x, y, piece.sprite]);
      } else {
        cleanupInfo.push([x, y]);
      }
    }
  }
  return drawInfo;
};

const draw = function (drawInfo) {
  let squareBoardImg;
  for (let i = 0; i < drawInfo.length; i++) {
    squareBoardImg = board[drawInfo[i][1]][drawInfo[i][0]].firstElementChild;
    squareBoardImg.src = drawInfo[i][2];
    if (squareBoardImg.classList.contains('none'))
      squareBoardImg.classList.remove('none');
  }
};

const cleanup = function (cleanupInfo) {
  let squareBoardImg;
  for (let i = 0; i < cleanupInfo.length; i++) {
    squareBoardImg =
      board[cleanupInfo[i][1]][cleanupInfo[i][0]].firstElementChild;
    squareBoardImg.src = '';
    if (!squareBoardImg.classList.contains('none'))
      squareBoardImg.classList.add('none');
  }
};

// const getCleanupInfo = function (drawInfo) {
// DONE
// basically this bidimensional array contains all the pairs of coodinates that weren't in the drawInfo.
//   // A way of implementing this could be to fill cleanupInfo with all possible pairs of coordinates and then remove those who are present in the draw info
//   const cleanupInfo = [[0, 0]];
//   let d = 0;
//   for (let y = 0; y < ROWS; y++) {
//     for (let x = 0; x < COLUMNS; x++) {
//       if (x !== drawInfo[d][0] && y !== drawInfo[d][1]) {
//         cleanupInfo.push([x, y]);
//         d++;
//       }
//     }
//   }
// };

//EVENT_LISTENER
const boardSquareClicked = function (e) {
  // this refers to the board-square element that fired the 'click event'
  //a two element array with the coordinates of the clicked board squares
  const clickedSquare = findCoordinates(this);
  console.log(`clicked square: ${clickedSquare}`);

  //TODO
  gameLogic(clickedSquare);
};

const findCoordinates = function (clickedBoardSquare) {
  let x = -1;
  for (let y = 0; y < ROWS; y++) {
    x = board[y].indexOf(clickedBoardSquare);
    if (x !== -1) return [y, x];
  }
};

const gameLogic = function (clickedSquare) {
  testForPiece(clickedSquare);
};

const testForPiece = function (clickedSquare) {
  const clickedPiece = getPieceAtSquare(clickedSquare);
  console.log(clickedPiece);
  if (clickedPiece) testForActivePlayer(clickedPiece);
  else testForSelectedPiece();
};

const getPieceAtSquare = function (clickedSquare) {
  for (let i = 0; i < pieces.length; i++) {
    if (
      pieces[i].y === clickedSquare[0] &&
      pieces[i].x === clickedSquare[1] &&
      pieces[i].alive
    )
      return pieces[i];
  }
  return null;
};

const testForActivePlayer = function (clickedPiece) {
  if (clickedPiece.color === activePlayer) selectPiece(clickedPiece);
};

const selectPiece = function (clickedPiece) {
  setSelected(clickedPiece);
  renderAvailableMoves(clickedPiece.moves);
};

const setSelected = function (clickedPiece) {
  clickedPiece.selected = true;
};

// calcAvailableMovesColor = function (color) {
//   for (let i = 0; i < pieces.length; i++) {
//     if (pieces[i].color === color && pieces[i].isAlive) {
//       switch (pieces[i].type) {
//         case 'rook':
//           calcRookMoves(color, pieces[i]);
//           break;
//         case 'knight':
//           break;
//         case 'bishop':
//           break;
//         case 'queen':
//           break;
//         case 'king':
//           break;
//         case 'pawn':
//           break;
//       }
//     }
//   }
// };

const renderAvailableMoves = function (moves) {
  //TODO
  let cleanupInfo = [];
  const drawInfo = getAvailableMovesDrawInfo(moves, cleanupInfo);
  drawBackground(drawInfo); //DONE I have to actually implement this. This should change the boardSquare background img, not the foreground img
  cleanupBackground(cleanupInfo);
};

const getAvailableMovesDrawInfo = function (moves, cleanupInfo) {
  console.log(moves);
  let m = 0;
  const drawInfo = [];
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLUMNS; x++) {
      if (m < moves.length && x === moves[m][1] && y === moves[m][0]) {
        drawInfo.push([
          x,
          y,
          '', //TODO I shold use this third draw info component to specify wether this is an agressive move or not
        ]);
        m++;
      } else {
        cleanupInfo.push([x, y]);
      }
    }
  }
  return drawInfo;
};
const drawBackground = function (drawInfo) {
  //TODO ok so i need to find a proper way to remember the original background-image for each boardSquare

  let squareBoardBackground;
  for (let i = 0; i < drawInfo.length; i++) {
    squareBoardBackground = board[drawInfo[i][1]][drawInfo[i][0]];

    if (squareBoardBackground.classList.contains('light'))
      squareBoardBackground.classList.replace('light', 'was-light');
    else if (squareBoardBackground.classList.contains('dark'))
      squareBoardBackground.classList.replace('dark', 'was-dark');

    if (!squareBoardBackground.classList.contains('available-move'))
      squareBoardBackground.classList.toggle('available-move');
  }
};

// it appears that wherever was a friendly piece before dying, and you can now move above, it's unable to resotre the previous background-image
//DONE by only allowing the recolection of drawInfo up to how many noves there where to draw, i wasn't allowing the cleanupArray to be fully constructed
const cleanupBackground = function (cleanupInfo) {
  let squareBoardBackground;
  for (let i = 0; i < cleanupInfo.length; i++) {
    squareBoardBackground = board[cleanupInfo[i][1]][cleanupInfo[i][0]];
    squareBoardBackground.src = '';

    if (squareBoardBackground.classList.contains('was-light'))
      squareBoardBackground.classList.replace('was-light', 'light');
    else if (squareBoardBackground.classList.contains('was-dark'))
      squareBoardBackground.classList.replace('was-dark', 'dark');

    if (squareBoardBackground.classList.contains('available-move'))
      squareBoardBackground.classList.toggle('available-move');
  }
};

//FIX Not implemented correctly yet
const calcRookMoves = function (piece) {
  const color = piece.color;
  const moves = [];
  let y;
  let x;
  let changeDirection = false;
  let pieceAtDestination;
  //Directions
  // 0: NORTH
  // 1: EAST
  // 2: SOUTH
  // 3: WEST
  for (let direction = 0; direction < 4; direction++) {
    switch (direction) {
      case 0:
        changeDirection = false;
        y = piece.y;
        x = piece.x;
        y--;
        pieceAtDestination = getPieceAtSquare([y, x]);
        while (y > 0 && !changeDirection) {
          testForBlockingPiece([y, x], color, moves, changeDirection);
          y--;
        }
        break;
      case 1:
        changeDirection = false;
        y = piece.y;
        x = piece.x;
        x++;
        pieceAtDestination = getPieceAtSquare([y, x]);
        while (x < COLUMNS && !changeDirection) {
          testForBlockingPiece([y, x], color, moves, changeDirection);
          x++;
        }
        break;
      case 2:
        changeDirection = false;
        y = piece.y;
        x = piece.x;
        y++;
        pieceAtDestination = getPieceAtSquare([y, x]);
        while (y < ROWS && !changeDirection) {
          testForBlockingPiece([y, x], color, moves, changeDirection);
          y++;
        }
        break;
      case 3:
        changeDirection = false;
        y = piece.y;
        x = piece.x;
        x--;
        pieceAtDestination = getPieceAtSquare([y, x]);
        while (x > 0 && !changeDirection) {
          testForBlockingPiece([y, x], color, moves, changeDirection);
          x--;
        }
        break;
    }
  }
  piece.moves = moves;
};

const testForBlockingPiece = function (
  //DONEnot detecting enemy piece lovations as valid moves
  destination,
  friendlyColor,
  moves,
  changeDirection
) {
  const pieceAtDestination = getPieceAtSquare(destination);
  if (pieceAtDestination === null) moves.unshift(destination);
  else if (isFriendly(friendlyColor, pieceAtDestination))
    changeDirection = true;
  else if (!isFriendly(friendlyColor, pieceAtDestination)) {
    moves.unshift(destination);
    changeDirection;
  } else {
    moves.unshift(destination);
  }
};

const calcKnightMoves = function () {
  //TODO
  let y = piece.y;
  const x = piece.x;
  for (let move = 0; move < 8; move++) {
    switch (i) {
      case 0:
        break;
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      case 5:
        break;
      case 6:
        break;
      case 7:
        break;
    }
  }
};

const calcBishopMoves = function () {};

const calcQueenMoves = function () {};

const calcKingMoves = function () {};

const calcPawnMoves = function () {};

const isFriendly = function (friendlyColor, pieceAtDestination) {
  if (!pieceAtDestination) return null;
  return friendlyColor === pieceAtDestination.color ? true : false;
};

const testForSelectedPiece = function () {
  testForAvailableMove();
};

const testForAvailableMove = function () {};

const ROWS = 8;
const COLUMNS = 8;
const startingAlivePieces = 32;
const board = initializeBoard();
const pieces = initializePieces();

let alivePieces = 32;
let activePlayer = 'white';

subscribeEventListeners();

renderAllPieces();
// pieces[24].x = 4;
pieces[24].y = 4; //DONE //changing these properties kills half of the white pieces because when i look for the drawInfo of the pieces, i only look for each piece once by their order of appearance on the matrix. perhaps a way to solve this would be to look for the pieces drawInfo by some sort of id or by directly referencing them on the array
pieces[13].y = 3;
renderAllPieces();
calcRookMoves(pieces[31]);

//DONE
// a way to solve this problem would be to store the row and column of each board square element in its class or id that way we coul try to locate it in our board matrix.
// The board matrix could maybe store only the board square elements that way i could use the includes() array method

// const numbers = [
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1],
// ];

// console.log(numbers[7].indexOf(1)); returns 7

// a structure like this and board square id's could allow me to identify exactly which one fired the event

//Attempt to solve the current existing bug//DONE
// while (p < pieces.length) {
//   y = 0;
//   x = 0;
//   p = 0;
//   b = false;
//   while (y < ROWS && !b) {
//     while (x < COLUMNS && !b) {
//       if (!pieces[p].alive) {
//         p++;
//         cleanupInfo.push([x, y]);
//         b = true;
//       }
//       if (x === pieces[p].x && y === pieces[p].y) {
//         drawInfo.push([x, y, pieces[p].sprite]);
//         p++;
//         b = true;
//       } else {
//         cleanupInfo.push([x, y]);
//       }
//       x++;
//     }
//     y++;
//   }
// }
const learningGit = true;
console.log('change to be commited');
console.log('another change');

function newCalcMoves() {}
