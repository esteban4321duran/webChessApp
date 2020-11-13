'use strict';

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
      firstMove: true,
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
      firstMove: true,
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

const renderAllPieces = function () {
  let cleanupInfo = [];
  let drawInfo = getPiecesDrawInfo(cleanupInfo);
  draw(drawInfo); // assign sprites to the src attribute of the boardSquares if there's a piece on them
  cleanup(cleanupInfo); //add none to the classList of any empty boardSquare
};
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

//EVENT_LISTENER
const boardSquareClicked = function (e) {
  // this refers to the board-square element that fired the 'click event'
  //a two element array with the coordinates of the clicked board squares
  const clickedSquare = findCoordinates(this);
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
  let belongsToActivePlayer = true;
  if (clickedPiece !== null)
    console.log(`${clickedPiece.color} ${clickedPiece.type}`);
  if (clickedPiece !== null)
    belongsToActivePlayer = testForActivePlayer(clickedPiece);
  else testForSelectedPieceMove(clickedSquare);
  if (!belongsToActivePlayer) testForSelectedPieceMove(clickedSquare);
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
  if (clickedPiece.color === activePlayer) {
    selectPiece(clickedPiece);
    return true;
  } else return false;
};

const selectPiece = function (clickedPiece) {
  setSelected(clickedPiece);
  deselectOtherPieces(clickedPiece);
  renderAvailableMoves(clickedPiece.moves);
};

const setSelected = function (clickedPiece) {
  clickedPiece.selected = true;
};

const deselectOtherPieces = function (clickedPiece) {
  let otherPiece;
  for (let p = 0; p < pieces.length; p++) {
    otherPiece = pieces[p];
    if (otherPiece.color === activePlayer && otherPiece !== clickedPiece)
      otherPiece.selected = false;
  }
};

const renderAvailableMoves = function (moves) {
  let cleanupInfo = [];
  const drawInfo = getAvailableMovesDrawInfo(moves, cleanupInfo);
  drawBackground(drawInfo);
  cleanupBackground(cleanupInfo);
};

const getAvailableMovesDrawInfo = function (moves, cleanupInfo) {
  const drawInfo = [];
  let moveAtPos = false;
  let moveType = '';
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLUMNS; x++) {
      moveAtPos = false;
      for (let m = 0; m < moves.length; m++) {
        if (x === moves[m][1] && y === moves[m][0]) {
          moveAtPos = true;
          moveType = moves[m][2];
          break;
        }
      }
      if (moveAtPos) {
        drawInfo.push([y, x, moveType]);
      } else {
        cleanupInfo.push([y, x]);
      }
    }
  }
  return drawInfo;
};
const drawBackground = function (drawInfo) {
  //TODO ok so i need to find a proper way to remember the original background-image for each boardSquare
  let squareBoardBackground;
  let squareBoardBackgroundType;
  for (let i = 0; i < drawInfo.length; i++) {
    squareBoardBackground = board[drawInfo[i][0]][drawInfo[i][1]];
    squareBoardBackgroundType = drawInfo[i][2];
    if (squareBoardBackground.classList.contains('light'))
      squareBoardBackground.classList.replace('light', 'was-light');
    else if (squareBoardBackground.classList.contains('dark'))
      squareBoardBackground.classList.replace('dark', 'was-dark');

    if (squareBoardBackgroundType === 'movement') {
      if (!squareBoardBackground.classList.contains('available-move'))
        squareBoardBackground.classList.toggle('available-move');
    } else {
      if (!squareBoardBackground.classList.contains('aggressive-move'))
        squareBoardBackground.classList.toggle('aggressive-move');
    }
  }
};

const cleanupBackground = function (cleanupInfo) {
  let squareBoardBackground;
  for (let i = 0; i < cleanupInfo.length; i++) {
    squareBoardBackground = board[cleanupInfo[i][0]][cleanupInfo[i][1]];
    squareBoardBackground.src = '';

    if (squareBoardBackground.classList.contains('was-light'))
      squareBoardBackground.classList.replace('was-light', 'light');
    else if (squareBoardBackground.classList.contains('was-dark'))
      squareBoardBackground.classList.replace('was-dark', 'dark');

    if (squareBoardBackground.classList.contains('available-move'))
      squareBoardBackground.classList.toggle('available-move');
    if (squareBoardBackground.classList.contains('aggressive-move'))
      squareBoardBackground.classList.toggle('aggressive-move');
  }
};

const testForSelectedPieceMove = function (clickedSquare) {
  for (let p = 0; p < pieces.length; p++) {
    if (pieces[p].alive && pieces[p].selected) {
      testForAvailableMove(pieces[p], clickedSquare);
    }
  }
  //If there's no piece selected, do nothing
};

const testForAvailableMove = function (piece, clickedSquare) {
  const pieceMoves = piece.moves;
  let moveFound = false;
  for (let m = 0; m < pieceMoves.length; m++) {
    if (
      pieceMoves[m][0] === clickedSquare[0] &&
      pieceMoves[m][1] === clickedSquare[1]
    ) {
      moveFound = true;

      break;
    }
  }
  if (moveFound) movePiece(piece, clickedSquare);
  else deselectPiece(piece);
};

const movePiece = function (piece, clickedSquare) {
  testForRivalPiece(clickedSquare);
  //do piece movement
  piece.y = clickedSquare[0];
  piece.x = clickedSquare[1];
  renderAllPieces();
  hideAvailableMoves(piece.moves);
  testForPawnMove(piece);
  turnEnd();
};

const hideAvailableMoves = function (moves) {
  cleanupBackground(moves);
};

const deselectPiece = function (piece) {
  piece.selected = false;
  hideAvailableMoves(piece.moves);
};

const deselectAllPieces = function () {
  for (let p = 0; p < pieces.length; p++) {
    if (pieces[p].selected) pieces[p].selected = false;
  }
};

const testForRivalPiece = function (clickedSquare) {
  //if there is a rival piece at the movment destination, remove it
  const pieceToRemove = getPieceAtSquare(clickedSquare);
  if (pieceToRemove !== null) removePiece(pieceToRemove);
  //else just return
};

const removePiece = function (piece) {
  piece.alive = false;
};

const testForPawnMove = function (piece) {
  if (piece.type === 'pawn') testForPawnExchange(piece);
};

const testForPawnExchange = function (piece) {
  console.log(`was a pawn`);
  if (piece.color === 'white' && piece.y === 0) exchangePawn(piece);
  else if (piece.color === 'black' && piece.y === 7) exchangePawn(piece);
  //else just return
};

const exchangePawn = function (pawn) {
  //Make a modal-window visible so the active player can select a piece to exchange for his pawn
};

const calcMovesAll = function () {
  let piece;

  for (let p = 0; p < pieces.length; p++) {
    piece = pieces[p];
    switch (piece.type) {
      case 'rook':
        piece.moves = calcRookMoves(piece);
        break;
      case 'knight':
        piece.moves = calcKnightMoves(piece);
        break;
      case 'bishop':
        piece.moves = calcBishopMoves(piece);
        break;
      case 'queen':
        piece.moves = calcQueenMoves(piece);
        break;
      case 'king':
        piece.moves = calcKingMoves(piece);
        break;
      case 'pawn':
        piece.moves = calcPawnMoves(piece);
    }
  }
};

const calcRookMoves = function (piece) {
  // north:0,
  // east:1,
  // south:2,
  // west:3
  const moves = [];
  for (let direction = 0; direction < 4; direction++) {
    switch (direction) {
      case 0:
        movesNorth(piece, moves);
        break;
      case 1:
        movesEast(piece, moves);
        break;
      case 2:
        movesSouth(piece, moves);
        break;
      case 3:
        movesWest(piece, moves);
        break;
    }
  }
  return moves;
};

const movesNorth = function (piece, moves) {
  const x = piece.x;
  const color = piece.color;
  let changeDirection = [false];
  for (let y = piece.y - 1; y >= 0; y--) {
    testForPossibleMove([y, x], color, moves, changeDirection);
    if (changeDirection[0]) break;
  }
};

const movesSouth = function (piece, moves) {
  const x = piece.x;
  const color = piece.color;
  let changeDirection = [false];
  for (let y = piece.y + 1; y < ROWS; y++) {
    testForPossibleMove([y, x], color, moves, changeDirection);
    if (changeDirection[0]) break;
  }
};

const movesEast = function (piece, moves) {
  const y = piece.y;
  const color = piece.color;
  let changeDirection = [false];
  for (let x = piece.x - 1; x >= 0; x--) {
    testForPossibleMove([y, x], color, moves, changeDirection);
    if (changeDirection[0]) break;
  }
};

const movesWest = function (piece, moves) {
  const y = piece.y;
  const color = piece.color;
  let changeDirection = [false];
  for (let x = piece.x + 1; x < COLUMNS; x++) {
    testForPossibleMove([y, x], color, moves, changeDirection);

    if (changeDirection[0]) break;
  }
};

const testForPossibleMove = function (
  possibleMove,
  friendlyColor,
  pieceMoves,
  flag
) {
  const pieceAtSquare = getPieceAtSquare(possibleMove);
  if (!pieceAtSquare) {
    pieceMoves.push([possibleMove[0], possibleMove[1], 'movement']);
  } else if (friendlyColor === pieceAtSquare.color) {
    if (flag !== null) flag[0] = true;
  } else if (friendlyColor !== pieceAtSquare.color) {
    pieceMoves.push([possibleMove[0], possibleMove[1], 'aggressive']);
    if (flag !== null) flag[0] = true;
  }
};

const calcKnightMoves = function (piece) {
  const moves = [];
  const color = piece.color;
  let y = piece.y;
  let x = piece.x;
  let moveY;
  let moveX;
  for (let m = 0; m < 8; m++) {
    if (
      y + knightPossibleMoves[m][0] >= 0 &&
      y + knightPossibleMoves[m][0] < ROWS
    ) {
      if (
        x + knightPossibleMoves[m][1] >= 0 &&
        x + knightPossibleMoves[m][1] < COLUMNS
      ) {
        moveY = y + knightPossibleMoves[m][0];
        moveX = x + knightPossibleMoves[m][1];
        testForPossibleMove([moveY, moveX], color, moves, null);
      }
    }
  }
  return moves;
};

const calcBishopMoves = function (piece) {
  // directions
  // northeast: 0;
  // southeast: 1;
  // southwest: 2;
  // northeest: 3;
  const moves = [];
  for (let direction = 0; direction < 4; direction++) {
    switch (direction) {
      case 0:
        movesNortheast(piece, moves);
        break;
      case 1:
        movesSoutheast(piece, moves);
        break;
      case 2:
        movesSouthwest(piece, moves);
        break;
      case 3:
        movesNorthwest(piece, moves);
        break;
    }
  }
  return moves;
};

const movesNortheast = function (piece, moves) {
  let x = piece.x;
  let y = piece.y;
  const color = piece.color;
  let changeDirection = [false];
  while (!changeDirection[0]) {
    y--;
    x++;
    if (y > 0 && x < COLUMNS)
      testForPossibleMove([y, x], color, moves, changeDirection);
    else changeDirection[0] = true;
  }
};

const movesSoutheast = function (piece, moves) {
  let x = piece.x;
  let y = piece.y;
  const color = piece.color;
  let changeDirection = [false];
  while (!changeDirection[0]) {
    y++;
    x++;
    if (y < ROWS && x < COLUMNS)
      testForPossibleMove([y, x], color, moves, changeDirection);
    else changeDirection[0] = true;
  }
};
const movesSouthwest = function (piece, moves) {
  let x = piece.x;
  let y = piece.y;
  const color = piece.color;
  let changeDirection = [false];
  while (!changeDirection[0]) {
    y++;
    x--;
    if (y < ROWS && x > 0)
      testForPossibleMove([y, x], color, moves, changeDirection);
    else changeDirection[0] = true;
  }
};
const movesNorthwest = function (piece, moves) {
  let x = piece.x;
  let y = piece.y;
  const color = piece.color;
  let changeDirection = [false];
  while (!changeDirection[0]) {
    y--;
    x--;
    if (y > 0 && x > 0)
      testForPossibleMove([y, x], color, moves, changeDirection);
    else changeDirection[0] = true;
  }
};

const calcQueenMoves = function (piece) {
  const moves = [];
  for (let direction = 0; direction < 8; direction++) {
    switch (direction) {
      case 0:
        movesNorth(piece, moves);
        break;
      case 1:
        movesEast(piece, moves);
        break;
      case 2:
        movesSouth(piece, moves);
        break;
      case 3:
        movesWest(piece, moves);
        break;
      case 4:
        movesNortheast(piece, moves);
        break;
      case 5:
        movesSoutheast(piece, moves);
        break;
      case 6:
        movesSouthwest(piece, moves);
        break;
      case 7:
        movesNorthwest(piece, moves);
        break;
    }
  }
  return moves;
};

const calcPawnMoves = function (piece) {
  //TODO Refactor this. its so ugly
  const color = piece.color;
  const moves = [];

  if (color === 'white') movesWhitePawn(piece, moves);
  else movesBlackPawn(piece, moves);
  return moves;
};

const movesWhitePawn = function (piece, moves) {
  const y = piece.y;
  const x = piece.x;
  let pieceAtSquare;
  let calcForthMove = false;
  for (let m = 0; m < 4; m++) {
    switch (m) {
      case 0:
        pieceAtSquare = getPieceAtSquare([
          y - pawnPossibleMoves[m][0],
          x + pawnPossibleMoves[m][1],
        ]);
        if (!pieceAtSquare) {
          moves.push([
            y - pawnPossibleMoves[m][0],
            x + pawnPossibleMoves[m][1],
            'movement',
          ]);
          calcForthMove = true;
        }
        break;
      case 1:
      case 2:
        testForAggressiveMove(
          [y - pawnPossibleMoves[m][0], x + pawnPossibleMoves[m][1]],
          'white',
          moves,
          null
        );
        break;
      case 3:
        if (calcForthMove && piece.firstMove) {
          pieceAtSquare = getPieceAtSquare([
            y - pawnPossibleMoves[m][0],
            x + pawnPossibleMoves[m][1],
          ]);
          if (!pieceAtSquare) {
            moves.push([
              y - pawnPossibleMoves[m][0],
              x + pawnPossibleMoves[m][1],
              'movement',
            ]);
            piece.firstMove = !piece.firstMove;
          }
        }
        break;
    }
  }
};

const movesBlackPawn = function (piece, moves) {
  const y = piece.y;
  const x = piece.x;
  let pieceAtSquare;
  let calcForthMove = false;
  for (let m = 0; m < 4; m++) {
    switch (m) {
      case 0:
        pieceAtSquare = getPieceAtSquare([
          y + pawnPossibleMoves[m][0],
          x + pawnPossibleMoves[m][1],
        ]);
        if (!pieceAtSquare) {
          moves.push([
            y + pawnPossibleMoves[m][0],
            x + pawnPossibleMoves[m][1],
            'movement',
          ]);
          calcForthMove = true;
        }
        break;
      case 1:
      case 2:
        testForAggressiveMove(
          [y + pawnPossibleMoves[m][0], x + pawnPossibleMoves[m][1]],
          'black',
          moves,
          null
        );
        break;
      case 3:
        if (calcForthMove && piece.firstMove) {
          pieceAtSquare = getPieceAtSquare([
            y + pawnPossibleMoves[m][0],
            x + pawnPossibleMoves[m][1],
          ]);

          if (!pieceAtSquare) {
            moves.push([
              y + pawnPossibleMoves[m][0],
              x + pawnPossibleMoves[m][1],
              'movement',
            ]);
            piece.firstMove = !piece.firstMove;
          }
        }
        break;
    }
  }
};

const calcKingMoves = function (piece) {
  const y = piece.y;
  const x = piece.x;
  const moves = [];
  for (let direction = 0; direction < 8; direction++) {
    switch (direction) {
      case 0:
        if (y - 1 >= 0)
          testForPossibleMove([y - 1, x], piece.color, moves, null);
        break;
      case 1:
        if (y - 1 >= 0 && x + 1 < COLUMNS)
          testForPossibleMove([y - 1, x + 1], piece.color, moves, null);
        break;
      case 2:
        if (x + 1 < COLUMNS)
          testForPossibleMove([y, x + 1], piece.color, moves, null);
        break;
      case 3:
        if (y + 1 < ROWS && x + 1 < COLUMNS)
          testForPossibleMove([y + 1, x + 1], piece.color, moves, null);
        break;
      case 4:
        if (y + 1 < ROWS)
          testForPossibleMove([y + 1, x], piece.color, moves, null);
        break;
      case 5:
        if (y + 1 < ROWS && x - 1 >= 0)
          testForPossibleMove([y + 1, x - 1], piece.color, moves, null);
        break;
      case 6:
        if (x - 1 >= 0)
          testForPossibleMove([y, x - 1], piece.color, moves, null);
        break;
      case 7:
        if (y - 1 >= 0 && x - 1 >= 0)
          testForPossibleMove([y - 1, x - 1], piece.color, moves, null);
        break;
    }
  }
  return moves;
};

//TODO
const resetMovesAll = function () {
  for (let p = 0; p < pieces.length; p++) {
    pieces[p].moves = [];
  }
};

const testForAggressiveMove = function (
  possibleMove,
  friendlyColor,
  pieceMoves,
  flag
) {
  const pieceAtSquare = getPieceAtSquare(possibleMove);
  if (pieceAtSquare !== null)
    if (friendlyColor !== pieceAtSquare.color) {
      pieceMoves.push([possibleMove[0], possibleMove[1], 'aggressive']);
      if (flag !== null) flag[0] = true;
    }
};

const turnBegin = function () {
  resetMovesAll();
  calcMovesAll();
};

const turnEnd = function () {
  deselectAllPieces();
  activePlayer = activePlayer === 'white' ? 'black' : 'white';
  turnBegin();
};

const ROWS = 8;
const COLUMNS = 8;
const startingAlivePieces = 32;
const board = initializeBoard();
const pieces = initializePieces();
const knightPossibleMoves = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, -1],
  [2, 1],
  [-1, -2],
  [1, -2],
];
const pawnPossibleMoves = [
  [1, 0],
  [1, 1],
  [1, -1],
  [2, 0],
];
let alivePieces = 32;
let activePlayer = 'white';

///SPECIAL TEST CONDITIONS///

for (let i = 0; i < 16; i++) {
  pieces[i].alive = false;
}
for (let i = 16; i < 24; i++) {
  pieces[i].y = 1;
}

/////////////////////////////

subscribeEventListeners();
renderAllPieces();

turnBegin();
