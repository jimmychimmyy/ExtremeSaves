/* Changes image boy/girl in index.jade view */
function chooseTrainerGender() {
	var doc = document.getElementById('trainer_gender');
	var opt = doc.options[doc.selectedIndex].value;

	if (opt == 1) {
		var img = document.getElementById('trainerimg').src = "https://s-media-cache-ak0.pinimg.com/236x/04/2f/14/042f1455d682f0b04b5cc09f6395a095.jpg"
	}

	if (opt == 2) {
		var img = document.getElementById('trainerimg').src = "https://s-media-cache-ak0.pinimg.com/236x/00/45/a2/0045a2991d82b98e41d854680ab2d14a.jpg"
	}
}

/* following two functions are used to navigate between boxes in index.jade */
function goleft() {
	//console.log("go left");
	var box = document.getElementById('1box').getElementsByClassName("panel-heading")[0];
	//console.log(box);
	if (box.innerHTML == "Box 6") {
		document.getElementById('1box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 1";
		document.getElementById('2box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 2";
		document.getElementById('3box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 3";
		document.getElementById('4box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 4";
		document.getElementById('5box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 5";
	} else if (box.innerHTML == "Box 1") {
		document.getElementById('1box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 31";
		document.getElementById('2box').style.visibility = "hidden";
		document.getElementById('3box').style.visibility = "hidden";
		document.getElementById('4box').style.visibility = "hidden";
		document.getElementById('5box').style.visibility = "hidden";
	} else if (box.innerHTML == "Box 31") {
		document.getElementById('2box').style.visibility = "visible";
		document.getElementById('3box').style.visibility = "visible";
		document.getElementById('4box').style.visibility = "visible";
		document.getElementById('5box').style.visibility = "visible";
		document.getElementById('1box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 26";
		document.getElementById('2box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 27";
		document.getElementById('3box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 28";
		document.getElementById('4box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 29";
		document.getElementById('5box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 30";
	} else if (box.innerHTML == "Box 26") {
		document.getElementById('1box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 21";
		document.getElementById('2box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 22";
		document.getElementById('3box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 23";
		document.getElementById('4box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 24";
		document.getElementById('5box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 25";
	} else if (box.innerHTML == "Box 21") {
		document.getElementById('1box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 16";
		document.getElementById('2box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 17";
		document.getElementById('3box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 18";
		document.getElementById('4box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 19";
		document.getElementById('5box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 20";
	} else if (box.innerHTML == "Box 16") {
		document.getElementById('1box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 11";
		document.getElementById('2box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 12";
		document.getElementById('3box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 13";
		document.getElementById('4box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 14";
		document.getElementById('5box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 15";
	} else if (box.innerHTML == "Box 11") {
		document.getElementById('1box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 6";
		document.getElementById('2box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 7";
		document.getElementById('3box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 8";
		document.getElementById('4box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 9";
		document.getElementById('5box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 10";
	} else {

	}
}

function goright() {
	//console.log("go right");
	var box = document.getElementById('1box').getElementsByClassName("panel-heading")[0];
	//console.log(box);
	if (box.innerHTML == "Box 1") {
		document.getElementById('1box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 6";
		document.getElementById('2box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 7";
		document.getElementById('3box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 8";
		document.getElementById('4box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 9";
		document.getElementById('5box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 10";
	} else if (box.innerHTML == "Box 6") {
		document.getElementById('1box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 11";
		document.getElementById('2box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 12";
		document.getElementById('3box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 13";
		document.getElementById('4box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 14";
		document.getElementById('5box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 15";
	} else if (box.innerHTML == "Box 11") {
		document.getElementById('1box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 16";
		document.getElementById('2box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 17";
		document.getElementById('3box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 18";
		document.getElementById('4box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 19";
		document.getElementById('5box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 20";
	} else if (box.innerHTML == "Box 16") {
		document.getElementById('1box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 21";
		document.getElementById('2box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 22";
		document.getElementById('3box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 23";
		document.getElementById('4box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 24";
		document.getElementById('5box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 25";
	} else if (box.innerHTML == "Box 21") {
		document.getElementById('1box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 26";
		document.getElementById('2box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 27";
		document.getElementById('3box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 28";
		document.getElementById('4box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 29";
		document.getElementById('5box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 30";
	} else if (box.innerHTML == "Box 26") {
		document.getElementById('1box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 31";
		document.getElementById('2box').style.visibility = "hidden";
		document.getElementById('3box').style.visibility = "hidden";
		document.getElementById('4box').style.visibility = "hidden";
		document.getElementById('5box').style.visibility = "hidden";
	} else if (box.innerHTML == "Box 31") {
		document.getElementById('2box').style.visibility = "visible";
		document.getElementById('3box').style.visibility = "visible";
		document.getElementById('4box').style.visibility = "visible";
		document.getElementById('5box').style.visibility = "visible";
		document.getElementById('1box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 1";
		document.getElementById('2box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 2";
		document.getElementById('3box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 3";
		document.getElementById('4box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 4";
		document.getElementById('5box').getElementsByClassName("panel-heading")[0].innerHTML = "Box 5";
	} else {

	}
}

function confirmExit() {
	if(confirm("Do you really want exit? All progress will be lost"))
    	window.location.href = "/";
  	else
    	return false;
}

/* function to start editing a single box */
function editBox(event) {
	//alert(event);
	//console.log(event);
	var tags = event.getElementsByClassName("panel-heading")[0].innerHTML;
	var res = tags.replace("Box ", "");
	console.log(res);
	window.location.href = "/editbox/" + res;
}

/* function to jump directly to box (using drop down list) */
function getBox() {
	var box = document.getElementById("box");
	var num = box.options[box.selectedIndex].value;
	//console.log(num);
	window.location.href = "/editbox/" + num;
}

/* calls server to create default savefile for user */
function startCustom() {
	var email = document.getElementById("email"); // TODO need to start by getting user email
	var user = "jimmychimmyy@gmail.com";

	if (!email.checkValidity()) { //if not valid email, alert user
		alert("You must enter a valid email");
		return;
	}

	// POST request with email
	var request = $.post('/createdefaultsavefile',{email: user});
	request.done(function(msg) {
		console.log(msg);
		window.location.href = "/edit";
	});
}

/* sets global defaults for all pokemon */
function setDefaultPokemon() {
	// each pokemon starts at lv 100
	// by default met level is 100?
	// its four moves are the last four that it learns leveling up
	// by default its shiny
	// by default all pokeball
}

/* sets level globally for all pokemon */
function setGlobalLevel() {

}

/* sets shiny globally for all pokemon */
function setGlobalShiny() {

}

/* Highlights the clicked box inside editbox.jade */
/* MAY NOT BE WORKING PROPERLY ANYMORE */
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

/* function to change the image of the currently selected pokemon */
function selectCurrentPokemon(selected) {
	var species = document.getElementById('pokemon_type').value;
	var name = selected.options[species-1].text;
	console.log(species);
	console.log(name);
	var lower = name.toLowerCase();
	var img = document.getElementById('currentpokemonimg');
	img.src = "https://img.pokemondb.net/artwork/" + lower + ".jpg";
}

function selectPokemonInSlot(event) {
	//console.log(event.id);
	var res = event.id.replace("slot:", "");
	console.log(res);

}

/* udpates selected pokemon img */
function selectSelectedSpecies() {

}

/* call server to load info about the currently selected slot */
function selectSlot() {
	// find its absolute slot position
	//var boxNum = document.getElementById();
	//var slotNum = document.getElementById();
	var absSlot = (boxNum*30) + slotNum;

	// create json string
	var str = "{ absSlot:" + absSlot + " }";
	var jsonObj = JSON.stringify(str);

	// POST request
	var request = $.ajax({url: '/getpokemonatslot', type: 'POST'});
	request.done(function(msg) {
		console.log(msg);
		// load the pokemon into current pokemon
	});
}

/* call server to load info about the current trainer */
function loadTrainer() {
	//var email = document.getElementById(); // TODO need to have user input email before starting

	// create json string
	var str = "{ email:" + email + " }";
	var jsonObj = JSON.stringify(str);

	// POST request
	var request = $.ajax({url: '/getpokemonatslot', type: 'POST'});
	request.done(function(msg) {
		console.log(msg);
		// load trainer info into view
	});
}

/* call server to save slot change */
function saveSlot() {
	// grab every element of the pokemon
	var species = document.getElementById('pokemon_type').value;
	var nickname = document.getElementById('pokemon_nickname').value;
	var level = document.getElementById('pokemon_lv').value;
	var happy = document.getElementById('pokemon_happy').value;
	var shiny = document.getElementById('pokemon_shiny').checked;
	var nature = document.getElementById('pokemon_nature').value;
	var ability = document.getElementById('pokemon_ability').value;
	var moveA = document.getElementById('pokemon_move_a').value;
	var moveB = document.getElementById('pokemon_move_b').value;
	var moveC = document.getElementById('pokemon_move_c').value;
	var moveD = document.getElementById('pokemon_move_d').value;
	var metLevel = document.getElementById('pokemon_met_lv').value;
	var metDate = document.getElementById('pokemon_met_date').value;
	var metLocation = document.getElementById('pokemon_met_location').value;
	var pokeball = document.getElementById('pokemon_pokeball').value;
	var gameOrigin = document.getElementById('pokemon_game').value;

	//var slotNum = document.getElementById('')
	//var email = document.getElementById();

	// create JSON object
	var str = "{ species:" + species
	+ ", nickname:" + nickname 
	+ ", level:" + level
	+ ", happy:" + happy
	+ ", shiny:" + shiny
	+ ", nature: " + nature
	+ ", ability:" + ability
	+ ", moves: ['" + moveA + "','" + moveB + "','" +  moveC + "','" + moveD + "']"
	+ ", metLevel:" + metLevel
	+ ", metDate:" + metDate
	+ ", metLocation:" + metLocation
	+ ", pokeball:" + pokeball
	+ ", gameOrigin:" + gameOrigin + " }";

	// send POST request to server to save into db
	var jsonObj = JSON.stringify(str); // is this neccessary?
	var request = $.post('/saveslot',{pokemon: jsonObj});
	request.done(function(msg) {
		console.log(msg);
	});
}

/* call server to save trainer change */
function saveTrainer() {
	// grab every element of the trainer
	var name = document.getElementById('trainer_name').value;
	var gender = document.getElementById('trainer_gender').value;
	var pid = document.getElementById('trainer_id').value;
	var sid = document.getElementById('trainer_sid').value;
	var startDate = document.getElementById('trainer_startdate').value;

	//var email = document.getElementById();

	// create JSON object
	var str = "{ name:" + name
	+ ", gender:" + gender
	+ ", pid:" + pid
	+ ", sid:" + sid
	+ ", startDate:" + startDate + " }";

	// send POST request to server to save into db
	var jsonObj = JSON.stringify(str);

	/*
	var request = $.ajax({url: '/savetrainer', type: 'POST'});
	request.done(function(msg) {
		console.log(msg);
	}); */

	var request = $.post('/savetrainer', jsonObj);
	request.done(function(msg) {
		console.log(msg);
	});
}

/* checks pokemon's met level (must be equal/lower than current level) */
function checkMetLv() {
	var metLV = document.getElementById('pokemon_met_lv');
	var currentLV = document.getElementById('pokemon_lv');

	if (metLV.value > 100) {
		metLV.value = 100;
	} else if (metLV.value < 1) {
		metLV.value = 1;
	} else {
		metLV.value = metLV.value;
	}

	if (metLV.value > currentLV.value) {
		metLV.value = currentLV.value;
	}

	// TOOD if level is set before met level, then automatically set lv == met level
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

/* checks the pokemon's max happiness */
function checkMaxHappy() {
	var happy = document.getElementById('pokemon_happy');
	if (happy.value > 255) {
		happy.value = 255;
	} else if (happy.value < 0) {
		happy.value = 0;
	} else {
		happy.value = happy.value;
	}
}

/* function used to test calling extremesaves.js from jade views */
function sayingHello() {
	console.log("Hello");
}

/* function used to test get server GET request */
function testDatabase() {
	var request = $.ajax({url: '/getbulbasaur', type: 'GET'});
	request.done(function(msg) {
		console.log(msg);
	});
}

/* function used to read file and save to db (will only need this when updating db)*/
/* DELETE THIS WHEN PRODUCTION READY */
function readFile() {
	var request = $.ajax({url: '/getfile', type: 'GET'});
	request.done(function(msg) {
		console.log(msg);
		console.log(msg.split(/\r\n|\r|\n/).length)
	});

}

/* shows dialog to confirm submission*/
function confirmSubmit() {
	var choice;
	if (confirm("Are you ready to submit?") == true) {
		choice = true;
	} else {
		choice = false;
	}
	return choice;
}

/* call server to submit entire customization */
function submit() {
	var confirm = confirmSubmit();
	if (confirm) {
		// submit
		console.log("submit");
	} else {
		// do NOT submit
		console.log("DO NOT submit");
	}
}

/* function to test changing current slot's image */
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

/* TODO makes sure input for pokemon name is under  */
/*
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
} */

/*
function setDefault() {
	//console.log("setting default");
	document.getElementById(1).className = 'panel panel-danger'
} */