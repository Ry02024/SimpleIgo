document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');

    // 盤面を初期化
    for (let i = 0; i < 19 * 19; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('click', () => placeStone(cell));
        board.appendChild(cell);
    }
});

function placeStone(cell) {
    // ここに石を配置するロジックを実装
    if (!cell.classList.contains('stone')) {
        cell.classList.add('stone', 'black'); // 仮に黒石を配置
    }
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

function placeStone(cell) {
    if (cell.classList.contains('stone')) {
        return; // 石が既にある場合は何もしない
    }

    // 石を作成
    const stone = document.createElement('div');
    stone.classList.add('stone');
    if (currentPlayer === 'black') {
        currentPlayer = 'white';
    } else {
        stone.classList.add('white');
        currentPlayer = 'black';
    }
    
    cell.appendChild(stone);
}
