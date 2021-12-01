/*
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
Consigli del giorno: :party_wizard:
Facciamo prima la parte grafica a mano e solo dopo passiamo allo script
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli in un secondo momento. */





/* creare una griglia di dimensioni comprese tra:

- 1 e 100
- 1 e 81
- 1 e 49

*/



let row = 10
let col = 10
let numberSquare = row * col
let maxNumber = numberSquare;
let minNumber = 1;
const containerGrid = document.getElementById('griglia')
// console.log(griglia);



//creare 100 quadrati

for (let i = 1; i <= 100; i++) {
    //creo 100 div
    const square = document.createElement("div")
     // do ai div la classe square
    square.classList.add("square")
    square.style.width = `calc(100% / ${col})`;
    square.style.height = `calc(100% / ${row})`;
    square.append(i)
    containerGrid.append(square)



    
    
}


// creare funzione per selezione numero quadrati alla pressione del pulsante play

const easy = document.getElementById("easy")
const medium = document.getElementById("medium")
const hard = document.getElementById("hard")



if (easy) {
    minNumber = 1
    maxNumber = 100

} else if (medium){
    minNumber = 1
    maxNumber = 81
} else
    minNumber = 1
    maxNumber = 49

document.getElementById("button").addEventListener('click', function selectGrid(minNumber, maxNumber) {

});




// creare la griglia da 100 nel momento in cui seleziono "easy" e premo il bottone "play"




