// L'utente sceglie pari o dispari
let userChoice = prompt("pari o dispari?");

// utente sceglie un numero da 1 a 5
let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log(userNumber);

// pc sceglie numero random con funzione
function randomPcNumber() {
  return Math.floor(Math.random() * 5) + 1;
}

// controllo se utente inserisce un numero e  pari o dispari
if (userNumber < 1 || userNumber > 5) {
  console.log("Errore: devi inserire un numero tra 1 e 5.");
} else if (userChoice !== "pari" && userChoice !== "dispari") {
  console.log("Errore: devi scegliere 'pari' o 'dispari'.");
}

// somma numeri
let computerNumber = randomPcNumber();
let sum = userNumber + computerNumber;
console.log(computerNumber);
console.log(sum);

// la somma è pari?
function isEven(number) {
  return number % 2 === 0;
}
const result = isEven(sum) ? "pari" : "dispari";

// chi ha vinto?
if (userChoice === result) {
  alert("Hai vinto!");
} else {
  alert("Hai perso!");
}
