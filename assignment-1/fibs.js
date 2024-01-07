function fibs(number) {
  array = [];
  if (number === 0) {
    array.push(0);
    return array;
  } else if (number === 1) {
    array.push(0);
    array.push(1);
    return array;
  } else {
    array.push(0);
    array.push(1);
    for (let i = 0; i < number - 2; i++) {
      array.push(array[i] + array[i + 1]);
    }
    return array;
  }
}

console.log(fibs(8));
