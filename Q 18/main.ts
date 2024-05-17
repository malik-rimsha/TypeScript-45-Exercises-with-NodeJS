//making a array of countries and print its original order

let countriesTovisit: string[]= ["China", "Demark", "Brazil", "Argentina"];
console.log("Original Order:", countriesTovisit);

//print the array in alphabetical odder without modifying the actual array list

console.log("Alphabetical Order:", [...countriesTovisit].sort());

//show that the array is still in its original order

console.log("Still in original order:", countriesTovisit);

//print the array in reverse order without modifying the actual array list

console.log("Reverse Order:", [...countriesTovisit].reverse());

//show that the array is still in its original order

console.log("Still in original order:", countriesTovisit);

//we have changed the original array order now

console.log("Original Array Reverse:", countriesTovisit.reverse());

//prinit the array to show that it's back to original order

console.log("Back to original order:", countriesTovisit.reverse());

//prinit the array to shaow that its order has been changed in alphabetical order now

console.log("Sorted in Alphabetical order:", countriesTovisit.sort());

//we have changed again the original array order now in reverse order again

console.log("Original Array Revers Again:", countriesTovisit.reverse());