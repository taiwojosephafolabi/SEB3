"use strict";

let winter = ["December", "January", "February"];
let spring = ["March", "April", "May"];
let summer = ["June", "July", "August"];
let autumn = ["September", "October", "November"];

function contain() {
  let seasons = [winter, spring, summer, autumn];
  return seasons;
}

module.exports = { contain, winter, spring, summer, autumn };