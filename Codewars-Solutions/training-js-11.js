// First attempt 
function grabDoll(dolls) {
  var bag = [];
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

// Final solution
function grabDoll(dolls){
  var bag=[];
  let count = 0;
  for(let i = 0; i < dolls.length; i++){
    if (dolls[i] === "Hello Kitty" && count < 3){
      bag.push(dolls[i]);
      count+=1
    }
    else if (dolls[i] === "Barbie doll" && count < 3){
      bag.push(dolls[i]);
      count+=1
    }
    else if (dolls[i] !== "Hello Kitty" || dolls[i] !== "Barbie doll"){
      continue
    }
    else{
      break 
    }
  }
  return bag;
}