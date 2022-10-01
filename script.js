
const gameBoard = (() => {
    
    //public

    const board = Array.from(' '.repeat(9));
    
    const getBox = Array.from(document.getElementsByClassName('box'));
    
    const fill = () => {
        getBox.forEach((box, index) => box.innerText = board[index]);
    }
    
    return {board, getBox, fill}
            
})();
    
    
    


const gamePlay = (() => {

    //import

    const getBox = gameBoard.getBox;
    const board = gameBoard.board;
    const fill = gameBoard.fill;
    
    
    //private

    let lastSelection = '';
    
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
        }
        else if (board[2] === 'X' && board[5] === 'X' && board[8] === 'X') {
            console.log('win');
        }
        else if (board[6] === 'X' && board[7] === 'X' && board[8] === 'X') {
            console.log('win');
        }
        else if (board[0] === 'X' && board[3] === 'X' && board[6] === 'X') {
            console.log('win');
        }
        else if (board[3] === 'X' && board[4] === 'X' && board[5] === 'X') {
            console.log('win');
        }
        else if (board[1] === 'X' && board[4] === 'X' && board[7] === 'X') {
            console.log('win');
        }
        else if (board[0] === 'X' && board[4] === 'X' && board[8] === 'X') {
            console.log('win');
        }
        else if (board[2] === 'X' && board[4] === 'X' && board[6] === 'X') {
            console.log('win');
        }

        else if (board[0] === 'O' && board[1] === 'O' && board[2] === 'O') {
            console.log('win');
        }
        else if (board[2] === 'O' && board[5] === 'O' && board[8] === 'O') {
            console.log('win');
        }
        else if (board[6] === 'O' && board[7] === 'O' && board[8] === 'O') {
            console.log('win');
        }
        else if (board[0] === 'O' && board[3] === 'O' && board[6] === 'O') {
            console.log('win');
        }
        else if (board[3] === 'O' && board[4] === 'O' && board[5] === 'O') {
            console.log('win');
        }
        else if (board[1] === 'O' && board[4] === 'O' && board[7] === 'O') {
            console.log('win');
        }
        else if (board[0] === 'O' && board[4] === 'O' && board[8] === 'O') {
            console.log('win');
        }
        else if (board[2] === 'O' && board[4] === 'O' && board[6] === 'O') {
            console.log('win');
        }
        
        else if (board.every(elem => elem === 'X' || elem === 'O')) {
            console.log('tie')
        }
        
    }

    const handleClick = (() => {
        let clickedBox = '';
        getBox.forEach(box => {        
            box.addEventListener('click', (e) => {
                if (board[e.target.id] === ' ') {
                    board[e.target.id] = XorO();
                    fill();
                    checkForWinOrTie();
                } else {
                    console.log('dupe');
                }
            });            
        });
    return clickedBox;
    }) ();

}) ();








