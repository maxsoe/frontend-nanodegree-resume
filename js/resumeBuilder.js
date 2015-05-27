/*
String Manipulation Quiz 2

If given a string of a two word name formatted with any mix of capitalization, can you manipulate the string to ensure the first name has a capital first letter and the last name is totally capitalized?
*/

var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
	var finalName = oldName;
	// Your code goes here!
	var separator = " ";
	var arrayOfStrings = oldName.split(separator);
	//console.log(arrayOfStrings);
	var firstName = arrayOfStrings[0].toLocaleLowerCase();
  var lastName = arrayOfStrings[1].toLocaleUpperCase();
  var firstLetter = firstName[0].toLocaleUpperCase();
  firstName = firstName.slice(1);
  firstName = firstLetter + firstName;
  
  console.log("First name is " + firstName +" and the last name is " +lastName +" first letter is " +firstLetter);
  
  
  finalName = firstName +" " +lastName;
  // Don't delete this line!
  return finalName;
};

// Did your code work? The line below will tell you!
console.log(nameChanger(name));

