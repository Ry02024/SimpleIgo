document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const boardSize = 19; // 19x19の碁盤

    // 盤面に線を描画
    for (let i = 0; i < boardSize; i++) {
        const vLine = document.createElement('div');
        vLine.className = 'line vertical';
        vLine.style.left = `${(i / boardSize) * 100}%`;
        board.appendChild(vLine);

        const hLine = document.createElement('div');
        hLine.className = 'line horizontal';
        hLine.style.top = `${(i / boardSize) * 100}%`;
        board.appendChild(hLine);
    }

    // 石を置く場所を初期化
    for (let y = 0; y < boardSize; y++) {
        for (let x = 0; x < boardSize; x++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.style.left = `${(x / boardSize) * 100}%`;
            cell.style.top = `${(y / boardSize) * 100}%`;
            cell.addEventListener('click', () => placeStone(cell));
            board.appendChild(cell);
        }
    }
});

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

document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');

    // 盤面を初期化
    for (let i = 0; i < 19 * 19; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('click', handleInteraction); // タッチ操作にも対応する
        cell.addEventListener('touchstart', handleInteraction); // タッチ操作に対応
        board.appendChild(cell);
    }
});

function handleInteraction(event) {
    event.preventDefault(); // デフォルトのイベントを防ぐ
    const cell = event.target;
    placeStone(cell);
}

let currentStone = 'black'; // 最初の石を黒とする
