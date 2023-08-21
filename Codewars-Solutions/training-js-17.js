// First attempt
function firstToLast(str,c){
  let first = str.indexOf("c");
  let search = str.search("c")
  let second = str.indexOf("c",first);
  let third = str.indexOf("c", Number.second);
  console.log(first, second, third)
  console.log(search)
  return Math.abs(second - first)
  
}

// Second attempt
function firstToLast(str,c){
  if ((str.search(c)) > 0) {
    let first = str.indexOf(c);
    let second = str.lastIndexOf(c);
    return second - first
    } else if (str.search(c) = 0) {
      return 0
    } else if (str.search(c) < 0) {
      return (-1)
    }
}

// Final solution
function firstToLast(str,c){
  if (str.search(c) < 0) {
    console.log(-1)
  } else {
    console.log(str.lastIndexOf(c) - str.indexOf(c))
  }
}

// Test
str = "ababc"
c = "a"

firstToLast(str, c)