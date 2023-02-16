//create an array of strings that include the letter combo "ing"
//and strings that don't include "ing" and print only the ones 
//including "ing"

//create an array of strings with some strings including "ing"
//and others not
//create a loop with for statment
//add an if statment with a condition requiring "ing"
//declare a condition that filters out words that don't include
//"ing"
//add console log statement to confirm the code works as intended

var verbs = ["Rolling", "Mowing", "Fry", "Rowing", "Sow"];
    for (var i=0; i < verbs.length; i++) {
    if (verbs[i].endsWith("ing")) {
    console.log(verbs[i])
}
}