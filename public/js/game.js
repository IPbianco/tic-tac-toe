"use strict";

(function(exports) {

  function Game(board = _createBoard()) {
    this._board = board
  }

  Game.prototype = {

    get board() {
      return this._board
    },

    updateBoard: function(x, y, option) {
      this._board[x][y] = option
    },

    processBoard: function() {
      var board = this.board
      var x
      var result = [_checkRows(board), _checkColumns(board), _checkDiagonals(board)]
      for(x = 0; x < 3; x++) {
        if(result[x]) {
          return result[x]
        }
      }
      return false
    }
  }

  function _createBoard() {
    return [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]
  }

  function _checkRows(board) {
    var i
    for(i = 0; i < 3; i++) {
      if(board[i][0] !== " ") {
        if(board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
          return `The winner is ${board[i][0]}`
        }
      }
    }
    return false
  }

  function _checkColumns(board) {
    var j
    for(j = 0; j < 3; j++) {
      if(board[0][j] !== " ") {
        if(board[0][j] === board[1][j] && board[0][j] === board[2][j]) {
          return `The winner is ${board[0][j]}`
        }
      }
    }
    return false
  }

  function _checkDiagonals(board) {
    if(board[0][0] !== " ") {
      if(board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        return `The winner is ${board[0][0]}`
      }
    }
    if(board[0][2] !== " ") {
      if(board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        return `The winner is ${board[0][2]}`
      }
    }
    return false
  }

  exports.Game = Game
})(this)
