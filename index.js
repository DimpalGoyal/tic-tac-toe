let currentPlayer = "X"
let array = Array(9).fill(null)

function handleWinner() {
    // All possible winning combinations (rows, columns, diagonals)
    const winningCombinations = [
        [0, 1, 2], // top row
        [3, 4, 5], // middle row
        [6, 7, 8], // bottom row
        [0, 3, 6], // left column
        [1, 4, 7], // middle column
        [2, 5, 8], // right column
        [0, 4, 8], // diagonal top-left to bottom-right
        [2, 4, 6]  // diagonal top-right to bottom-left
    ];

    // Check each winning combination
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (array[a] !== null && array[a] === array[b] && array[b] === array[c]) {
            document.write(`winner is ${array[a]}`);
            return;
        }
    }

    // Check for draw (all cells filled, no winner)
    if (!array.some((e) => e === null)) {
        document.write(`draw`);
        return;
    }
}

function handleClick(el) {
    const id = Number(el.id);
    if (array[id] != null) {
        return;
    }
    array[id] = currentPlayer;
    el.innerText = currentPlayer;
    handleWinner()
    currentPlayer = currentPlayer === "X" ? "O" : "X"
    console.log(id);

}