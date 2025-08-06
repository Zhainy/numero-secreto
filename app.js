let secretNumber = 0;
let attemps = 0;
let drawnNumbers = [];
let maxAttempts = 10;

function assignTextToElement(element, text) {
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
    return;
}
function verifyAttempt() {
    let userNumber = parseInt(document.getElementById('userNumberInput').value);

    if(userNumber === secretNumber){
        assignTextToElement('p', `Felicidades, has acertado el número secreto en ${attemps} ${(attemps===1)?'intento':'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no ha acertado
        if(userNumber > secretNumber) {
            assignTextToElement('p', `El número secreto es menor que ${userNumber}`);
        } else {
            assignTextToElement('p', `El número secreto es mayor que ${userNumber}`);
        }
        attemps++;
        resetUserNumber();
    }
    return;
}

function resetUserNumber(){
    document.querySelector('#userNumberInput').value = '';
    return;
}

function generateSecretNumber() {
    let generateNumber =  Math.floor(Math.random() * maxAttempts) + 1;

    console.log(generateNumber);
    console.log(drawnNumbers);
    //si ya sorteamos todos los números posibles
    if(drawnNumbers.length == maxAttempts) {
        assignTextToElement('p', 'Ya se sortearon todos los números posibles');

    } else {
    
        //verificar que el número no se haya generado antes
        if(drawnNumbers.includes(generateNumber)) {
        return generateSecretNumber();
        } else {
        drawnNumbers.push(generateNumber);
        return generateNumber;
        }
    }
}

function initialConditions() {
    assignTextToElement('h1', 'Juego del número secreto');
    assignTextToElement('p', `indica un número entre 1 al ${maxAttempts}`);
    secretNumber = generateSecretNumber();
    attemps = 1;
    console.log(secretNumber);
}

function resetGame(){
    //limpiar el input
    resetUserNumber();
    //mensajes en pantalla, resetea el numero secreto y los intentos
    initialConditions();
    //desactivar el botón de reiniciar juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}
initialConditions();

