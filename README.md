# Slot Machine Game

This project is a simple console-based slot machine game developed using JavaScript. The player can deposit money, place bets on multiple lines, and spin the slot machine. The game calculates winnings based on the symbols displayed after each spin.

## How to Play

1. **Deposit Money**: Start by entering an amount of money you wish to deposit into the game.
2. **Choose Number of Lines**: Select the number of lines you want to bet on (up to 3 lines).
3. **Place Your Bet**: Enter the amount you want to bet per line. The total bet is calculated as the number of lines multiplied by the bet per line.
4. **Spin the Slot Machine**: The game will randomly display symbols on the slot machine's reels.
5. **Check Winnings**: If the symbols on a line match, you win! The winnings are calculated based on the symbols' values and the bet amount.
6. **Play Again**: If you have enough balance, you can choose to play again. Otherwise, the game will end when you run out of money.

## Rules

- The slot machine has 3 rows and 3 columns.
- Symbols have different frequencies and values:
  - Symbol `A`: appears 2 times, value = 5
  - Symbol `B`: appears 4 times, value = 4
  - Symbol `C`: appears 6 times, value = 3
  - Symbol `D`: appears 8 times, value = 2

- To win, all symbols on a line must match. The winnings are calculated by multiplying the bet per line by the symbol's value.


## Example

```
Enter a deposit amount: 100
Enter the Number Of Lines to bet on (1-3): 2
Enter the total bet per line: 10
You have a balance of $80
| A | B | C |
| A | A | A |
| C | D | D |
You won, $50
Do you want to play again? (y/n)
```
