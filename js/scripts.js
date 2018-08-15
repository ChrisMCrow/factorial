//back-end

//factorial Function
function factorialFunction(n){
	if (n < 0) {
		return "undefined. Please enter a non-negative number"
	} else if (n == 0){
		return 1
	} else {
	var total = n
 	for (i = n - 1; i > 0; i--) {
  	total *= i;
		}
  	return total
	}
}


//palindrome checker function
function removeSpace(value) {
	return value != " " && value != "," && value != "." && value != "-" && value != ":";
}

function forward(input) {
	var inputLowerCase = input.toLowerCase();
	var inputArray = inputLowerCase.split("");
	var arrayFiltered = inputArray.filter(removeSpace);
	return arrayFiltered.join("");
}

function backward(input) {
	var input = forward(input);
	var inputArray = input.split("");
	var arrayReversed = inputArray.reverse();
	return arrayReversed.join("");
}

function palindromeFunction(x) {
	if (forward(x) === backward(x)) {
		return " is a palindrome"
  } else {
 		return " is NOT a palindrome"
  }
}

//front-end
$(document).ready(function() {
	$("button#factorialSubmit").click(function(event) {
		event.preventDefault();
		var factorialInput = $("#factorial").val();
		$("#factorialOutput").html("");
		$("#factorialOutput").append(factorialInput + "! = " + factorialFunction(factorialInput));
	});

	$("button#palindromeSubmit").click(function(event) {
		event.preventDefault();
		var palindromeInput = $("#palindrome").val();
		$("#palindromeOutput").html("");
		$("#palindromeOutput").append(palindromeInput + palindromeFunction(palindromeInput));
	});
});
