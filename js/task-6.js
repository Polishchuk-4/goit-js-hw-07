const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const input = document.querySelector('input[type="number"]');
const boxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  const arrBoxes = [];
  let size = 30;
  for (let i = 0; i < amount; i++) {
    arrBoxes.push(
      `<div style="background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px"></div>`
    );
    size += 10;
  }
  boxes.innerHTML = arrBoxes.join("");
}

buttonCreate.addEventListener("click", () => {
  if (input.value >= 1 && input.value <= 100) {
    createBoxes(+input.value);
    input.value = "";
  } else {
    alert("not a number");
    input.value = "";
    return;
  }
});
buttonDestroy.addEventListener("click", () => {
  boxes.innerHTML = "";
  input.value = "";
});

// ------------------

// function createBoxes_2(amount) {
//   const arrBoxes = [];
//   let size = 30;
//   for (let i = 0; i < amount; i++) {
//     const box = document.createElement("div");
//     box.style.height = size + "px";
//     box.style.width = size + "px";
//     box.style.backgroundColor = getRandomHexColor();
//     arrBoxes.push(box);
//     size += 10;
//   }
//   console.log(arrBoxes);
//   boxes.append(...arrBoxes);
// }

// createBoxes_2(12);
