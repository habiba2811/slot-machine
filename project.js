//1. Deposit some money
//2. Determine number of lines to bet on
//3. Collect a bet amount
//4. Spin the slot machine
//5. Transpose the matrix
//6. Display the matrix
//7. Check if the user won
//8. Give the user their winnings
//9. Play again

const prompt = require('prompt-sync')();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT ={
    A:2,
    B:4,
    C:6,
    D:8
};
const SYMBOL_VALUES ={
    A:5,
    B:4,
    C:3,
    D:2
};

//1. Deposit some money

const deposit = () =>{
    while(true){

    const  depositAmount = prompt('Enter a deposit amount: ');
    const numberDepositAmount = parseFloat(depositAmount);
    if(isNaN(numberDepositAmount) || numberDepositAmount <=0)
    {
        console.log("Invalid deposit amount, try again.");
    }
    else{
        return numberDepositAmount;
    }
}
};

//2. Determine number of lines to bet on

const getNumberOfLines =()=>{
    while(true){

        const Lines = prompt('Enter the Number Of Lines to bet on (1-3): ');
        const NumberOfLines = parseInt(Lines);
        if(isNaN(NumberOfLines) ||NumberOfLines <= 0 ||NumberOfLines >3)
        {
            console.log("Invalid Number Of Lines, try again.");
        }
        else{
            return NumberOfLines;
        }
    }
};

//3. Collect a bet amount

const getBet =(balance,lines)=>
{
    while(true){

        const bet = prompt('Enter the total per line: ');
        const Numberbet = parseInt(bet);
        if(isNaN(Numberbet) ||Numberbet <= 0 ||Numberbet >balance/lines)
        {
            console.log("Invalid bet, try again.");
        }
        else{
            return Numberbet;
        }
    }
};

//4. Spin the slot machine

const spin =()=>{
    const symbols=[];
    for(const[symbol,count] of Object.entries(SYMBOLS_COUNT)){
      for (let i=0; i< count;i++)
      {
        symbols.push(symbol);
      }
    }

const reels=[];
for (let i =0; i< COLS; i++){
    reels.push([]);
    const reelSymbols=[...symbols];
    for(let j=0; j<ROWS; j++){
        const randomIndex= Math.floor(Math.random()* reelSymbols.length);
        const selectedSymbol = reelSymbols[randomIndex];
        reels[i].push(selectedSymbol);
        reelSymbols.splice(randomIndex,1);

    }
} return reels;
};


//5. Transpose the matrix
 const Transpose = (reels) => {
    const rows =[];
    for (let i=0; i<ROWS; i++){
        rows.push([]);
        for(let j=0; j< COLS; j++)
        {
            rows[i].push(reels[j][i]);
        }

    }
    return rows;
 }

//6. Display the matrix
 const  printRows =(rows)=>{
    for (const row of rows){
        let rowString ="";
        for (const [i, symbol] of row.entries()){
            rowString+= symbol;
            if(i != row.length -1)
            {
                rowString += " | " ;
            }
        }
        console.log(rowString);
    }
 }

//7. Check if the user won'

const getWinnings=(rows, bet, lines) =>{
let Winnings=0;
for(let row=0; row<lines;row++){
    const symbols = rows[row];
    let allSame = true;

    for (const symbol of symbols){
        if (symbol != symbols[0]){
            allSame = false;
            break;
        }
    }
    if (allSame){
        Winnings += bet* SYMBOL_VALUES[symbols[0]];
    }
}
return Winnings;
}

//8. Give the user their winnings

const game =()=>{
let balance = deposit(); //let instead of const so later on i can change the amount based on the bet

while(true){
console.log("you have a balance of $"+balance);
const NumberOfLines = getNumberOfLines();
const bet = getBet(balance,NumberOfLines);
balance -= bet*NumberOfLines;
const reels =spin();
const rows = Transpose(reels);
printRows(rows);
const winnings = getWinnings(rows, bet, NumberOfLines);
balance +=winnings;
console.log("You won, $" +winnings.toString());

if (balance <=0){
    console.log("you ran out of money!");
    break;
}

//9. Play again

const playAgain = prompt("Do you want to play again? (y/n)")
if (playAgain != "y")
    break;

}
};

game();


