const plusImage = document.querySelectorAll(".toogle-img");
const sections = document.querySelectorAll(".section");
console.log(sections);

plusImage.forEach((e, i) => {
  e.addEventListener("click", () => {
    sections.forEach((e, j) => {
      if (i !== j) return;
      e.lastElementChild.classList.toggle("hide");
    });
  });
});
