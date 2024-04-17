const body = document.body;
const button = document.querySelector(".change-color");
const textColor = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

button.addEventListener("click", () => {
  const randomHexColor = getRandomHexColor();
  body.style.backgroundColor = randomHexColor;
  textColor.textContent = randomHexColor;
});

console.log(
  Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)
);
