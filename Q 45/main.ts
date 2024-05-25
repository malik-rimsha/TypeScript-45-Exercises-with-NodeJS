// Define a fuction to creat a car object with optional options...
function creat_car(manufacturer, model, ...options){
    
    // Initialize the car object with manufacturer and model
    
    let car = {
        manufacturer: manufacturer,
        model: model,
    };

    // Add the additional options to the car object
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    })

    return car;
  
};

// Call the function to creat a car object
let my_car = creat_car("Toyota", "Corrolla","Color: Black", "Sunroof: True", "Year: 2024"); 

// Print the variable to ensure all the information is stored correctly in the car object
console.log(my_car);
