function encypherRotButton() {
	var input = document.getElementById("decypheredRotText").value;
	var output = "";
	
	for (var i = 0; i < input.length; i++) {
		var casing;
		var letters = /[a-z]/i;
		
		if (letters.test(input.charAt(i))) {
			if (input.charAt(i) == input.charAt(i).toUpperCase()) {
				casing = true;
			} else {
				casing = false;
			}
			
			
			var x = getNumberFromLetter(input.charAt(i).toUpperCase()) + (document.getElementById("rotSelect").selectedIndex + 1);
			
			if (x > 26) {
				x = x - 26;
			}
			
			if (!casing) {
				output = output + getLetterFromNumber(x).toLowerCase(); 
			} else {
				output = output + getLetterFromNumber(x)
			}
		} else {
			output = output + input.charAt(i);
		}
	}
	document.getElementById("encypheredRotText").value = output;
}

function decypherRotButton() {
	var input = document.getElementById("encypheredRotText").value;
	var output = "";
	
	for (var i = 0; i < input.length; i++) {
		var casing;
		var letters = /[a-z]/i;
		
		if (letters.test(input.charAt(i))) {
			if (input.charAt(i) == input.charAt(i).toUpperCase()) {
				casing = true;
			} else {
				casing = false;
			}
			
			var x = getNumberFromLetter(input.charAt(i).toUpperCase()) - (document.getElementById("rotSelect").selectedIndex + 1);
			if (x < 1) {
				x = x + 26;
			}
			
			if (!casing) {
				output = output + getLetterFromNumber(x).toLowerCase(); 
			} else {
				output = output + getLetterFromNumber(x)
			}
		} else {
		output = output + input.charAt(i);
		}

	}
	document.getElementById("decypheredRotText").value = output;
}

function encypherA1Z26Button () {
	var input = document.getElementById("decypheredA1Z26Text").value;
	
}

function decypherA1Z26Button () {
	var input = document.getElementById("encypheredA1Z26Text").value;
	var delim = /[^0-9]/i;
	input = input.split(delim);
	
	for (var i = 0; i < input.length; i++) {
		//window.alert(input[i]);
	}
}

function getNumberFromLetter (letter) {
	if (letter == "A") {
		return 1;
	} else if (letter == "B") {
		return 2;
	} else if (letter == "C") {
		return 3;
	} else if (letter == "D") {
		return 4;
	} else if (letter == "E") {
		return 5;
	} else if (letter == "F") {
		return 6;
	} else if (letter == "G") {
		return 7;
	} else if (letter == "H") {
		return 8;
	} else if (letter == "I") {
		return 9;
	} else if (letter == "J") {
		return 10;
	} else if (letter == "K") {
		return 11;
	} else if (letter == "L") {
		return 12;
	} else if (letter == "M") {
		return 13;
	} else if (letter == "N") {
		return 14;
	} else if (letter == "O") {
		return 15;
	} else if (letter == "P") {
		return 16;
	} else if (letter == "Q") {
		return 17;
	} else if (letter == "R") {
		return 18;
	} else if (letter == "S") {
		return 19;
	} else if (letter == "T") {
		return 20;
	} else if (letter == "U") {
		return 21;
	} else if (letter == "V") {
		return 22;
	} else if (letter == "W") {
		return 23;
	} else if (letter == "X") {
		return 24;
	} else if (letter == "Y") {
		return 25;
	} else if (letter == "Z") {
		return 26;
	} else {
		return letter;
	}
}

function getLetterFromNumber (number) {
	if (number == 1) {
		return "A";
	} else if (number == 2) {
		return "B";
	} else if (number == 3) {
		return "C";
	} else if (number == 4) {
		return "D";
	} else if (number == 5) {
		return "E";
	} else if (number == 6) {
		return "F";
	} else if (number == 7) {
		return "G";
	} else if (number == 8) {
		return "H";
	} else if (number == 9) {
		return "I";
	} else if (number == 10) {
		return "J";
	} else if (number == 11) {
		return "K";
	} else if (number == 12) {
		return "L";
	} else if (number == 13) {
		return "M";
	} else if (number == 14) {
		return "N";
	} else if (number == 15) {
		return "O";
	} else if (number == 16) {
		return "P";
	} else if (number == 17) {
		return "Q";
	} else if (number == 18) {
		return "R";
	} else if (number == 19) {
		return "S";
	} else if (number == 20) {
		return "T";
	} else if (number == 21) {
		return "U";
	} else if (number == 22) {
		return "V";
	} else if (number == 23) {
		return "W";
	} else if (number == 24) {
		return "X";
	} else if (number == 25) {
		return "Y";
	} else if (number == 26) {
		return "Z";
	} else {
		return number;
	}
}