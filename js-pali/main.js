// chiedo la parola da inserire

let word = prompt("Inserisci una parola");
console.log(word);

// funzione per stabile se parola è palindroma
function palindroma(word) {
  // creo una stringa che contiene la parola al contrario
  let reversePalindroma = "";
  /* Il ciclo inizierà a (word.length - 1) che corrisponde 
       all'ultimo carattare della stringa. Finché i è maggiore o uguale a 0, il ciclo continua
       Decrementiamo i dopo ogni iterazione */
  for (let i = word.length - 1; i >= 0; i--) {
    reversePalindroma = reversePalindroma += word[i];
  }
  return reversePalindroma === word;
}

// è palindroma?
if (palindroma(word)) {
  alert("La parola è palindroma");
} else {
  alert("La parola non è palindroma");
}
