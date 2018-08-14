function factorial(n){
	var total = n
 	for (i = n - 1; i > 0; i--) {
  	total *= i;
	}
  return total
}

var x = prompt("Enter a number to be put in a factorial");
alert(factorial(x));

//palindromeprompt-->


function palindrome(x) {
  var xArray = x.split("");
  var yArray = xArray.reverse()
  var y = yArray.join("");
	if (x === y) {
		alert(true)
  } else if (x != y) {
 		alert(false)
  }
}



var userInput = prompt("does this work?");
 palindrome(userInput)
