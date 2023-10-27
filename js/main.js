const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

const category = document.getElementById('category');
category.addEventListener('change', (e) => {
  id = "category-" + e.target.value
  const element = document.getElementById(id)
  const elements = document.querySelectorAll('.category-box')
  elements.forEach((item) => {
    item.classList.remove('category-show')
  })
  element && element.classList.toggle('category-show')
})