//variables

var color = "blue";
var wallet = 1500;
var converted_wallet = 0;
var conversion_rate = [0.88, 111.61, 0.69];


//functions

function getRates (conversion_rate) { 

	conversion_rate[0] = 'euros';
	var eur = [conversion_rate][0];

	//question 8 
	conversion_rate[1] = 'yen';
	var yen = [conversion_rate][1];

	conversion_rate[2] = 'gbp';
	var gbp = [conversion_rate][2];
} 



function convert_currency (amount, converter) {
	var amount = parseFloat(document.getElementById("amount").value);
    var select = document.getElementById("select");
    var result = document.getElementById("result");

    		if (select.value === "USD to EUR") {
                result.value = (amount * conversion_rate[0]);
            }

            if (select.value === "USD to YEN") {
                result.value = (amount * conversion_rate[1]);
            }

             if (select.value === "USD to GBP") {
                result.value = (amount * conversion_rate[2]);
            }

           
	return amount;


return usd * getRates (conversion_rate) 
}

function wallet (amount, converter) {
	var amount = 1500;
	//question 10
$('.amount').click(function() {
  var wallet = $(this).data('amount');
  var converted_wallet = $(this).data('amount');
  convert_currency(amount, converter);
});

	var amount = 1500;
	convert_currency(amount, converter);
}





