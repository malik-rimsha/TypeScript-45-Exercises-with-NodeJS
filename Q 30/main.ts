// Creating an Array
let userNames = ["Ayesh", "Maha", "Ali", "Admin", "Abrish"];

// Using ForEach Loop an Array
userNames.forEach(oneUser => {
    if(oneUser === "Admin"){
        console.log(`\nHello ${oneUser}, would you like to see a status report?`);
    }else{
        console.log(`\nHello ${oneUser}, thank you for logging in again!`);
    }
})
