const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
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
            <button onClick={() => props.handleDeleteOption(props.optionText)}>Remove</button>
        </div>
    );
};

/** ---------------Options -----------------------  **/

const Options = (props) => {
    return (
        <div>
            <button
                onClick={props.handleDeleteOptions}
            >Remove All
            </button>
            {props.options.length < 1 && <p>Please enter an Option to get started.</p>}

            {props.options.map( option =>
                <Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption} />
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

        this.setState(() => ({error}));


        if(!error) {
            e.target.elements.option.value = '';
        }


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
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        }
    }

    componentDidMount() {
        console.log('fetching data');
        const json = localStorage.getItem('options');
        const jsonOptions = JSON.parse(json);
        console.log(jsonOptions);
        if (jsonOptions) {
            this.setState(() => ({options: jsonOptions}));
        }
    }


    componentWillMount(){
        console.log('componentWillMount() ');


    }

    componentDidUpdate(prevProps, prevState) {

        if (prevState.options.length !== this.state.options.length) {

            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('this.state.options.length ',this.state.options.length);
            console.log('prevState.options.length ', prevState.options.length);
        }
    }

    handleDeleteOptions() {
        this.setState(() => ({options: []}));
    }

    handleDeleteOption(option) {
        console.log('hdo ', option);
        this.setState((prevState)=> ({
            options: prevState.options.filter( (thisValue) => thisValue !== option )
        }));
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomNum]);

    }

    handleAddOption(option) {

        if (!option) {
            return 'Enter valid value';
        } else if (this.state.options.indexOf(option) > -1) {
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Item already exists';
        }

        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    }

    render() {

        const subTitle = 'Put your life in the hands of a computer.';
        // const options = ['ONE', 'TWO', 'THREE'];

        return (
            <div>
                <Header subtitle={subTitle}/>
                <Action
                    handlePick={this.handlePick}
                    hasOptions={this.state.options.length > 0}/>
                <Options
                    handleDeleteOptions={this.handleDeleteOptions}
                    options={this.state.options}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }

}

// IndecisionApp.defaultProps = {
//     options: []
// };

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

ReactDOM.render(<IndecisionApp options={[]}/>, document.getElementById('app'));