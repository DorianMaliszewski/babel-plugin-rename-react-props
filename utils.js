const transformCamelToKebab = str => {
   return str.split('').map((letter, idx) => {
     return letter.toUpperCase() === letter
      ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
      : letter;
   }).join('');
}

module.exports = {
    transformCamelToKebab
}