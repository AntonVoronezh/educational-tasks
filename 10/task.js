const sumSquareDifference = (n) => {
  let kvSum = 0;
  let sumKv = 0; 
    for (let i = 1; i <= n; i += 1) {
      sumKv += Math.pow(i, 2);
      kvSum += i; 
      //console.log(sumKv);
    }
  return(Math.pow(kvSum, 2) - sumKv); 
}
export default sumSquareDifference;
