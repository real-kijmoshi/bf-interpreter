const rs = require("readline-sync")

module.exports = (characters) => {
    const cells = []

    let curChar = -1
    let cursor = 0
    
    for (let index = 0; index < 30*1000; index++) {
        cells.push(0)
    }
    
    
    let loopPoint = null
    
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
                cells[cursor] = rs.question()
                break
            case "[":
                loopPoint = curChar
                break
            case "]":
                if (cells[cursor] != 0) curChar = loopPoint
                break
            default:
                break;
    
            }
    }
}
