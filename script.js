/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

function isPalindrome(inputString) {
	let inputStringInverse = "";
	for (let index = inputString.length - 1; index >= 0; index--) {
		inputStringInverse += inputString[index];
	}
	if (inputString == inputStringInverse) {
		return true;
	} else {
		return false;
	}
}

let inputPalindrome = document.querySelector("#user-input");
let checkBtnPalindrome = document.querySelector("#check");
let outputPalindrome = document.querySelector("#palindrome-output");

checkBtnPalindrome.addEventListener("click", function () {
	if (inputPalindrome.value == "") {
		outputPalindrome.innerHTML =
			"Si prega di inserire una parola o un'espressione";
		outputPalindrome.className = "red";
	} else if (isPalindrome(inputPalindrome.value.toLowerCase())) {
		outputPalindrome.innerHTML = "La parola inserita è palindroma";
		outputPalindrome.className = "green";
	} else {
		outputPalindrome.innerHTML = "La parola inserita NON è palindroma";
		outputPalindrome.className = "red";
	}
});

let resetBtnPalindrome = document.querySelector("#reset-palindrome");

resetBtnPalindrome.addEventListener("click", function () {
	inputPalindrome.value = "";
	outputPalindrome.innerHTML = ". . .";
	outputPalindrome.className = "";
});

/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/
let inputNumber = parseInt(document.querySelector("#number").value);
let inputEvenOdd = document.querySelector("#selection").value;
let playBtnEvenOdd = document.querySelector("#play");
let outputNumberPc = document.querySelector("#pc-number");
let outputEvenOdd = document.querySelector("#even-odd-output");

function randomHandNumber() {
	return Math.floor(Math.random() * 5 + 1);
}

function isEven(number) {
	const remainder = number % 2;
	if (remainder == 0) {
		return true;
	} else {
		return false;
	}
}

playBtnEvenOdd.addEventListener("click", function () {
	inputNumber = parseInt(document.querySelector("#number").value);
	inputEvenOdd = document.querySelector("#selection").value;
	let userEven = false;
	if (inputEvenOdd.toLowerCase() == "even") {
		userEven = true;
	}

	const pcNumber = randomHandNumber();
	outputNumberPc.innerHTML = pcNumber;
	const sum = inputNumber + pcNumber;

	if (userEven == isEven(sum)) {
		outputEvenOdd.innerHTML = "Hai vinto!";
		outputEvenOdd.className = "green";
	} else {
		outputEvenOdd.innerHTML = "Hai perso!";
		outputEvenOdd.className = "red";
	}
});

let resetBtnEvenOdd = document.querySelector("#reset-even-odd");

resetBtnEvenOdd.addEventListener("click", function () {
	document.querySelector("#number").value = "";
	document.querySelector("#selection").selectedIndex = 0;
	outputEvenOdd.innerHTML = ". . .";
	outputEvenOdd.className = "";
});
