"use strict";
// storing a person name in a variable
Object.defineProperty(exports, "__esModule", { value: true });
let personName = "rimsha umer";
// printing a person name in lowercase
console.log("Lowercase:", personName.toLowerCase());
// printing a person name in uppercase
console.log("Uppercase:", personName.toUpperCase());
// printing a personName in Titlecase
console.log("Titlecase:", personName.replace(/\b\w/g, (char) => char.toUpperCase()));
