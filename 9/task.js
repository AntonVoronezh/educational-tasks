const fizzBuzz = (begin, end) => {
  for (let i = begin; i <= end; i += 1) {
      if (i%3 === 0 && i%5 !== 0) {
        console.log('Fizz');
      }else if (i%5 === 0 && i%3 !== 0) {
        console.log('Buzz');
      }else if (i%5 === 0 && i%3 === 0) {
        console.log('FizzBuzz');
      }else{
        console.log(i);
      }
  }
  
}
export default fizzBuzz;
