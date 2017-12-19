function setWeight(form){
	let weight = parseFloat(form.weight.value);
	let weightTwo = weight - 2.5;
	let weightThree = weight - 5;
	//squat
	let squat = makeTable('Squat (A & B)',1, weight, weightTwo, weightThree);
	document.getElementById('squat').innerHTML = squat;
	//bench
	let bench = makeTable('Bench (A)',1, weight, weightTwo, weightThree);
	document.getElementById('bench').innerHTML = bench;
	//ohp
	var ohp = makeTable('OHP (B)', .5, weight, weightTwo, weightThree);
	document.getElementById('ohp').innerHTML =ohp;
	//deadlift
	var dl = makeTable('Deadlift (B)', 1.25, weight, weightTwo, weightThree);
	document.getElementById('dl').innerHTML =dl;
	//Barbell Row
	var bbr = makeTable('Barbell Row (A)', .75, weight, weightTwo, weightThree);
	document.getElementById('bbr').innerHTML =bbr;
}

function makeTable(exercise, modifier, weight, weightTwo, weightThree){
	let table=`<table id=${exercise}>
	<tr><th colspan='3'>${exercise}</th></tr>
	<tr><th>12</th><th>10</th><th>8</th></tr>
	<tr><td>${weightThree*modifier}</td><td>${weightTwo*modifier}</td><td>${weight*modifier}</td></tr>
	</table>`;
	return table;
}