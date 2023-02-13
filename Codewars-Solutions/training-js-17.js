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