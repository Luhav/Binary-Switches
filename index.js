let switchState = [0,0,0,0,0,0,0,0];


function updateDatavalues() {
	switchState.forEach( (val, index) => {
		document.getElementById(index + "st").innerHTML = val;
	}
	);
	document.getElementById("fullbin").innerHTML = switchState.toReversed().join("");
	document.getElementById("fulldec").innerHTML = parseInt( switchState.toReversed().join(""), 2 );
}

function setSwitchState(id, value) {
	switchState[id] = value;
}

function checkboxFlipped(checkbox) {
	let arrayValue = checkbox.id.charAt(0);
	if (checkbox.checked == true) {
		setSwitchState(arrayValue, 1);
	} else if (checkbox.checked == false) {
		setSwitchState(arrayValue, 0);
	}
	updateDatavalues();
}
