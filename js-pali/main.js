// chiedo la parola da inserire
let userWord = prompt("Inserisci una parola");
console.log(userWord);
const isWordPalindroma = palindroma(userWord);

// è palindroma?
if (isWordPalindroma) {
  alert("La parola è palindroma");
} else {
  alert("La parola non è palindroma");
}

// funzione per stabile se parola è palindroma
function palindroma(input) {
  const word = input.toLowerCase();
  // creo una stringa che contiene la parola al contrario
  let reverse = "";
  // Il ciclo inizierà a (word.length - 1) che corrisponde all'ultimo carattare della stringa.
  //Finché i è maggiore o uguale a 0, il ciclo continua
  //Decrementiamo i dopo ogni iterazione
  for (let i = word.length - 1; i >= 0; i--) {
    reverse = reverse += word[i];
  }
  return word === reverse;
}
