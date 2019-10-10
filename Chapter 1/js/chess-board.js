
size = 6;
chessBoard = "";
let characters = 0;
let lineCount = 0;

for (; characters < size; characters++) {
    for (let i = 0; i < size; i++) {
        lineCount++;
        if (chessBoard.length % 2 === 0) {
            chessBoard += "#";
        } else {
            chessBoard += " ";
        }
    }
    chessBoard += "\n";
}

console.log(chessBoard);