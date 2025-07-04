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


// creo l'array con indirizzi falsi 
const checklist = ['pizzapercolazione@gmail.com' , 'sonoununicorno@gmail.com' , 'caffeinacronica@gmail.com' , 'vogliadivacanza@gmail.com' , 'pandaabbraccione@gmail.com' , 'pastaeinternet@gmail.com' , 'dormosempre@gmail.com' , 'ridisempre@gmail.com' , 'nerdincognito@gmail.com' , 'felicecomeunpesce@gmail.com']
//definizione di variabili 

const UserName = prompt('Inserisci la tua mail')
// creo la variabile answer in modo da visualizzare quella anche fuori dall'if 
let answer ;
// con Array va il ciclo for attivo il contatore 
for ( i=0 ; i<checklist.length ; i++) {
// ciclo if con break per fermare il ciclo nel momento in cui trova la mail corretta 
  if(UserName === checklist[i])  {
    
    answer = 'Benvenuto a bordo Signore '
    {break}

  } else  {
    
    answer = `La sua richiesta di accesso è stata negata la sua mail ${UserName} non è presente nella nostra lista`
    
  }


}
// mostro il risultato 
console.log(answer)
























// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


//definizione delle  variabili
let resultPc = Math.floor((Math.random() * 6) +1);
let resultUtente = Math.floor((Math.random() * 6) +1);
// controllo i risultati se effettivamente rispecchiano il range descritto per avere il 6 massimo e 1 minimo 
console.log( resultPc )
console.log( resultUtente )
// creo la variabile message in modo da visualizzare quella anche fuori dall'if 
let message ;
// creo if con tre situazioni 
if (resultPc > resultUtente) {
  message = ` Spiaze il computer con il punteggio di ${resultPc} ha battuto il tuo misero ${resultUtente} `
} else if (resultPc < resultUtente)  {
  message = ` Congratulazioni!Il tuo incredibile  ${resultUtente} ha battuto il misero ${resultPc} del computer!`
} else {
  message = `Manco a vincere col computer sei buono @o@`
}
// mostro il risultato 
console.log(message)