//function
//alert('hello, js');

//variables
var animal = "cat";
var age = 13;
var clothing = ["shirts", "socks", "pants"];
var winner = false;
var checking_account = 1000;
var marni_shirt = 1000;
var marni_earrings = 450;
var stella_dress = 3000;

console.log(winner);

//fucntions
function print_text(text) {
	$('.value').html(text);
}

function charge_cc(item_value, brand_name) {
	alert('You will be charged ' + item_value + ' for this' + item);
	alert('Your checking account balance is ' + checking_account);

	if (checking_account < item_value) {
		if (checking_account < 1) {
			alert("You don't have any money");
		} else {
			alert("you don't have enough money to purchase this item");
	}	

	} else {
		checking_account = checking_account - item_value;
		alert('Charge successful');
		alert('Checking balance is ' + checking_account);
	}	

	// the value of the thing we're buying
	// checking account balance
}

if (winner == true) {
	alert('you are awesome!');
} else {
	alert('you suck');
}

if (age > 7) {
	alert('enjoy mighty ducks');
} else if (age < 14) {
	alert('spotlight');
} else {
	alert('you are cute');
}

$('.item').click(function() {
	var item_value = $(this).data('value');
	var brand_name = $(this).data('brand');
	charge_cc(item_value, brand_name);
});