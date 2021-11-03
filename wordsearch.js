const transpose = require('../../d2/maxtrix_transpositon');

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (let i = 0; i < horizontalJoin.length; i++) {
        l = horizontalJoin[i];
        if (l === word) 
        return true;
    }

    let verticalJoin = transpose(letters)
    verticalJoin = verticalJoin.map(ls => ls.join(''))
    for (let i = 0; i < verticalJoin.length; i++) {
        l = verticalJoin[i];
        if (l.includes(word)) 
        return true;
    }
    return false;
}

module.exports = wordSearch 