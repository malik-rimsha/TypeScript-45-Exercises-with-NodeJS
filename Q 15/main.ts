let guestlist = ["Umaima", "Shazma", "Fakhra", "Hadiqa"];

let dontcome = guestlist[1];

console.log(dontcome, " can't make it today");

guestlist.splice(1, 1, "Sara");

guestlist.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me?`));