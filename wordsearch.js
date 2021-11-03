const transpose = require('../../d2/maxtrix_transpositon');

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word))
      return true;
  }

  let verticalJoin = transpose(letters);
  verticalJoin = verticalJoin.map(ls => ls.join(''));
  for (let l of verticalJoin) {
    if (l.includes(word))
      return true;
  }
  return false;
};
module.exports = wordSearch;
