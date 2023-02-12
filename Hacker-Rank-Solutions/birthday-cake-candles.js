// 1st attempt
function birthdayCakeCandles(candles) {
  let sortedCandles = candles.sort(function(a, b){return b-a});
  let numCandles = 1;
  for (let i = 0; i < candles.length; i++){
      if(sortedCandles[i] == sortedCandles[(i+1)]){
          numCandles += 1;
  }
  }
  return numCandles;
}
// Final solution
function birthdayCakeCandles(candles) {
  let sortedCandles = candles.sort(function(a, b){return b-a});
  let numCandles = 1;
  let i = 0;
  while (i < candles.length) {
      if(candles[i] === candles[i+1]){
          numCandles++;
          i++
      } else {
          break
      }
  }
  return numCandles;
}