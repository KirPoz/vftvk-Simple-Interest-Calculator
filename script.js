
function compute()
{
    date = new Date();

    amount = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;

    sum = (amount * (1+rate/100)**years) - amount;

    currentYear = date.getFullYear();
    year = Number(currentYear) + Number(years);

    jsVar = 
        '<p> If you deposit: ' + amount + '</p>' +
        '<p> at an interest rate of: ' + rate + '% </p>' +
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
