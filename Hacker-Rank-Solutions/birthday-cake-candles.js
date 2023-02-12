function birthdayCakeCandles(candles) {
  // Write your code here
  let sortedCandles = candles.sort(function(a, b){return b-a});
  let numCandles = 1;
  for (let i = 0; i < candles.length; i++){
      if(sortedCandles[i] == sortedCandles[(i+1)]){
          numCandles += 1;
  }
  }
  return numCandles;
}