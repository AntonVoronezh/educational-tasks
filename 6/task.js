import { length } from './strings'; // eslint-disable-line

const summa = (num) => {
  const str = String(num);
  let result = 0;
  for (let i = 0; i <= length(str) - 1; i += 1) {
    result += Number(str[i]);
    console.log(result);
  }
  if (result > 9) { return summa(result); }
  return result;
};

const addDigits = (num) => {
  if (num < 10) { return num; }


  return summa(num);
};

export default addDigits;
