import { $content, createHtmlElement } from "./index";

function render() {
    const $main = document.createElement("main");
    $main.classList.add('main');

    const $welcome = createHtmlElement(
        "p",
        null,
        ["cursive", "golden"],
        "Welcome"
    );

    const $title = createHtmlElement("h1", null, ["gray"], "About Us");

    const $hr = document.createElement('hr');

    const content = "Everything we serve here is made as if you are going back to my Grandmother's house for a holiday. Back then everything had to be the best and I mean everything! One bakery had the best bread but not the best cake. One pork store might have the best sausage but the chicken market had the best chicken and so on. Who cares who has the best? Why not just go to the supermarket and get everything? it's not just about good food! It is like a sport, a passion of nature and a love affair with food all rolled up into one. There is a great deal of pleasure that comes with serving something really special. we shop the world to bring you the best regardless of price. I invite you to step out of Hell's Kitchen and go back in time to Nonna's kitchen, where things are made with a sense of love and pride."

    const $p = createHtmlElement('p', null, ["menu-item"], content);

    $main.appendChild($welcome);
    $main.appendChild($title);
    $main.appendChild($hr);
    $main.appendChild($p);

    $content.appendChild($main);
}

export { render as renderAbout };