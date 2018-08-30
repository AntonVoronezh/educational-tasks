const isPrime = (num) => {
  for (let i = 2; i <= num - 1; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  if (num <= 1) {
    return false;
  }
  return true;
};
