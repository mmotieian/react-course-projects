"use strict";

var appRoot = document.getElementById('app');

var clicked = false;

var showDetails = function showDetails() {
    clicked = !clicked;
    render();
};

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        ),
        React.createElement(
            "button",
            { onClick: showDetails },
            clicked ? "Hide Details" : "Show Details"
        ),
        React.createElement(
            "p",
            null,
            clicked && "Hello World"
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
