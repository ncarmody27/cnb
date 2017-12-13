let weight;
let weightTwo;
let weightThree;

function makeTable(exercise, modifier){
	let table=`<table id=${exercise}>
	<tr><th colspan='3'>${exercise}</th></tr>
	<tr><th>12</th><th>10</th><th>8</th></tr>
	<tr><td>${weightThree*modifier}</td><td>${weightTwo*modifier}</td><td>${weight*modifier}</td></tr>
	</table>`;
	return table;
}
function setWeight(form){
	weight = parseFloat(form.weight.value);
	weightTwo = weight - 2.5;
	weightThree = weight - 5;
	
	//squat
	let squat = makeTable('Squat',1);
	document.getElementById('squat').innerHTML = squat;
	let bench = makeTable('Bench',1);
	document.getElementById('bench').innerHTML = bench;
	//ohp
	var ohp = makeTable('OHP', .5);
	document.getElementById('ohp').innerHTML =ohp;
	//deadlift
	var dl = makeTable('Deadlift', 1.25);
	document.getElementById('dl').innerHTML =dl;
	//curl
	var crl = makeTable('Bicep Curl', .25);
	document.getElementById('curl').innerHTML =crl;
	}
