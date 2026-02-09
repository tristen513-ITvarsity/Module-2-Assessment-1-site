
const params = new URLSearchParams(window.location.search);
const itemId = params.get("item");
const item = itemId ? MENU.items[itemId] : null;

const imageEl = document.getElementById("food-image");
const nameEl = document.getElementById("food-name");
const priceEl = document.getElementById("food-price");
const sizeEl = document.getElementById("food-size");
const descEl = document.getElementById("food-description");
const categoryEl = document.getElementById("food-category");
const extrasEl = document.getElementById("extras-list");
const backLink = document.getElementById("back-link");

if (!item) {
  nameEl.textContent = "Meal not found";
  descEl.textContent = "Please return to the menu and select a dish.";
  backLink.href = "index.html";
  backLink.textContent = "Back to home";
} else {
  imageEl.src = item.image;
  imageEl.alt = item.name;
  nameEl.textContent = item.name;
  priceEl.textContent = item.price;
  sizeEl.textContent = item.size;
  descEl.textContent = item.description;
  categoryEl.textContent = item.category;
  const slug = item.category.toLowerCase() + "s";
  backLink.href = slug + ".html";
  backLink.textContent = "Back to " + slug;

  extrasEl.innerHTML = "";
  item.extras.forEach((extra) => {
    const li = document.createElement("li");
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "checkbox";
    label.appendChild(input);
    label.append(" " + extra);
    li.appendChild(label);
    extrasEl.appendChild(li);
  });
}
