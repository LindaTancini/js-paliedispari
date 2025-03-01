// chiedo la parola da inserire

let word = prompt("Inserisci una parola");
console.log(word);

// funzione per stabile se parola è palindroma
function palindroma(word) {
  for (let i = 0; i < word.length / 2; i++) {
    // Se i caratteri non corrispondono, non è un palindromo
    if (word[i] !== word[word.length - i - 1]) {
      return false;
    }
    // Se il ciclo termina senza trovare differenze, è un palindromo
  }
  return true;
}
