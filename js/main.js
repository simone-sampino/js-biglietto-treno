/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

TIP: per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:
100km, 10 anni => prezzo corretto: €16.80
100km, 70 anni => prezzo corretto: €12.60 */


// chiedere all'utente il numero di chilometri che vuole percorrere
const km = Number(prompt('Inserisci quanti chilometri intendi percorrere'));

// e l'età del passeggero
const age = Number(prompt("Inserisci l'età del passeggero"));

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
const price_per_km = 0.21;

// prezzo senza sconto
const price_without_discount = km * price_per_km;
console.log(price_without_discount);