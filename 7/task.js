import { length, toUpperCase } from './strings';

const big = (tekst) => {
  let i = 1;
  let result = toUpperCase(tekst[0]);

  while (length(tekst) - 1 >= i) {
    if (tekst[i - 1] === ' ') {
      result += toUpperCase(tekst[i]);
    } else { result += tekst[i]; }
    i += 1;
    console.log(result);
  }
  return result;
};

export default big;
