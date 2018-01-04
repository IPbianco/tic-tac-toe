"use strict";

describe("game", function() {
  var game,
      board1,
      i;

  beforeEach(function() {
    game = new Game()
    board1 = [["X", " ", " "], [" ", " ", " "], [" ", " ", " "]]
  })

  describe("#updateBoard", function() {
    it("updates board when a field is claimed", function() {
      game.updateBoard(0, 0, "X")
      expect(game.board).toEqual(board1)
    })
  })

  describe("#processBoard", function() {
    it("knows the winner when a row is claimed", function() {
      for(i = 0; i < 3; i++) {
        game.updateBoard(0, i, "O")
      }
      expect(game.processBoard()).toBe("The winner is O")
    })

    it("knows the winner when a column is claimed", function() {
      for(i = 0; i < 3; i++) {
        game.updateBoard(i, 0, "X")
      }
      expect(game.processBoard()).toBe("The winner is X")
    })

    it("knows the winner when a diagonal is claimed", function() {
      for(i = 0; i < 3; i++) {
        game.updateBoard(i, i, "X")
      }
      expect(game.processBoard()).toBe("The winner is X")
    })
  })
})
