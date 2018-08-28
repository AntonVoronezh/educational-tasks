const smallestDivisor = (num) => {
  if (num === 1) {
    return num;
  } if (num < 1) {
    return NaN;
  }
  let counter = 2;
  while (counter <= num) {
    if (num % counter === 0) {
      return counter;
    }
    counter += 1;
  }
  return counter;
};
