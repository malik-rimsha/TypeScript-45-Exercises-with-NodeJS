//define variables
let apple = "apple";
let uppercaseapple = "APPLE"; 
let seven = 7;
let nineteen = 19;
let fruits = ["apple", "mango", "cherry"];

// Test for equality and inequality with string

// Equality test

console.log("\nis apple is equal to is apple?");
console.log( apple == "apple");

// Not equality test

console.log("\nis apple is not equal to is apple?");
console.log( apple!= "apple");

// Tests using lowercase function 

console.log("\nis APPLE is equal to apple after lowercase function?");
console.log(uppercaseapple.toLowerCase() == "apple");

console.log("\nis APPLE is not equal to apple after lowercase function?");
console.log(uppercaseapple.toLowerCase()!= "apple");

// Numerical tested

// Equal to

console.log("\nis seven is equal to 19?");
console.log(seven == 19);

// Not equal to

console.log("\nis 7 is not equal to 19?");
console.log(seven!= 19);

// Greater than

console.log("\nis seven greater than 1?");
console.log(seven > 1);

// Less than

console.log("\nis nineteen less than 7?");
console.log(nineteen < 7);

// Greater than or equal to

console.log("\nis seven greater than or equal to 1?");
console.log(seven >= 1);

// Less than or equal to

console.log("\nis nineteen less than or equal to 7?");
console.log(nineteen <= 7);

// Tests using "and" & "or" Operators

// Using && (and) operator

console.log("\nnineteen is not equal to 7 and nineteen is greater than 7");
console.log(nineteen != 7 && nineteen > 7);

console.log("\nnineteen is not equal to 7 and nineteen is greater than 7");
console.log(nineteen != 7 && nineteen > 23);

// Using || (Or) operator

console.log("\nnineteen is greater than 23 or nineteen is equal to 19");
console.log(nineteen > 23 || nineteen == 19);

console.log("\nnineteen is greater than 23 or nineteen is not equal to 19");
console.log(nineteen > 23 || nineteen != 19);

// Test whether an item is included in Array

// include in Array

console.log("\nis apple include in my array");
console.log(fruits.includes("apple"));

// Not include

console.log("\nis apple not include in my array");
console.log(!fruits.includes("apple"));



