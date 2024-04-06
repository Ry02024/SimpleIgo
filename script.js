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
