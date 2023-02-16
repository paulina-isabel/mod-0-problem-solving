//overall goal: return only the strings in my array that are four characters exactly

//pseudocode: create an array of strings of various lengths
//declare a method that filters out any string that is not exactly equal to 4 characters
//exactly four is indicated by three equal signs: ===
//console log the variable that contains the condition to test the result

var actor = ['Al', 'Tupac', 'John', 'Jackie'];
for (var i=0; i < actor.length; i++) {
    if (actor[i].length === 4) {
        console.log(actor[i]);
    }
}