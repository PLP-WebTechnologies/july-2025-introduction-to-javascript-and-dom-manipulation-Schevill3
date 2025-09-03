// ---------------------------------------------
// Part 1: JavaScript Basics (Variables & Conditionals)
// ---------------------------------------------

// A variable to hold age
let userAge = 20; // you can change this number
let basicOutput = "";

// Simple if/else to check if someone is an adult
if (userAge >= 18) {
  basicOutput = "You are an adult ✅";
} else {
  basicOutput = "You are a minor 🚸";
}

// Show the result on the webpage
document.getElementById("basic-output").textContent = basicOutput;


// ---------------------------------------------
// Part 2: Functions (Reusability)
// ---------------------------------------------

// Function 1: Calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}

// Function 2: Format greeting message
function greetUser(name) {
  return "Hello, " + name + "! Welcome to JavaScript 🚀";
}

// Use the functions
let functionMessage = greetUser("Student") + 
  " | Your total is: $" + calculateTotal(10, 3);

// Show the result on the webpage
document.getElementById("function-output").textContent = functionMessage;


// ---------------------------------------------
// Part 3: Loops (Iteration)
// ---------------------------------------------

// An array of numbers
let numbers = [1, 2, 3, 4, 5];
let loopList = document.getElementById("loop-list");

// Example 1: for loop
for (let i = 0; i < numbers.length; i++) {
  let li = document.createElement("li");
  li.textContent = "Number: " + numbers[i];
  loopList.appendChild(li);
}

// Example 2: while loop (countdown)
let countdown = 5;
while (countdown > 0) {
  let li = document.createElement("li");
  li.textContent = "Countdown: " + countdown;
  loopList.appendChild(li);
  countdown--;
}


// ---------------------------------------------
// Part 4: DOM Manipulation (Interactivity)
// ---------------------------------------------

// Change text on button click
document.getElementById("changeTextBtn").addEventListener("click", function() {
  document.getElementById("text-to-change").textContent = "Text has been changed 🎉";
});

// Toggle highlight class
document.getElementById("toggleBtn").addEventListener("click", function() {
  document.getElementById("toggle-paragraph").classList.toggle("highlight");
});

// Add new list item dynamically
document.getElementById("addItemBtn").addEventListener("click", function() {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item Added 📝";
  document.getElementById("dynamic-list").appendChild(newItem);
});
