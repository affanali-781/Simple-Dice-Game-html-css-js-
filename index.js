function playGame() {
	var random1, random2;
	random1 = Math.floor(Math.random() * 6) + 1;
	random2 = Math.floor(Math.random() * 6) + 1;

	document
		.getElementsByClassName("img1")[0]
		.setAttribute("src", `./images/dice${random1}.png`);

	document
		.getElementsByClassName("img2")[0]
		.setAttribute("src", `./images/dice${random2}.png`);

	if (random1 == random2) {
		document.querySelector("h1").innerHTML = "DRAW!!!";
	} else if (random1 < random2) {
		document.querySelector("h1").innerHTML = "Player 2 Wins!!!";
	} else {
		document.querySelector("h1").innerHTML = "Player 1 Wins!!!";
	}
}

function refreshPage() {
	location.reload();
}

if (document.querySelector("h1").innerHTML === "Refresh Me") {
	document.querySelector("button").innerHTML = "PLAY";
}
