//create an array of strings that include travel destination
//names and print each destinationin alpha order, and embeded
//in a sentence

//create an array of strings with multiple travel destinations
//add array method that alphabetizes the strings
//run loop through the array
//then add string interpolation to include the elements
//in a sentence
//add console log to confirm the strings are printing
//in alpha order and in the sentence

var destinations = ["Morocco", "Thailand", "Brazil"];
{
destinations.sort();
for (var i=0; i < destinations.length; i++) {
console.log("I would love to go to " + destinations[i])
}
}
