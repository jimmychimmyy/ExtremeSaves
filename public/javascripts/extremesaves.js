function sayHello() {
	var select = document.getElementById('pokemon_type');
	var opt = select.options[select.selectedIndex].value;
	var option = select.options[select.selectedIndex].text;
	console.log(option);

	if (opt == 6) {
		var img = document.getElementById('currentpokemonimg').src = "http://vignette2.wikia.nocookie.net/pokemon/images/c/c7/006Charizard_Dream.png/revision/latest?cb=20131213083306";
	}

	if (opt == 1) {
		var img = document.getElementById('currentpokemonimg').src = "http://vignette1.wikia.nocookie.net/pokemon/images/b/b8/001Bulbasaur_Dream.png/revision/latest?cb=20140903033758";
	}
}

/* checks the pokemon's max level, if it is over 100, then reset it to 100, if under 1 then reset to 1 */
function checkMaxLv() {
	var lv = document.getElementById('pokemon_lv');
	if (lv.value > 100) {
		lv.value = 100
	} else if (lv.value < 1) {
		lv.value = 1;
	} else {
		lv.value = lv.value; // I dont need this, but can i just leave an empty else statement?
	}
}

/* */

function sayHi() {
	console.log("extreme saves!!!!");
	var reader = new FileReader();
	reader.onload = function(event) {
		var contents = event.target.result;
		console.log("file contents: " + contents);
	}

	reader.onerror = function(event) {
		console.log("file could not be read");
	}

	var file = 'javascripts/nature.txt';
	reader.readAsText(file);
}

function setDefault() {
	//console.log("setting default");
	document.getElementById(1).className = 'panel panel-danger'
}

/* Highlights the clicked box inside editbox page */
function selectPokemonInBox(index) {
	console.log("select this pokemon in box");
	for (i = 1; i < 31; i++) {
		var item = document.getElementById(i);
		item.className = 'panel panel-default';
	}
	var select = document.getElementById(index);
	if (select.className == 'panel panel-danger') {
		select.className = 'panel panel-default';
	} else {
		select.className ='panel panel-danger';	
	}
}

function chooseTrainerGender() {
	var doc = document.getElementById('trainer_gender');
	var opt = doc.options[doc.selectedIndex].value;

	if (opt == 1) {
		var img = document.getElementById('trainerimg').src = "http://vignette4.wikia.nocookie.net/nintendo/images/3/31/Red.png/revision/latest?cb=20111124132055&path-prefix=en"
	}

	if (opt == 2) {
		var img = document.getElementById('trainerimg').src = "https://s-media-cache-ak0.pinimg.com/originals/86/e6/59/86e659678fddd953c8228520abf62f70.jpg"
	}
}