function factorial(n){
	var total = n
 	for (i = n - 1; i > 0; i--) {
  	total *= i;
	}
  return total
}

var x = prompt("Enter a number to be put in a factorial");
alert(factorial(x));
