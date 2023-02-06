import { $content, createHtmlElement } from "./index";

function render() {
    const $main = document.createElement('main');

    const $welcome = createHtmlElement(
        'p',
        null,
        ["cursive", "golden"],
        "Welcome"
    );

    const $title = createHtmlElement(
        'h1',
        null,
        ["white"],
        "Pizzaria"
    );

    const $hr = document.createElement("hr");
    
    const $subtitle = createHtmlElement(
        'p',
        null,
        ['text-center', 'white'],
        "the home of good pizza!"
    );

    const $button = createHtmlElement (
        'button',
        null,
        null,
        "Order Now"
    );

    $main.appendChild($welcome);
    $main.appendChild($title);
    $main.appendChild($hr);
    $main.appendChild($subtitle);
    $main.appendChild($button);

    $content.appendChild($main);
}

export { render as renderHome }