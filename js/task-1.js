const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((elem) => {
  const title = elem.querySelector("h2");
  const list = elem.querySelectorAll("ul li");
  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${list.length}`);
});
