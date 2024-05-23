// Array of current users
let current_users = ["Ayesh", "Maham", "Miral", "Meerub", "Maliha"]

// Array of new users
let new_users = ["Hooriya", "Umaima","Miral", "Noor", "Maham"]

// Loop through new_user to check for usersnames availability
new_users.forEach(new_one_user => {

    // Making a condition for username already exists and save in our_condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    
    // Print different messages with If_Else Statement
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`This Username ${new_one_user} is available!`)
    } 
});