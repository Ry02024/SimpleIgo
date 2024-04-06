document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    let currentPlayer = 'black'; // 'black' or 'white'

    for (let i = 0; i < 19 * 19; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        board.appendChild(cell);

        cell.addEventListener('click', () => {
            if (!cell.querySelector('.stone')) {
                const stone = document.createElement('div');
                stone.classList.add('stone', currentPlayer);
                cell.appendChild(stone);
                currentPlayer = currentPlayer === 'black' ? 'white' : 'black';
            }
        });
    }
});
