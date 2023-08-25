
# This function checks the diagonals of the board for a winner
def checkDiagonals():
    print("TODO Later")

# This function checks the rows of the board for a winner
def checkRows():
    print("TODO Later")

# This function checks the columns of the board for a winner
def checkCols():
    print("TODO Later")

# This function prints the board every turn
def checkRows():
    print("TODO Later")

# This function checks the player's move
def checkMove():
    return True

# This function checks the whole board for a winner
def checkWinner():
    return True


if __name__ == '__main__':

    print("Welcome to the game of TicTacToe!")

    # I would like to have some loop with an odd/even player turn
    switch = 0

    gameOn = True
    validMove = False

    while gameOn:

        if switch % 2 == 0:
            print("Player's 1 turn")
            validMove = checkMove()
        else:
            print("Player's 2 turn")
            validMove = checkMove()

        if validMove:

            # put the X/O in place

            # switch to the other player
            switch += 1

        if checkWinner():
            
            if switch%2 == 0:
                print("Player 2 is the winner!")
            else:
                print("Player 1 is the winner")
            
            gameOn = False