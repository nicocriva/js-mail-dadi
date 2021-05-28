//1 Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 

//2 Stabilire il vincitore, in base a chi fa il punteggio più alto.


var giocatore = Math.floor(Math.random() * 6 + 1);
document.getElementById('numeroGiocatore').innerHTML = ('Punteggio giocatore: ') + giocatore;


var computer = Math.floor(Math.random() * 6 + 1);
document.getElementById('numeroCommputer').innerHTML = ('Punteggio computer: ') + computer;


var risultato = 'Il punteggio è pari!';

if (giocatore > computer){
    var risultato = ('Il giocatore ha vinto!');
} else if (giocatore < computer){
    var risultato = ('Il computer ha vinto!')
}
document.getElementById('risultato').innerHTML = risultato;