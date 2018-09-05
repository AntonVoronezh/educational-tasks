import { length, substr } from './strings';

// BEGIN (write your solution here)
const sum = (str) => {
  let result = 0;
  for (let i = 0; i < length(str); i += 1) {
    result += Number(str[i]);
  }
  return result;
};

const isHappyTicket = (n) => {
  if (typeof(n) === 'number'){n = String(n);}
      //console.log(typeof(n));
  let subLevo = substr(n, 0, 3);
  let subPravo = substr(n, 3, 3);
  //console.log(subLevo);
  //console.log(subPravo);
  if (sum(subLevo) === sum(subPravo)) {
    return true;
  } else {
    return false;
  }
}

export default isHappyTicket;
// END
