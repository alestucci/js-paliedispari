/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// function isPalindrome(word) {
// 	let wordInverse = "";
// 	for (let index = word.length - 1; index >= 0; index--) {
// 		wordInverse += word[index];
// 	}
// 	if (word == wordInverse) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// const input = prompt("Inserisci una parola");

// console.log(isPalindrome(input));

/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
// const userEvenOdd = prompt('Inserisci "Pari" o "Dispari"');
// console.log(userNumber);
// console.log(userEvenOdd);

// let userEven = false;

// if (userEvenOdd.toLowerCase() == "pari") {
// 	userEven = true;
// }

// console.log('pari? ' + userEven)

// function randomHandNumber() {
// 	return Math.floor(Math.random() * 5 + 1);
// }

// const pcNumber = randomHandNumber();
// console.log(pcNumber);
// const sum = userNumber + pcNumber;
// console.log(sum);

// function isEven(number) {
// 	const remainder = number % 2;
// 	if (remainder == 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// if (userEven == isEven(sum)) {
// 	console.log("HAI VINTO!");
// } else {
// 	console.log("HAI PERSO!");
// }
