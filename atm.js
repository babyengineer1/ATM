// Initialize balance and default account number
let balance = 500000;
const defAccount = 123456789;

// Welcome message
alert ("Welcome! Please insert your card.");

// Default pin
const pin = 1234;

// Prompt user to enter pin
let enterPin = parseInt(prompt("Enter your PIN:"));

// Loop until correct pin is entered or user cancels
while (enterPin !== pin && enterPin !== null) {
  enterPin = parseInt(prompt ("Incorrect PIN. Please try again:"));
}

// If user cancels, exit the program
if (enterPin === null) {
  alert("Transaction cancelled. Please take your card.");
} else {
  // Prompt user for transaction type
  let services = parseInt(
    prompt(
      "What would you like to do?\n1. Check Balance\n2. Transfer Funds\n3. Withdraw Cash"
    )
  );

  // Loop until valid service is selected or user cancels
  while (
    isNaN(services) ||
    services < 1 ||
    services > 3 ||
    services === null
  ) {
    services = parseInt(
      prompt(
        "Invalid input. Please select a valid service:\n1. Check Balance\n2. Transfer Funds\n3. Withdraw Cash"
      )
    );
  }

  switch (services) {
    case 1:
      // Check Balance
      alert(`Your current balance is N${balance}.`);
      break;

    case 2:
      // Transfer Funds
      let recipientAccount = parseInt(prompt("Enter recipient account number:"));
      let recipientBank = prompt("Enter recipient bank name:");
      let transferAmount = parseFloat(prompt("Enter transfer amount:"));

      // Validate transfer amount
      while (isNaN(transferAmount) || transferAmount <= 0 || transferAmount > balance) {
        transferAmount = parseFloat(prompt(`Invalid amount. Please enter a valid amount (max: N${balance}):`));
      }

      // Validate recipient account
      while (recipientAccount !== defAccount) {
        recipientAccount = parseInt(prompt("Invalid account number. Please enter a valid account number:"));
      }

      // Update balance
      balance -= transferAmount;

      // Display success message
      alert(
        `Transfer of N${transferAmount} to account number N${recipientAccount} at N${recipientBank} successful. Your new balance is N${balance}.`
      );
      break;

    case 3:
      // Withdraw Cash
      let withdrawAmount = parseFloat(prompt("Enter amount to withdraw:"));

      // Validate withdraw amount
      while (isNaN(withdrawAmount) || withdrawAmount <= 0 || withdrawAmount > balance) {
        withdrawAmount = parseFloat(prompt(`Invalid amount. Please enter a valid amount (max: N${balance}):`));
      }

      // Update balance
      balance -= withdrawAmount;

      // Display success message
      alert(`Withdrawal of N${withdrawAmount} successful. Your new balance is N${balance}.`);
      break;
  }

  // Thank the user and ask if they want to perform another transaction
  let repeat = confirm("Thank you for banking with us. Do you want to perform another transaction?");
  if (repeat) {
    location.reload();
  } else {
    alert("Please take your card. Goodbye!");
  }
}


