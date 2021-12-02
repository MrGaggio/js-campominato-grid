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
let minNumber = 1;
const containerGrid = document.getElementById('griglia')
// console.log(griglia);



// Selezione elementi Dom
let selectLevel = document.getElementById("difficolta")
let buttonPlay = document.getElementById('button')




//creare 100 quadrati

//funzione per cambiare il livello
//  function level(selectLevel, numberSquare, row) {
//     if (selectLevel == "easy") {
//         console.log(selectLevel);
//         numberSquare = 100;
//         row = 10;
      
//     } else if(selectLevel == "medium") {
//         numberSquare = 81;
//         row = 9;
//     } else if(selectLevel == "hard") {
//         numberSquare = 49;
//         row = 7;
//     }
//     return numberSquare
// };

//     console.log(selectLevel.value);

// for (let i = 1; i <= numberSquare; i++) {
//     //creo 100 div

//     const square = document.createElement("div")
//     //cambio colore allo square al click
//     square.addEventListener('click', function () { 
//         this.classList.add("blu")
//       })
//      // do ai div la classe square
//     square.classList.add("square")
//     square.style.width = `calc(100% / ${col})`;
//     square.style.height = `calc(100% / ${row})`;
//     square.append(i)
//     containerGrid.append(square)

buttonPlay.addEventListener('click', function () {
    containerGrid.innerHTML = ""
    const level = selectLevel.value
        if (level == "easy") {
        numberSquare = 100;
        row = 10;
        col = 10;
    } else if(level == "medium") {
        numberSquare = 81;
        row = 9;
        col = 9;
    
    } else if(level == "hard") {
        numberSquare = 49;
        row = 7;
        col = 7;
      
    }

    for (let i = 1; i <= numberSquare; i++) {
        const square = document.createElement('div')
        //cambio colore al click
        square.addEventListener('click',function () {
            this.classList.add('blu')
        })
        //do al div la classe square
        square.classList.add('square')
        square.style.width = `calc(100% / ${col})`;
        square.style.height = `calc(100% / ${row})`;
        square.append(i)
        containerGrid.append(square)
        
    }


    
    
    
})


    







