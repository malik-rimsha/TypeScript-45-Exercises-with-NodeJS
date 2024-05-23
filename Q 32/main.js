// Array of current users
var current_users = ["Ayesh", "Maham", "Miral", "Meerub", "Maliha"];
// Array of new users
var new_users = ["Hooriya", "Umaima", "Miral", "Noor", "Maham"];
// Loop through new_user to check for usersnames availability
new_users.forEach(function (new_one_user) {
    // Making a condition for username already exists and save in our_condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Print different messages with If_Else Statement
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available!"));
    }
});
