// Ciao ragazzi,
// Esercizio di oggi:
// nome repo: js-mail-dadi

// Mail
// Crea una lista di email di invitati ad una festa.
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
// Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
// Si può fare? Certo che si basta ragionare un po’.
// Nota: 
// Non è necessario provvedere alla validazione delle email

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

//definizione delle  variabili
let resultPc = Math.floor((Math.random() * 6) +1);
let resultUtente = Math.floor((Math.random() * 6) +1);

console.log( resultPc )
console.log( resultUtente )
let message ;

if (resultPc > resultUtente) {
  message = ` Spiaze il computer con il punteggio di ${resultPc} ha battuto il tuo misero ${resultUtente} `
} else if (resultPc < resultUtente)  {
  message = ` Congratulazioni!Il tuo incredibile  ${resultUtente} ha battuto il misero ${resultPc} del computer!`
} else {
  message = `Manco a vincere col computer sei buono @o@`
}

console.log(message)