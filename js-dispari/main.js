// utente sceglie un numero da 1 a 5
let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log(userNumber);

// pc sceglie numero random con funzione
function randomPcNumber() {
  return Math.floor(Math.random() * 5) + 1;
}
randomPcNumber();

// somma numeri
let computerNumber = randomPcNumber();
let sum = userNumber + computerNumber;
console.log(computerNumber);
console.log(sum);

// la somma è pari?
function isEven(number) {
  return number % 2 === 0;
}

// chi ha vinto?
if (
  (isEven(sum) && userNumber === "pari") ||
  (!isEven(sum) && userNumber === "dispari")
) {
  console.log("Hai vinto");
} else {
  console.log("Hai perso");
}
