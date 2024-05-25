// Define a function with a rest parameter that accept items arguments representing our sandwich
function makeSandwich(...items: string[]){
    console.log("\nMaking a sandwich with the following items:");

    items.forEach(singleItem => console.log("-" + singleItem));

    console.log("\nNow Enjoy Sandwich")
};

// call the function three time with three different numbers of arguments
makeSandwich("Chicken", "Cheese", "Mayo", "Egg");

makeSandwich("Bread", "Butter");

makeSandwich("Bread", "Butter", "Cheese", "Mayo", "Egg", "Chicken", "Tomato", "Lettuce");
