function fibsRec(number) {
  array = [0, 1];
  if (number === 1) {
    return [0];
  } else if (number === 2) {
    return array;
  } else {
    fibsRec(number - 1);
    let index = array.length - 2;
    indexIncrementedOnce = index + 1;
    let something = array[index] + array[indexIncrementedOnce];
    array.push(something);
    return array;
  }
}

console.log(fibsRec(10));
