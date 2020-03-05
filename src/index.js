
exports.min = function min (array) {
    if(!array || !array.length) return 0;
    return array.sort(function (a, b) {
        return a - b;
    })[0];
}

exports.max = function max (array) {
    if(!array || !array.length) return 0;
    return array.sort(function (a, b) {
        return b - a;
    })[0];
}

exports.avg = function avg (array) {
    if(!array || !array.length) return 0;
  return (array.reduce(function (a, b) {
        return (a + b)
  })) / array.length;
}
