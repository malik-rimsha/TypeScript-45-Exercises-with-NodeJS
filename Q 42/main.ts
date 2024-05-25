// Define the function to show magicians names
function show_magicians(magicians:string[]){
    magicians.forEach(name =>console.log(name));
};

// Function to make magicians great through .map() modify an  array
function make_great(magicians_names:string[]){
    return magicians_names.map(name => `The Great ${name}`);
};

// Define an Array of magicians names
let magicians_names = ["Harry Potter", "Maha", "Miral"];

// Call make_great function to modify magicians names
let great_magicians = make_great(magicians_names);

// call show_magicians function that show modify list of magicians
show_magicians(great_magicians);