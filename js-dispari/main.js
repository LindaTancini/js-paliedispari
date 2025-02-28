// utente sceglie un numero da 1 a 5
let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log(userNumber);

// pc sceglie numero random con funzione
function getRandomNumber() {
  return Math.floor(Math.random() * 5) + 1;
}

// somma numeri
let computerNumber = getRandomNumber();
let sum = userNumber + computerNumber;
