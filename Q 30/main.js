// Creating an Array
var userNames = ["Ayesh", "Maha", "Ali", "Admin", "Abrish"];
// Using ForEach Loop an Array
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("\nHello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("\nHello ".concat(oneUser, ", thank you for logging in again!"));
    }
});
