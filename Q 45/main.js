// Define a fuction to creat a car object with optional options...
function creat_car(manufacturer, model) {
    // Initialize the car object with manufacturer and model
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Add the additional options to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
;
// Call the function to creat a car object
var my_car = creat_car("Toyota", "Corrolla", "Color: Black", "Sunroof: True", "Year: 2024");
// Print the variable to ensure all the information is stored correctly in the car object
console.log(my_car);
