# spendwise
SpendWise is a simple budgeting and expense tracking web application. It helps users enter their monthly budget and expenses and calculates the remaining balance.
## Project Purpose

 The purpose of SpendWise is to help users understand their spending and remaining budget using JavaScript. ## JavaScript Concepts Implemented
## JavaScript Concepts Implemented
This project demonstrates: 
- Variables 
- Data types 
- User input 
- Number conversion 
- Calculations 
- Functions 
- Function parameters 
- Return values 
- Console output
## Variables
The application uses variables to store important budgeting information. 
```javascript 
let budget = 0; 
let expenses = 0; 
let balance = 0;

User Input
SpendWise collects information from the user using JavaScript's prompt() function.

budget = Number(prompt("Enter your total monthly budget:"));
expenses = Number(prompt("Enter your total expenses:"));

The Number() function converts the user's input into numbers so that calculations can be performed.

Budget Calculations
SpendWise calculates the remaining balance by subtracting expenses from the budget.

budget - expenses

Functions
The project uses a reusable function called calculateBalance().

function calculateBalance(budget, expenses) {
    return budget - expenses;
}

The function receives the budget and expenses as parameters and returns the remaining balance.

Functions help organize the code and make calculations reusable.

Displaying Results
The calculated results are displayed in the browser console using console.log().

Technologies Used
HTML
CSS
JavaScript
GitHub
