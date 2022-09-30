
const gameBoard = (() => {
    //public

    //private
    const board = Array.from(' '.repeat(9));
    
    const getBox = Array.from(document.getElementsByClassName('box'));
    
    const fill = getBox.forEach((box, index) => box.innerText = board[index]);
    getBox.forEach(box => {        
        box.addEventListener('mouseover', (e) => {
            console.log(e.target.id); 
        });
    
        box.addEventListener('click', (e) => {
            console.log(e.target.id + 'hello')
        });
        
        
    });
        
})();








