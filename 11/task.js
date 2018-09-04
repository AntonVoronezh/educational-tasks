const isPerfect = (n) => {
  let acc = 0;
  for (let i = 0; i <= n - 1; i += 1) {
    if (n % i === 0) {
      acc += i;
    }
  }
  if (n !== acc || n === 0) {
    return false;
  }
  return true;
};
