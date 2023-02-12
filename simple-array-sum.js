function simpleArraySum(ar) {
  let sum =0;
  for(let i=0; i<ar.length; i++) {
      sum += ar[i];
  }
  return sum;
};


let ar = [1,5,7,3,8,2,9];
simpleArraySum(ar)