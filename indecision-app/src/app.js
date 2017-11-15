class Header extends React.Component {

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }

}

/** -------------Action  ------------------------  **/
class Action extends React.Component {

    render() {
        return (
            <div>
                <button
                    disabled={!this.props.hasOptions}
                    onClick={this.props.handlePick}
                >
                    What should I do?
                </button>
            </div>
        );
    }
}

/** ---------------Option -----------------------  **/
class Option extends React.Component {
    render() {
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        );
    }
}

/** ---------------Options-----------------------  **/
class Options extends React.Component {

    render() {
        return (

            <div>
                <button
                    onClick={this.props.handleDeleteOptions}
                >Remove All
                </button>
                {this.props.options.map(
                    option => <Option key={option} optionText={option}/>
                )}
            </div>
        );
    }
}

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


        // e.target.elements.option.value = '';


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
        console.log(this.state.options[randomNum]);

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

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));