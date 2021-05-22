
function compute()
{
    date = new Date();

    amount = document.getElementById("principal");
    rate = document.getElementById("rate");
    years = document.getElementById("years");

    if(amount.value <= 0){
    	alert("Please enter a positive number");
    	amount.focus();
    	return false;
    }

    sum = (amount.value * (rate.value/100) * years.value);

    currentYear = date.getFullYear();
    year = Number(currentYear) + Number(years.value);

    jsVar = 
        '<p> If you deposit: ' + amount.value + '</p>' +
        '<p> at an interest rate of: ' + rate.value + '% </p>' +
        '<p> You will receive an amount of: ' + sum.toFixed(2) + '</p>' +
        '<p> in the year: ' + year + '</p>';

    //alert(typeof currentYear +';'+ typeof years);

    document.getElementById('output').innerHTML = jsVar;
       
}

function range() {
	var rng=document.getElementById('rate'); //rng - это Input
	var p=document.getElementById('rate_now'); // p - абзац
	p.innerHTML=rng.value + '%';
}

function checkdata(){
    amount = document.getElementById("principal");


    if(amount.value <= 0){
    	alert("Please enter a positive number");
    	amount.focus();
    	return false;
    }

    return true;
}
