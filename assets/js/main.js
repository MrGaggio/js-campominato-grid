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


let row = 10
let col = 10
let numberSquare = row * col
let maxNumber = numberSquare;
let minNumber = 1;
const containerGrid = document.getElementById('griglia')
// console.log(griglia);



// Selezione elementi Dom
let selectLevel = document.getElementById("difficolta").value
let easyLevel = document.getElementById("easy").value
let mediumLevel = document.getElementById("medium").value
let hardLevel = document.getElementById("hard").value

//creare 100 quadrati

// for (let i = 1; i <= numberSquare; i++) {
//     //creo 100 div
//     const square = document.createElement("div")
//      // do ai div la classe square
//     square.classList.add("square")
//     square.style.width = `calc(100% / ${col})`;
//     square.style.height = `calc(100% / ${row})`;
//     square.append(i)
//     containerGrid.append(square)
// }



document.getElementById("button").addEventListener('click', function selectLevel() {
          if (selectLevel == mediumLevel ) {
            numberSquare = 81
            } else {
    
}
    for (let i = 1; i <= numberSquare; i++) {
        //creo 100 div
        const square = document.createElement("div")
         // do ai div la classe square
        square.classList.add("square")
        square.style.width = `calc(100% / ${col})`;
        square.style.height = `calc(100% / ${row})`;
        square.append(i)
        containerGrid.append(square)


        
    }
    
});








