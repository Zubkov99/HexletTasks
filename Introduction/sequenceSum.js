function sequenceSum(begin, end) {

    if (begin == end) {
        return begin;

      } else if (begin > end) {
        return NaN;

      } else {
        return begin + sequenceSum(begin + 1, end);
    }
};

console.log(sequenceSum(4,30));