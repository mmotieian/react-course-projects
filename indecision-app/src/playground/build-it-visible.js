class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props);

        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            clicked: false
        }
    }

    handleToggleVisibility() {

        this.setState((prevState) => {
            return {
                clicked: !prevState.clicked
            }
        });
    }

    render() {
        return (

            <div>
                <h1>Visibility Toggle</h1>

                <button onClick={this.handleToggleVisibility}>{
                    this.state.clicked ? "Hide Details" : "Show Details"
                }</button>
                <p>{this.state.clicked && "Hello World"}</p>
            </div>
        );
    }

}

const appRoot = document.getElementById('app');
ReactDOM.render(<VisibilityToggle/>, appRoot);

// const appRoot = document.getElementById('app');
//
//
// let clicked = false;
//
// const showDetails = () => {
//     clicked = !clicked;
//     render();
// }
//
//
// const render = () => {
//     const template =
//         (
//             <div>
//                 <h1>Visibility Toggle</h1>
//
//                 <button onClick={showDetails}>{
//                     clicked ? "Hide Details" : "Show Details"
//                 }</button>
//                 <p>{clicked && "Hello World"}</p>
//             </div>
//         );
//
//     ReactDOM.render(template, appRoot);
// };
//
//
// render();