// Define the function to show magicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
;
// Function to make magicians great through .map() modify an  array
function make_great(magicians_names) {
    return magicians_names.map(function (name) { return "The Great ".concat(name); });
}
;
// Define an Array of magicians names
var magicians_names = ["Harry Potter", "Maha", "Miral"];
// Making a copy of original array through .slice() function
var copy_magicians_names = magicians_names.slice();
// Modify the copy array to include "The Great" with their names
var copy_great_magicians = make_great(copy_magicians_names);
// Show both arrays original and copied
// Original
console.log("Original Array\n");
show_magicians(magicians_names);
// Copied
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
