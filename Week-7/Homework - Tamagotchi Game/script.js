let stats = { hunger: 100, hygiene: 100, sleep: 100, fun: 100, social: 100 };

let petImg = document.getElementById("petImg");
let hungerBar = document.getElementById("hunger");
let hygieneBar = document.getElementById("hygiene");
let sleepBar = document.getElementById("sleep");
let funBar = document.getElementById("fun");
let socialBar = document.getElementById("social");

function Loop(time = 1) {
  let total =
    stats["hunger"] + stats.hygiene + stats.sleep + stats.fun + stats.social;

  if (
    stats.hunger <= 0 ||
    stats.hygiene <= 0 ||
    stats.sleep <= 0 ||
    stats.fun <= 0 ||
    stats.social <= 0
  ) {
    petImg.src = "img/tamagochi5.png";
  } else if (total > 400) {
    petImg.src = "img/tamagochi1.png";
  } else if (total > 300) {
    petImg.src = "img/tamagochi2.png";
  } else if (total > 200) {
    petImg.src = "img/tamagochi3.png";
  } else if (total > 100) {
    petImg.src = "img/tamagochi4.png";
  } else if (total > 50) {
    petImg.src = "img/tamagochi5.png";
    // button.style.color = "red";
  }

  //   if (hunger - parseInt(time) < 0) {
  //     hunger = 0;
  //     alert("Game Over!");
  //   } else {
  //     hunger = hunger - parseInt(time);
  //     hungerBar.value = hunger;
  //     hungerBar.style.setProperty(
  //       "accent-color",
  //       hunger > 50 ? "inherit" : "red"
  //     );
  //   }

  function checkValue(value, element, time) {
    if (stats[value] - parseInt(time) < 0) {
      stats[value] = 0;
      alert("Game Over!");
    } else {
      stats[value] = stats[value] - parseInt(time);
      element.value = stats[value];
      element.style.setProperty("accent-color", stats[value] > 50 ? "inherit" : "red");
    }
  }

  checkValue("hunger", hungerBar, time);

  // if (hygiene - parseInt(time) < 0) {
  //   hygiene = 0;
  //   alert("Game Over!");
  // } else {
  //   hygiene = hygiene - parseInt(time);
  //   hygieneBar.value = hygiene;
  //   hygieneBar.style.setProperty(
  //     "accent-color",
  //     hygiene > 50 ? "inherit" : "red"
  //   );
  // }

  checkValue("hygiene", hygieneBar, time);

  // if (sleep - parseInt(time) < 0) {
  //   sleep = 0;
  //   alert("Game Over!");
  // } else {
  //   sleep = sleep - parseInt(time);
  //   sleepBar.value = sleep;
  //   sleepBar.style.setProperty("accent-color", sleep > 50 ? "inherit" : "red");
  // }

  checkValue("sleep", sleepBar, time);

  // if (fun - parseInt(time) < 0) {
  //   fun = 0;
  //   alert("Game Over!");
  // } else {
  //   fun = fun - parseInt(time);
  //   funBar.value = fun;
  //   funBar.style.setProperty("accent-color", fun > 50 ? "inherit" : "red");
  // }

  checkValue("fun", funBar, time);

  // if (social - parseInt(time) < 0) {
  //   social = 0;
  //   alert("Game Over!");
  // } else {
  //   social = social - parseInt(time);
  //   socialBar.value = social;
  //   socialBar.style.setProperty(
  //     "accent-color",
  //     social > 50 ? "inherit" : "red"
  //   );
  // }

  checkValue("social", socialBar, time);

  hungerBar.innerHTML = stats["hunger"] + "%";
  hygieneBar.innerHTML = stats.hygiene + "%";
  sleepBar.innerHTML = stats.sleep + "%";
  funBar.innerHTML = stats.fun + "%";
  socialBar.innerHTML = stats.social + "%";
}

function Start() {
  setInterval(Loop, 1000);
}

function resetToMaxValue(value, element) {
  stats[value] = 100;
  element.innerHTML = stats[value] + "%";
  element.value = stats[value];
}

// function Eat() {
//   hunger = 100;
//   hungerBar.innerHTML = hunger + "%";
//   hungerBar.value = hunger;
// }

function Eat() {
  resetToMaxValue("hunger", hungerBar);
}

// function Bathe() {
//   hygiene = 100;
//   hygieneBar.innerHTML = hygiene + "%";
//   hygieneBar.value = hygiene;
// }
function Bathe() {
  resetToMaxValue("hygiene", hygieneBar);
}

// function Sleep() {
//   sleep = 100;
//   sleepBar.innerHTML = sleep + "%";
//   sleepBar.value = sleep;
// }

function Sleep() {
  resetToMaxValue("sleep", sleepBar);
}

// function Play() {
//   fun = 100;
//   funBar.innerHTML = fun + "%";
//   funBar.value = fun;
// }

function Play() {
  resetToMaxValue("fun", funBar);
}

// function Talk() {
//   social = 100;
//   socialBar.innerHTML = social + "%";
//   socialBar.value = social;
// }

function Talk() {
  resetToMaxValue("social", socialBar);
}

Start();
