const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
};

/** -------------Action  ------------------------  **/
const Action = (props) => {
    return (
        <div>
            <button
                disabled={!props.hasOptions}
                onClick={props.handlePick}
            >
                What should I do?
            </button>
        </div>
    );
};

/** ---------------Option -----------------------  **/
const Option = (props) => {
    return (
        <div>
            Option: {props.optionText}
        </div>
    );
};

/** ---------------Options-----------------------  **/

const Options = (props) => {
    return (
        <div>
            <button
                onClick={props.handleDeleteOptions}
            >Remove All
            </button>
            {props.options.map(
                option => <Option key={option} optionText={option}/>
            )}
        </div>
    );
};

/** --------------- AddOption ------------------  **/
class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.getOption = this.getOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    getOption(e) {

        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => {
            return {error};
        });


        e.target.elements.option.value = '';


    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.getOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

/** -----------------IndecisionApp------------------  **/
class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        }
    }

    handleDeleteOptions() {
        this.setState(() => {

            return {
                options: []
            };
        });
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomNum]);

    }

    handleAddOption(option) {

        if (!option) {
            return 'Enter valid value';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Item already exists';
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        });
    }

    render() {

        const title = 'Indecision';
        const subTitle = 'Put your life in the hands of a computer.';
        // const options = ['ONE', 'TWO', 'THREE'];

        return (
            <div>
                <Header title={title} subtitle={subTitle}/>
                <Action
                    handlePick={this.handlePick}
                    hasOptions={this.state.options.length > 0}/>
                <Options
                    handleDeleteOptions={this.handleDeleteOptions}
                    options={this.state.options}/>
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }

}

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));