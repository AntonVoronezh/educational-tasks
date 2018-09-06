import { length } from './strings';

// BEGIN (write your solution here)
const dnaToRna = (str) => {
  let out = '';

  for (let i = 0; i <= length(str); i += 1) {
    if (str[i] === 'G'){
      out += 'C';
    } else if (str[i] === 'C') {
      out += 'G';     
    } else if (str[i] === 'T') {
      out += 'A';   
    } else if (str[i] === 'A') {
      out += 'U';  
    } else if (str[i] === '') {
      out += ''; 
    } 
  console.log(out);
  } 
if(length(str) === length(out)){return out;}
else {return null;}
}

export default dnaToRna;

// END
