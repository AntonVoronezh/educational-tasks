import { length, toUpperCase } from './strings';

const bigLettersCount = (str) => {
  // BEGIN (write your solution here)
  let count = 0;
  let i = 0;

  while (length(str) - 1 >= i) {
    if (str[i] === toUpperCase(str[i]) || str[i] === ' ') {
      count += 1;
    }
    i += 1;
    console.log(str[i]);
  }
  return count;

  // END
};

const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);

  // BEGIN (write your solution here)
  if (firstCount > secondCount) { return 1; }
  if (secondCount > firstCount) { return -1; }
  return 0;
  // END
};

export const greaterThan = (first, second) => compare(first, second) === 1;

export const lessThan = (first, second) => compare(first, second) === -1;

export const isEqual = (first, second) => compare(first, second) === 0;