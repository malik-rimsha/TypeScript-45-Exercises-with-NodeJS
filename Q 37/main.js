// Making a Function
function make_shirt(siza = "Large", printMessage = "I Love TypeScript") {
    console.log(`Creating a ${siza} shirt with the ${printMessage} prints on shirt`);
}
;
// calling  a function with by default values
make_shirt();
// calling a function now with medium size and default message
make_shirt("Medium");
// calling a function now with small size and also different print message
make_shirt("Small", "I Love Python");
export {};
