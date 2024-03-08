// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// oppure applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va stampato in console in forma “umana” cioè con al massimo due decimali, per indicare centesimi sul prezzo. Questo richiederà un minimo di ricerca.

// CHIEDERE IL NUMERO DI KM DA PERCORRERE ED ETA'

let km = prompt('Inserisci numero di km da percorrere'); // stringa
let eta = prompt('Inserisci età'); // strina

// DEFINIRE COEFFICIENTE DEL PREZZO PER KM 

const coeffKm = 0.21; // numero

// CALCOLO PREZZI BIGLIETTI

let prezzoBiglietto = parseFloat(km * coeffKm);

// SCONTO MINORENNI 

if (eta < 18){
    let scontoMinori = (prezzoBiglietto - (prezzoBiglietto * (20/100)));
    console.log('Prezzo minori ' + scontoMinori.toFixed(2));
}

// SCONTO PER OVER 65

else if (eta > 65){
    let scontoOver = (prezzoBiglietto - (prezzoBiglietto * (40/100)));
    console.log('Prezzo over 65 ' + scontoOver.toFixed(2));
}

// PREZZO NON SCONTATO

else {
    console.log('Prezzo intero ' + prezzoBiglietto.toFixed(2));
}