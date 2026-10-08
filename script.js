let budget = 0;
let expenses = 0;

budget = Number(prompt("Enter your monthly budget:"));
expenses = Number(prompt("Enter your total expenses:"));
function calculateBalance(budget, expenses) {
    return budget - expenses;
}
let remainingBalance = calculateBalance(budget, expenses);
console.log("=== SpendWise Budget Summary ===");
console.log("Budget: Ksh " + budget);
console.log("Expenses: Ksh " + expenses);
console.log("Remaining Balance: Ksh " + remainingBalance)
// Store application data using variables
let budget = 0;
let expenses = 0;
let balance = 0;
// Function to calculate the remaining balance
function calculateBalance(budget, expenses) {
    return budget - expenses;
    }
    // Function to start the budgeting process
    function startBudget() {
        // Collect budget from the user
        budget = Number(prompt("Enter your total monthly budget:"));

        // Collect expenses from the user
        expenses = Number(prompt("Enter your total expenses:"));

        // Calculate the remaining balance
        balance = calculateBalance(budget, expenses);

        // Display results in the browser console
        console.log("===== SpendWise Budget Report =====");
        console.log("Total Budget: KSh " + budget);
        console.log("Total Expenses: KSh " + expenses);
        console.log("Remaining Balance: KSh " + balance);

        // Give the user a message
        alert(
            "SpendWise Budget Report\n\n" +
            "Budget: KSh " + budget + "\n" +
            "Expenses: KSh " + expenses + "\n" +
            "Remaining Balance: KSh " + balance
            );
            }
            // Test the calculation function
            console.log("Test Balance:", calculateBalance(50000, 15000));






