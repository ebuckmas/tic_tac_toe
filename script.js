
const gameBoard = (() => {
    
   

    //public

    const title = document.querySelector('.turnTitle');

    const board = Array.from(' '.repeat(9));

    const restartBoard = () => {
        board.fill(' ');
        title.innerText = 'Player X Turn';
        
    }

    const getBox = Array.from(document.getElementsByClassName('box'));
    
    const fill = () => {
        getBox.forEach((box, index) => box.innerText = board[index]);
    }

    let numClicks = 0; 

    const turnTitle = () => {
        //console.log(gameState);
        if (gameBoard.numClicks !== 0 && gameBoard.numClicks % 2 !== 0) {
            title.innerText = 'Player O Turn';
        }
        else {
            title.innerText = 'Player X Turn';
        }
    };
    
    return {title, board, restartBoard, getBox, fill, numClicks, turnTitle}
            
})();



const gamePlay = (() => {

    //import

    const title = gameBoard.title;
    const getBox = gameBoard.getBox;
    const board = gameBoard.board;
    const restartBoard = gameBoard.restartBoard;
    const fill = gameBoard.fill;
    //let numClicks = gameBoard.numClicks;
    const turnTitle = gameBoard.turnTitle;
        
    //private

    let lastSelection = '';

    let gameState = '';

    const XorO = () => {
        
        if (lastSelection === '') {
            lastSelection = 'X';
            return 'X';
        }
        if (lastSelection === 'X') {
            lastSelection = 'O';
            return 'O';
        } 
        if (lastSelection === 'O') {
            lastSelection = 'X';
            return 'X';
        }
    };

    const checkForWinOrTie = () => {

        if (board[0] === 'X' && board[1] === 'X' && board[2] === 'X') {
            console.log('win');
            gameState = 'Player X Wins!';
        }
        else if (board[2] === 'X' && board[5] === 'X' && board[8] === 'X') {
            console.log('win');
            gameState = 'Player X Wins!';
        }
        else if (board[6] === 'X' && board[7] === 'X' && board[8] === 'X') {
            console.log('win');
            gameState = 'Player X Wins!';
        }
        else if (board[0] === 'X' && board[3] === 'X' && board[6] === 'X') {
            console.log('win');
            gameState = 'Player X Wins!';
        }
        else if (board[3] === 'X' && board[4] === 'X' && board[5] === 'X') {
            console.log('win');
            gameState = 'Player X Wins!';
        }
        else if (board[1] === 'X' && board[4] === 'X' && board[7] === 'X') {
            console.log('win');
            gameState = 'Player X Wins!';
        }
        else if (board[0] === 'X' && board[4] === 'X' && board[8] === 'X') {
            console.log('win');
            gameState = 'Player X Wins!';
        }
        else if (board[2] === 'X' && board[4] === 'X' && board[6] === 'X') {
            console.log('win');
            gameState = 'Player X Wins!';
        }

        else if (board[0] === 'O' && board[1] === 'O' && board[2] === 'O') {
            console.log('win');
            gameState = 'Player O Wins!';
        }
        else if (board[2] === 'O' && board[5] === 'O' && board[8] === 'O') {
            console.log('win');
            gameState = 'Player O Wins!';
        }
        else if (board[6] === 'O' && board[7] === 'O' && board[8] === 'O') {
            console.log('win');
            gameState = 'Player O Wins!';
        }
        else if (board[0] === 'O' && board[3] === 'O' && board[6] === 'O') {
            console.log('win');
            gameState = 'Player O Wins!';
        }
        else if (board[3] === 'O' && board[4] === 'O' && board[5] === 'O') {
            console.log('win');
            gameState = 'Player O Wins!';
        }
        else if (board[1] === 'O' && board[4] === 'O' && board[7] === 'O') {
            console.log('win');
            gameState = 'Player O Wins!';
        }
        else if (board[0] === 'O' && board[4] === 'O' && board[8] === 'O') {
            console.log('win');
            gameState = 'Player O Wins!';
        }
        else if (board[2] === 'O' && board[4] === 'O' && board[6] === 'O') {
            console.log('win');
            gameState = 'Player O Wins!';
        }
        
        else if (board.every(elem => elem === 'X' || elem === 'O')) {
            console.log('tie');
        }
        
    }

    const playGame = (clickedBox) => {
        if (gameState !== '') {
            return;
        }
        if (board[clickedBox] === ' ') {
            board[clickedBox] = XorO();
        } else {
            console.log('dupe');
        }
    }

    

    const handleClick = (() => {
        getBox.forEach((box) => {        
            box.addEventListener('click', (e) => {
                if (box.innerText === 'X' || box.innerText === 'O') {
                    return;
                }
                clickedBox = e.target.id;
                playGame(clickedBox);
                gameBoard.numClicks++;
                console.log(gameBoard.numClicks)
                turnTitle();
                fill();
                checkForWinOrTie();
                //console.log(gameState);
                if (gameState !== '') {
                    title.innerText = gameState;
                }
                // gameBoard.numClicks++;
                // console.log(gameBoard.numClicks);
            }); 
        });            
    }) ();

    const handleRestart = (() => {
        const restartButton = document.querySelector('.restart');
        restartButton.addEventListener('click', () => {
            restartBoard();
            lastSelection = '';
            gameState = '';
            fill();
            gameBoard.numClicks = 0;
        })
    }) ();

//return {gameState};

}) ();



// const players = (() => {

//     //import

//     //const gameState = gamePlay.gameState;
//     const getBox = gameBoard.getBox;
//     const title = gameBoard.title;
    
    //private
    
    // let numClicks = 0;
    
    // const turnTitle = () => {
    //     //console.log(gameState);
    //     if (numClicks !== 0 && numClicks % 2 !== 0) {
    //         title.innerText = 'Player O Turn';
    //     }
    //     else {
    //         title.innerText = 'Player X Turn';
    //     }
    // };
    
    
    // const countClicks = (() => {
    //     getBox.forEach((box) => {        
    //         box.addEventListener('click', () => {
                
    //             if (title.innerText === 'Player X Wins!' || title.innerText === 'Player O Wins!') {
    //                 return;
    //             }
    //             //console.log(gamePlay.gameState);
    //             numClicks++;
    //             turnTitle();
    //         });
    //     });
    // }) ();


    










