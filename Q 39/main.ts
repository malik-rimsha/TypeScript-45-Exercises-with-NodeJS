// Creating a function with perameters which return a value in string format 
function city_country(city: string, country: string) : string {
    return `${city} , ${country}`;
};

// Calling a function in returned value
console.log(city_country("Karachi", "Pakistan"));

console.log(city_country("Tokyo", "Japan"));

console.log(city_country("Barlin", "Germany"));