// creating a guestlist array
let guestlist = ["Shazma", "Umaima", "Fakhra", "Hadiqa"];

// making variable for those who don't want to come 
let dontCome = guestlist[0];

// printint the name of the guest who don't want to come
console.log(dontCome, "can't make it today!");

// add and remove guest from guest list array
guestlist.splice(0, 1, "Sara");

// printing the massage for good news
console.log("Good News ! We have Found a Bigger Table for Dinner.");

// adding a new guest at starting index of array
guestlist.unshift("Nosheen Gull");

// adding a new guest atending index of array
guestlist.push("Ghazal");

// get a middle index of our guest list array
let middleIndex: number = Math.floor(guestlist.length / 2);

// addding a new guest to middle index of array
guestlist.splice(middleIndex, 0, "Shama");

// printing massage of updated guest list
console.log("updated guest list of our guests");

// sending a invitation to our guests one by one with thier names
guestlist.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to Dinner with me?`));

// informe that only two guests can be invited for dinner
console.log("unfortunatly, the new dinner table won't arrive on time, so I can only invite two guests to dinner with me. ");

// using while-loopto remove guests from the array until only two names remain
while(guestlist.length > 2){
    let removedGuest = guestlist.pop();
    console.log(`sorry, ${removedGuest} I can't invite you to dinner.`);
}

// sending a invitations to the lucky last two guests on the table
console.log("Invitations to the  last two Guests.");
guestlist.forEach(luckylasttwo => console.log(`luckly ${luckylasttwo}, you are still invited to dinner.`)); 

//removing last two guests on the list
guestlist.pop();
guestlist.pop();

console.log("Empty Guest List:", guestlist);
















