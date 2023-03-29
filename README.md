# JSnack Blocco 1

## Consegna

**Consegna**

L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

**Bonus**

Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

## Steps

**Steps da seguire:**

1. Creare il markup

2. Creare le classi per la gestione delle dimensioni e colori dei box

3. Creare un `eventListener` per far apparire il container con i box

4. Creare una funzione per la generazione del singolo box

5. Creare una funzione che generi un numero random da 1 a 100 ed inviarla ad una seconda funzione

6. Creare una funzione che abbia in input il numero random generato precedentemente; questa funzione controllerà se il numero generato in precedenza sia univoco:

    - Se lo è verrà inviato tramite `return` ed aggiunto sotto forma di proprietà intrinseca del box (in maniera tale che possa essere salvato in memoria ma non sia leggibile da parte dell'utente)

    - Se non lo è, continueremo a generare numeri random fino a quando uno di essi non sia valido

7. Stampiamo a schermo il box

8. Al click dell'utente del singolo box stampiamo a schermo, tramite un `console.log` la proprietà intrinseca che abbiamo precedentemente assegnato al box

9. Al click dell'utente del singolo box, tramite l'utilizzo di `.classList.toggle` assegnamo una classe che renderà il box azzurro; al secondo click il box ritornerà del colore originale.

**Steps Bonus da seguire:**

1. Creare una `select` con 3 `option`

2. Ad ogni option, tramite l'utilizzo di uno `switch case`, associamo una classe che andrà a cambiare il calc della dimensione dei box

## References

