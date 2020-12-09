//TEST MESSAGE
console.log(`It's working`);

//
const boardValues = [];

const play = (clickedValue) => {
    //Get the ID of the span element for player
    const playerSpan = document.getElementById('player');
    //Get Box ID that was clicked
    const boxClicked = document.getElementById(clickedValue);
    if (boxClicked.innerText === '') {
        if (playerSpan.innerText === `X`) {
            playerSpan.innerText = `O`;
            boxClicked.innerText = `X`;
            boardValues[clickedValue] = `X`;;
        } else {
            playerSpan.innerText = `X`;
            boxClicked.innerText = `O`;
            boardValues[clickedValue] = `O`;;
        }
    } else {
        alert(`Player ${playerSpan.innerText} nice Try`);
    }

    const topLeft = boardValues[0];
    const topMiddle = boardValues[1];
    const topRight = boardValues[2];
    const middleLeft = boardValues[3];
    const middleMiddle = boardValues[4];
    const middleRight = boardValues[5];
    const bottomLeft = boardValues[6];
    const bottomMiddle = boardValues[7];
    const bottomRight = boardValues[8];

    //CHECK FOR WINNER -Horizontal
    if (topRight !== undefined && topRight === topMiddle && topRight === topLeft) {
        window.alert(`${topRight} wins the game!`);
        resetGame();
    }
    if (middleRight !== undefined && middleRight === middleMiddle && middleRight === middleLeft) {
        window.alert(`${middleLeft} wins the game!`);
        resetGame();
    }
    if (bottomLeft !== undefined && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
        window.alert(`${bottomLeft} wins the game!`);
        resetGame();
    }
    //Vertical
    if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
        window.alert(`${topLeft} wins the game!`);
        resetGame();
    }
    if (topMiddle !== undefined && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
        window.alert(`${topMiddle} wins the game!`);
        resetGame();
    }
    if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
        window.alert(`${topRight} wins the game!`);
        resetGame();
    }
    //Diagnal
    if (topLeft !== undefined && topLeft === middleMiddle && topLeft === bottomRight) {
        window.alert(`${topLeft} wins the game!`);
        resetGame();
    }
    if (topRight !== undefined && topRight === middleMiddle && topRight === bottomLeft) {
        window.alert(`${topRight} wins the game!`);
        resetGame();
    }
    //Check of board is empty
    let catsGame = true;
    for (let i = 0; i < 9; i++) {
        if (boardValues[i] === undefined) {
            catsGame = false;
        }
    }
    if (catsGame) {
        window.alert(`Cats Game, no Winner`);
    }
}


//Rest board after game ends
const resetGame = () => {
    const boxValues = document.querySelectorAll('td');
    for (let i = 0; i < boxValues.length; i++) {
        boxValues[i].innerHTML = '';
    }
}

