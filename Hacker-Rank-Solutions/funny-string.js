// First attempt
function funnyString(s) {
  let r = s.split("").reverse().join("");
  for (let i = 0; i < s.length; i++) {
    let sValueDif = s.charCodeAt(i) - s.charCodeAt(i + 1);
    let rValueDif = r.charCodeAt(i) - r.charCodeAt(i + 1);
    if (sValueDif === rValueDif) {
      return "Funny";
    } else {
      return "Not Funny";
    }
  }
}
