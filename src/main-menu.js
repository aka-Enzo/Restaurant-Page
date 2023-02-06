import { $content, createHtmlElement } from "./index";

const menu = [
  {
    name: "pepperoni pizza",
    description:
      "pizza dough, pizza sauce, pepperoni, mozzarella cheese, ground black pepper.",
    price: "15$",
  },
  {
    name: "Margherita Pizza",
    description:
        "pizza dough, bubbly crust, crushed San Marzano tomato sauce, fresh mozzarella and basil, a drizzle of olive oil, and a sprinkle of salt.",
    price: "13$",
  },
  {
    name: "Meat-Lover's Pizza",
    description:
        "pizza dough, pepperoni, Italian sausage, ham, bacon, seasoned pork, beef, fresh mozzarella.",
    price: "20$",
  },
];

function render() {
  const $main = document.createElement("main");
  $main.classList.add("main");

  const $welcome = createHtmlElement(
    "p",
    null,
    ["cursive", "golden"],
    "Welcome"
  );
  const $title = createHtmlElement("h1", null, ["gray"], "Menu");

  const $hr = document.createElement("hr");

  $main.appendChild($welcome);
  $main.appendChild($title);
  $main.appendChild($hr);

  menu.forEach((item) => {
    const $div = createHtmlElement("div", null, ["menu-item"], null);

    const $name = createHtmlElement("h2", null, ["golden"], item.name);
    const $description = createHtmlElement(
      "p",
      null,
      ["gray"],
      item.description
    );
    const $price = createHtmlElement("h2", null, ["golden"], item.price);
    const $hr = createHtmlElement("hr", null, ["menu-hr"], null);

    $div.appendChild($name);
    $div.appendChild($description);
    $div.appendChild($price);
    $div.appendChild($hr);

    $main.appendChild($div);
  });

  $content.appendChild($main);
}

export { render as renderMenu };