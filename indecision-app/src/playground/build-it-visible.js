const appRoot = document.getElementById('app');


let clicked = false;

const showDetails = () => {
    clicked = !clicked;
    render();
}


const render = () => {
    const template =
        (
            <div>
                <h1>Visibility Toggle</h1>

                <button onClick={showDetails}>{
                    clicked ? "Hide Details" : "Show Details"
                }</button>
                <p>{clicked && "Hello World"}</p>
            </div>
        );

    ReactDOM.render(template, appRoot);
};


render();