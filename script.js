document.addEventListener('DOMContentLoaded', function() {
    const cells = document.querySelectorAll('.cell');
    const resetButton = document.getElementById('reset-btn');
    const board = document.getElementById('board');

    let currentPlayer = 'Tamas';
    let gameOver = false;
    let moves = 0;
    let boardState = ['', '', '', '', '', '', '', '', ''];

    function checkWinner() {
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let condition of winConditions) {
            const [a, b, c] = condition;
            if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
                return true;
            }
        }

        if (moves === 9) {
            return true; // Draw
        }

        return false;
    }

    function handleClick(event) {
        const cellIndex = event.target.id.split('-')[1];
        if (boardState[cellIndex] || gameOver) return;

        boardState[cellIndex] = currentPlayer;
        event.target.textContent = currentPlayer;
        moves++;

        if (checkWinner()) {
            gameOver = true;
            setTimeout(() => {
                alert(`Game over! Player ${currentPlayer} wins!`);
            }, 100);
            return;
        }

        currentPlayer = currentPlayer === 'Tamas' ? 'Radu' : 'Tamas';
    }

    function resetGame() {
        boardState = ['', '', '', '', '', '', '', '', ''];
        currentPlayer = 'Tamas';
        gameOver = false;
        moves = 0;

        cells.forEach(cell => {
            cell.textContent = '';
        });
    }

    cells.forEach(cell => {
        cell.addEventListener('click', handleClick);
    });

    resetButton.addEventListener('click', resetGame);
});
function handleClick(event) {
    const cellIndex = event.target.id.split('-')[1];
    if (boardState[cellIndex] || gameOver) return;

    boardState[cellIndex] = currentPlayer;
    event.target.textContent = currentPlayer;
    moves++;

    const winner = checkWinner();
    if (winner) {
        gameOver = true;
        if (winner === 'draw') {
            setTimeout(() => {
                alert("It's a draw!");
            }, 100);
        } else {
            const winningPlayer = winner === 'Tamas' ? 'Tamas' : 'Radu'; // If 'Radu' wins, we announce 'Tamas' wins
            setTimeout(() => {
                alert(`Game over! Player ${winningPlayer} wins!`);
            }, 100);
        }
        return;
    }

    currentPlayer = currentPlayer === 'Tamas' ? 'Radu' : 'Tamas';
}
function handleClick(event) {
    const cellIndex = event.target.id.split('-')[1];
    if (boardState[cellIndex] || gameOver) return;

    boardState[cellIndex] = currentPlayer;
    event.target.textContent = currentPlayer;
    moves++;

    const winner = checkWinner();
    if (winner) {
        gameOver = true;
        if (winner === 'draw') {
            setTimeout(() => {
                alert("It's a draw!");
            }, 100);
        } else {
            const winningPlayer = winner === 'Tamas' ? 'Tamas' : 'Radu'; // If 'O' wins, we announce 'X' wins
            setTimeout(() => {
                alert(`Game over! Player ${winningPlayer} wins!`)
            }, 100);
        }
        return;
    }

    currentPlayer = currentPlayer === 'Tamas' ? 'Radu' : 'Tamas';
}
function handleClick(event) {
    const cellIndex = event.target.id.split('-')[1];
    if (boardState[cellIndex] || gameOver) return;

    boardState[cellIndex] = currentPlayer;
    event.target.textContent = currentPlayer;
    moves++;

    const winner = checkWinner();
    if (winner) {
        gameOver = true;
        if (winner === 'draw') {
            setTimeout(() => {
                alert("It's a draw!");
            }, 100);
        } else {
            const winningPlayer = winner === 'X' ? 'X' : 'O';
            const winWindow = window.open('', '_blank', 'width=200,height=100');
            winWindow.document.write(`<p>Player ${winningPlayer} wins!</p>`);
        }
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}
