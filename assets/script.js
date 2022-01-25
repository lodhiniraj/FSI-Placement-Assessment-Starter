// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Niraj Lodhi" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')

// Code to update name display
credit.textContent = `Created by ${'Niraj Lodhi'}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
// HINT: You can delete this console.log after you no longer need it!
console.log('Gingerbread + button was clicked!')

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})

// TODO: Hook up event listeners for the rest of the buttons








// let quantity = document.querySelector('#minus-gb');
let quantity = 1;
let gbMinusBtn = document.querySelector('#minus-gb');

gbMinusBtn.addEventListener('click', function() {
    quantity = quantity + 1;
    quantityContainer.buttonContainer = `Quantity: ${'qty-gb'}`;
});

// let quantity = document.querySelector('#add-cc');
let chocoletChips = 1;
let ccPlusBtn = document.querySelector('#add-cc');

ccPlusBtn.addEventListener('click', function() {
    quantity = quantity + 1;
    quantityContainer.buttonContainer = `Quantity: ${'qty-cc'}`;
});

// let quantity = document.querySelector('#minus-cc');
let chocolateChips = 1;
let ccMinusBtn = document.querySelector('#minus-cc');

ccMinusBtn.addEventListener('click', function() {
    quantity = quantity + 1;
    quantityContainer.buttonContainer = `Quantity: ${'qty-cc'}`;
});

// let quantity = document.querySelector('#add-sugar');
let sugarSprinkle = 1;
let ssPlusBtn = document.querySelector('#add-sugar');

ssPlusBtn.addEventListener('click', function() {
    quantity = quantity + 1;
    quantityContainer.buttonContainer = `Quantity: ${'qty-cc'}`;
});

// let quantity = document.querySelector('#minus-sugar');
let SugarSprinkle = 1;
let ssMinusBtn = document.querySelector('#minus-sugar');

ssMinusBtn.addEventListener('click', function() {
    quantity = quantity + 1;
    quantityContainer.buttonContainer = `Quantity: ${'qty-cc'}`;
});

//Total

let totalQuantity
let Total = ('Gb' + 'Cc' + 'Sugar');



