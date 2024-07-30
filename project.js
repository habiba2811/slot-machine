//1. Deposit some money
//2. Determine number of lines to bet on
//3. Collect a bet amount
//4. Spin the slot machine
//5. Check if the user won
//6. Give the user their winnings
//7. Play again

//1. Deposit some money

const prompt = require('prompt-sync')();
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
}

let balance = deposit(); //let instead of const so later on i can change the amount based on the bet
const NumberOfLines = getNumberOfLines();
const bet = getBet(balance,NumberOfLines);
