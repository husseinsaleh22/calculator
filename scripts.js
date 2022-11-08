let screen = document.querySelector("#screen .display");
let iconToggle = document.querySelector(".icon");
let icon = document.querySelectorAll(".icon i");
// Mode function
let dark = false;
iconToggle.addEventListener("click", () => {
  document.body.classList.toggle("active");
  function changeIconTo(pos = 26) {
    icon.forEach((e) => {
      e.style.transform = `translateX(${pos}px)`;
    });
  }
  if (dark) {
    changeIconTo(24);
    dark = !dark;
  } else {
    changeIconTo(-24);
    dark = !dark;
  }
});
// Calc function
function calc(fn) {
  return new Function("return " + fn)();
}
// Buttons function
function buttonClick(value) {
  // Reset
  if (value == "reset") screen.innerHTML = "";
  // Delete
  else if (value == "delete") {
    let arr = screen.innerHTML.split("");
    arr.pop();
    screen.innerHTML = arr.join("");
  }
  // Calc
  else if (value == "calc") screen.innerHTML = calc(screen.innerHTML);
  // Number
  else screen.innerHTML += value;
}
