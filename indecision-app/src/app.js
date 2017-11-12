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

class Action extends React.Component {

    handlePick() {
        alert('clicked');
    }

    render() {
        return (
            <div>
                <button
                    disabled={!this.props.hasOptions}
                    onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}


class Option extends React.Component {
    render() {
        return (
            <div>
                Option: {this.props.optionText}
            </div>
        );
    }
}

class Options extends React.Component {



    handleRemoveAll() {


    }

    render() {
        return (

            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {this.props.options.map(option => <Option key={option} optionText={option}/>)}
            </div>
        );
    }
}

class AddOption extends React.Component {

    handleAddOption(e) {

        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        if (option)
            alert(option);

        e.target.elements.option.value = '';

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options: ['ONE', 'TWO', 'THREE']
        }
    }

    handleDeleteOptions(){
        this.setState(()=>{

            return {
                options: []
            };
        });
    }

    handlePick(){

    }

    render() {

        const title = 'Indecision';
        const subTitle = 'Put your life in the hands of a computer.';
        // const options = ['ONE', 'TWO', 'THREE'];

        return (
            <div>
                <Header title={title} subtitle={subTitle}/>
                <Action hasOptions={this.state.options.length > 0}/>
                <Options
                    handleDeleteOptions={this.handleDeleteOptions}
                    options={this.state.options}/>
                <AddOption/>
            </div>
        );
    }

}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));