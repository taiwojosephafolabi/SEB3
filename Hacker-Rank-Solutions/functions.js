function factorial(integer) {
  if (integer === 0 || integer === 1) {
    return 1;
  }
  for (let num = integer - 1; num >= 1; num--) {
    integer *= num;
  }
  return integer;
};
