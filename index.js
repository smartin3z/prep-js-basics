/* create variables */

/**
* #1
* Variables with a String as their value
*
* Declare variables named `firstName`, `lastName`, and `birthPlace`.
* Fill out the values for these with your own data or make it up.
*
* It should be a String.
**/

var firstName = "Scott! HO! wassup HHHawwwiiaannn";
console.log(firstName);

var lastName = "Martinez! ESE!!!";
console.log(lastName);

var birthPlace = "HO! Da 808 State baah!!";
console.log(birthPlace);

/**
* #2
* Variables with a Number as their value
*
* Declare variables named `favoriteNumber`, `currentYear`,
* and `thatOnePrinceSong`.
*
* Their values should be a Number
**/

/**var favoriteNumber_test = [58, 13, 17];
console.log(favoriteNumber_test);**/

var favoriteNumber = "17 is my favorite number";
console.log(favoriteNumber);

var currentYear = 2016;
console.log(currentYear);

var thatOnePrinceSong = "PARTY LIKE ITS 1999"; 
console.log(thatOnePrinceSong);

/**
* #3
* Variables with Boolean values
*
* Declare variables named `isDaytime`, `isLeftHanded`, `inHawaii`,
* and `isHappyCoding`
*
* Their values should be a Boolean
**/

var isDaytime = true;
console.log(true);

var isLeftHanded = false;
console.log(false);

var inHawaii = true;
console.log(true);

var isHappyCoding = (true);
console.log(true);

/**
* #4
* Variables with null
*
* Declare variables named `enrolledAtDevLeague` and `completedFridayPrep`
*
* Their values should be a Null value
**/

var enrolledAtDevLeague = null;
console.log(null);

var completedFridayPrep = null;
console.log(null);

/**
* #5a
* Variables with an Array for it's value. This Array will contain:
*
* Declare a variable named `westCoast` which is an Array.
* This Array contains the names of all the states
* which can be found along the west coast of The United States.
**/

var westCoast = ["California, Oregon, Washington"] 

{
 console.log("California");
 console.log("Oregon");
 console.log("Washington");
}

/**
* #5b
* Variables with an Array for it's value. This Array will contain:
*
* Declare a variable named `evenNumbers` which is an Array.
* This Array contains numbers that are considered 'even values'.
* Have at least ten even values in this array.
**/

evenNumbers = [2, 4, 6, 8, 10, 12, 14];
console.log(evenNumbers);

/**
* #6a Arithmetic
* Variables with the outcome of an arithmetic operation:
*
* Declare a variable named `sumOfNumbers` which is a Number. This Number
* contains the result of performing an arithmetic operation on two numbers.
* Have this variable store the result of adding 3 numbers of your choosing.
*
* Extend this behavior to include subtraction, multiplication and division.
*/

var sumOfNumbers = 1 + 2 + 5 + 6;
console.log(sumOfNumbers);

var subtraction = 1 - 10;
console.log(subtraction);

var multiplication = 1 * 1;
console.log(multiplication);

var division = 8 / 2;
console.log(division);

/**
* #6b Comparisons & Logic
* Variables with the outcome of a comparison operation:
*
* Declare a variable named `isEqual` which is a Boolean. This Boolean
* contains the result of performing a comparison to test if two strings
* are equal. We want to compare the two strings "Tacocat" and "tacocat" and
* `console.log()` the result.
*
* NOTE:
*   There is no test which tests your console.log()'s output'.
*   Also, there are zero tests for the BONUS below.
*
* BONUS:
*   See if you can come up with a few examples of double comparison
*   operator(==) vs triple comparison operator(===).
*/

var isEqual = "Tacocat" === "tacocat";
console.log(isEqual);

var isEqual = "dog" === "cat";
console.log(isEqual);

var isSame = "Dog" === "Wolf";
console.log(isSame);

var sameSpelling = "see" === "see";
console.log(sameSpelling);

var better = "surfing" < "bodyboarding";
console.log(better);

/**
* #6c Assignments
* Variables with the outcome of an assignment operation:
*
* Declare a variable named `generalContainer`. This variable will be used to store multiple types of
* values as we assign them to show how variables in JavaScript are not bound to a single data type
* and can change values.
*
* Write 5 different assignment statements and `console.log()` the value of the variable after each
* assignment statement to show the current value.
*
* NOTE:
*   The tests for this section cannot test your variable as it changes,
*   it can only test that you declared the variable by giving it the right name.
*/

var generalContainer = 5; //trying something different!
console.log(generalContainer -5);
console.log(generalContainer -4);
console.log(generalContainer -3);
console.log(generalContainer -2);
console.log(generalContainer -1);
console.log(generalContainer -0);

var generalContainer = 10

console.log(generalContainer);
generalContainer+=10;

console.log(generalContainer);
generalContainer-=10;

console.log(generalContainer);
generalContainer+=10;

console.log(generalContainer);
generalContainer-=10;

console.log(generalContainer);
generalContainer+=10;

console.log(generalContainer);
generalContainer-=10;

console.log(generalContainer);
generalContainer+=10;

/**
* #7a
* Declare Functions
*
* Declare a Function named `jump` which takes a single argument, `height`
*
* This function should return a String, "You jumped 9 feet high!"
* if invoked in this way -> jump(9);
*
* Store the return value to a variable named `jumpResult` and use console.log to inspect the value which was returned by your function
**/

function jump(height) {
return "you jump" + " " + height + " " + "feet high"; 
}

console.log(jump(10));
console.log(jump(20));

/*========*/ 

function shoot(bullets) {
return "shoot" + " " + bullets + " "  + "rounds"; 
}

console.log(shoot(5));
console.log(shoot(10));

/*========*/ 

function car(parts) {
return "nice" + " " + parts + " " + "for the engine" 
}

console.log(car("turbo"));

/*========*/ 

function matrix(movie) {
return "The" + " " + movie + " " + "is a great scfi movie "
}

console.log(matrix("matrix"));

/*========*/ 

function word(success) {
return "Develop success from failures. Discouragement and failure are two of the surest stepping stones to" + " " + success
}

console.log(word("success"));

/**
* #7b
* Declare Functions
*
* Declare a Function named `cook` which a takes three arguments/parameters, `ingredient1`, `ingredient2`, `recipeName`
*
* This function should return a String along the lines of, "Tomatoes and Cheese make a Pizza!"
* if invoked in this way -> cook("Tomatoes", "Cheese", "Pizza");
**/

function cook (ingredient1, ingredient2, recipeName) {
return ingredient1 + ' and ' + ingredient2 + 
" make a " + recipeName
}

console.log(cook("Tomatoes", "Cheese", "Pizza"));

/*========*/ 

function car (part1, part2, part3) {
return part1 + ' or ' + part2 + ' let me guess ' 
+ part3 
}

console.log(car("All Motor", "Supercharger", 
"Turbocharger"));

/*========*/ 

function bodyboardingEquipment 
(supply1, supply2, supply3) {
return supply1 + ' ' + supply2 + ' ' + supply3
}

console.log(bodyboardingEquipment("leash", "fins", 
	"bodyboard"));
