document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');

    // 盤面にセルを追加
    for (let i = 0; i < 19 * 19; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        board.appendChild(cell);

        // クリックイベントで石を配置
        cell.addEventListener('click', function() {
            // 石が既にある場合は何もしない
            if (!cell.querySelector('.stone')) {
                const stone = document.createElement('div');
                stone.classList.add('stone', currentPlayer);
                cell.appendChild(stone);
                // プレイヤーを交代
                currentPlayer = (currentPlayer === 'black') ? 'white' : 'black';
            }
        });
    }
});

let currentPlayer = 'black'; // 最初のプレイヤーを指定

function placeStone(cell) {
    if (cell.querySelector('.stone')) {
        return; // 石が既にある場合は何もしない
    }

    const stone = document.createElement('div');
    stone.className = 'stone';
    if (currentPlayer === 'black') {
        currentPlayer = 'white';
    } else {
        stone.classList.add('white');
        currentPlayer = 'black';
    }
    cell.appendChild(stone);
}

function handleInteraction(event) {
    event.preventDefault(); // デフォルトのイベントを防ぐ
    const cell = event.target;
    placeStone(cell);
}
