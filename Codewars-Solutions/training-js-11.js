// First attempt 
function grabDoll(dolls) {
  var bag = [];
  //coding here
  let count = 0;
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] == "Hello Kitty" || dolls[i] == "Barbie doll") {
      bag.push(dolls[i]);
      count++;
    } else if (count++) {
      break;
    } else {
      continue;
    }
  }
  return bag;
}
