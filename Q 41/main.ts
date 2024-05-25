// Define a function to print each magician name from an Array
function show_magician (magician: string[]){
    magician.forEach(name => console.log(name));
};

// Define in Array containing magician names
let magician_names = ["Harry Poter", "Maha", "Miral"];

// Call the function to print each magician name

show_magician(magician_names);