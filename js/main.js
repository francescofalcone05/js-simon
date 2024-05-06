const start = document.getElementById('btn')
const contenitoreLista = document.getElementById('lista')
let randomNumbers = [];
let userNumbers = [];
let winnerNumbers = [];



start.addEventListener('click', function () {

    userNumbers = [];
    winnerNumbers = [];
    randomNumbers = [];
    contenitoreLista.innerHTML = '';

    //creo array con 5 numeri random e stampo in pagina
    createArrayRandom();
    //svuoto la pagina, chiedo i 5 numeri all'utente, li confronto e stampo quelli azzeccati
    setTimeout(emptyContainer, 10 * 1000);

});





/**************FUNCTIONS****************/


//creo funzione per creare l'array dei numeri random, e stamparli in pagina.
function createArrayRandom() {

    while (randomNumbers.length < 5) {

        let number = getRandomNumber(1, 99);

        if (!randomNumbers.includes(number)) {
            randomNumbers.push(number)
            contenitoreLista.innerHTML += `<li>${number}</li>`
        } else {
            //niente
        }

    }
};


//creo una funzione per generare un numero random da min a max.
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


//creo una funzione per svuotare l'innerHtml del contenitore della lista numeri.
function emptyContainer() {

    contenitoreLista.innerHTML = '';

    setTimeout(askFiveNumber, 1 * 1000);



}


//creo una funzione per chiedere all'utente e salvare 5 numeri.
function askFiveNumber() {
    while (userNumbers.length < 5) {

        //per 5 volte chiedo di inserie un numero
        numero = parseInt(prompt('Inserisci ad uno alla volta i numeri visti prima'))

        //inserisco ogni numero in array se...
        if ((!userNumbers.includes(numero)) && (!numero == 0)) {
            userNumbers.push(numero)
            if (randomNumbers.includes(numero)) {
                winnerNumbers.push(numero)
            }

        } else {
            alert('Numero gia` inserito o non valido')
        }
    }

    printWinnerNumbers();

}


//creo una funzione che stampa i numeri vincenti in pagina
function printWinnerNumbers() {

    contenitoreLista.innerHTML += `<li>I numeri vincenti sono ${winnerNumbers.length}:</li>`

    for (let x = 0; x < winnerNumbers.length; x++) {

        vincente = winnerNumbers[x]
        contenitoreLista.innerHTML += `<li>${vincente}</li>`

    }

}