// Define the Make_album Function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
;
// Calling three functions and creating three variables with different values
var album1 = make_album("Malik", "Album title 1");
var album2 = make_album("Rimsha", "Album title 2");
// Calling a make_album function with third parameter
var album3 = make_album("Miral", "Album title 3", 7);
// Printing values of our object created my function
console.log(album1);
console.log(album2);
console.log(album3);
