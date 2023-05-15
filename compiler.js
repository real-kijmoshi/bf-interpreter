const rs = require("readline-sync")

module.exports = (characters) => {
    const cells = []

    let curChar = -1
    let cursor = 0
    
    for (let index = 0; index < 30*1000; index++) {
        cells.push(0)
    }
    
    
    let loopStack = [] // Stack to keep track of loop points
    
    while(curChar != characters.length){
        curChar++
        switch (characters[curChar]) {
            case '>':
                cursor++
                break;
            case '<':
                cursor--
                break;
            case '+':
                cells[cursor]++
                break
            case "-":
                cells[cursor]--
                break
            case ".":
                process.stdout.write(String.fromCharCode(cells[cursor]))
                break
            case ",":
                cells[cursor] = rs.question().charCodeAt(0)
                break
            case "[":
                loopStack.push(curChar) // Push current character index to the loop stack
                break
            case "]":
                if (cells[cursor] != 0) {
                    curChar = loopStack[loopStack.length - 1] // Jump to the most recent loop start
                } else {
                    loopStack.pop() // If we're exiting the loop, remove the loop start from the stack
                }
                break
            default:
                break;
    
            }
    }
}
