let currentPlayer = 'X';
        let board = ['', '', '', '', '', '', '', '', ''];
        let gameActive = true;

        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        const boardElement = document.getElementById('board');
        const messageElement = document.getElementById('message');

        function makeMove(cellIndex) {
            if (board[cellIndex] === '' && gameActive) {
                board[cellIndex] = currentPlayer;
                boardElement.children[cellIndex].textContent = currentPlayer;
                checkResult();
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }

        function checkResult() {
            for (const combo of winningCombos) {
                const [a, b, c] = combo;
                if (board[a] && board[a] === board[b] && board[b] === board[c]) {
                    messageElement.textContent = `${currentPlayer} wins!`;
                    gameActive = false;
                }
            }
            if (!board.includes('') && gameActive) {
                messageElement.textContent = "It's a draw!";
                gameActive = false;
            }
        }

        function resetBoard() {
            board = ['', '', '', '', '', '', '', '', ''];
            boardElement.querySelectorAll('.cell').forEach(cell => {
                cell.textContent = '';
            });
            messageElement.textContent = '';
            gameActive = true;
            currentPlayer = 'X';
        }