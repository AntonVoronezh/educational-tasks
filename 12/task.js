import { length, substr } from './strings';

const sum = (str) => {
  let result = 0;
  for (let i = 0; i < length(str); i += 1) {
    result += Number(str[i]);
  }
  return result;
};

const isHappyTicket = (n) => {
  if (typeof (n) === 'number') { n = String(n); }
  const subLevo = substr(n, 0, 3);
  const subPravo = substr(n, 3, 3);
  if (sum(subLevo) === sum(subPravo)) {
    return true;
  }
  return false;
};

export default isHappyTicket;
