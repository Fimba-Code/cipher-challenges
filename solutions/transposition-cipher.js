
function genInitalMatrix(text, rows, cols) {
    // defining rows
    let arr = new Array(rows);

    // set 2d arr cols
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(cols);
    }

    let stepper = 0
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            arr[i][j] = text[stepper];
            if (text[stepper] === undefined) arr[i][j] = ' ';
            stepper++
        }

    }

    return arr;
}


function genTransposedStr(matrix, rows, cols) {
    let text = ''

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            text += matrix[j][i]
        }
    }
    return text
}


function transposeText(orginalText, cypher) {
    const rows = (Math.ceil(orginalText.length / cypher))

    const originalMatrix = genInitalMatrix(orginalText, rows, cypher)

    // Todo build transposed matrix

    const cipher = genTransposedStr(originalMatrix, rows, cypher)

    return cipher
}


transposeText("Sou um guardador de rebanhos.", 4)

