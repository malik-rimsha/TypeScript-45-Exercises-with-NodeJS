// Define the function to show magicians names
function show_magicians(magicians: string[]){
    magicians.forEach(name =>console.log(name));
};

// Function to make magicians great through .map() modify an  array
function make_great(magicians_names: string[]){
    return magicians_names.map(name => `The Great ${name}`);
};

// Define an Array of magicians names
let magicians_names = ["Harry Potter", "Maha", "Miral"];

// Making a copy of original array through .slice() function
let copy_magicians_names = magicians_names.slice();

// Modify the copy array to include "The Great" with their names
let copy_great_magicians = make_great(copy_magicians_names);

// Show both arrays original and copied

// Original
console.log("Original Array\n");
show_magicians(magicians_names);

// Copied

console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);