var guestlist = ["Umaima", "Shazma", "Fakhra", "Hadiqa"];
var dontcome = guestlist[1];
console.log(dontcome, " can't make it today");
guestlist.splice(1, 1, "Sara");
guestlist.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to dinner with me?")); });
