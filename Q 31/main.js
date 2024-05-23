var userNames = ["Ayesh", "Maha", "Ali", "Admin", "Abrish"];
userNames = [];
if (userNames.length === 0) {
    console.log("your Array is empty We need to find some users!");
}
else {
    // Using forEach Loop on Array
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thank you for logging in again!"));
        }
    });
}
;
