module.exports = function reverse(n) {
    let object = Math.abs(n);
    let numb = String(object);
    return numb.split('').reverse().join('');
}
