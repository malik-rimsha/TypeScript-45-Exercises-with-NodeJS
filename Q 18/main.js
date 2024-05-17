//making a array of countries and print its original order
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countriesTovisit = ["China", "Demark", "Brazil", "Argentina"];
console.log("Original Order:", countriesTovisit);
//print the array in alphabetical odder without modifying the actual array list
console.log("Alphabetical Order:", __spreadArray([], countriesTovisit, true).sort());
//show that the array is still in its original order
console.log("Still in original order:", countriesTovisit);
//print the array in reverse order without modifying the actual array list
console.log("Reverse Order:", __spreadArray([], countriesTovisit, true).reverse());
//show that the array is still in its original order
console.log("Still in original order:", countriesTovisit);
//we have changed the original order now
console.log("Original Array Reverse:", countriesTovisit.reverse());
//prinit the array to show that it's back to original order
console.log("Back to original order:", countriesTovisit.reverse());
//prinit the array to shaow that its order has been changed in alphabetical order now
console.log("Sorted in Alphabetical order:", countriesTovisit.sort());
//we have changed again the original array order now in reverse order again
console.log("Original Array Revers Again:", countriesTovisit.reverse());
