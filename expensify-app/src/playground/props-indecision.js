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
    render() {
        return (
            <div>
                <button>What should I do?</button>
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
    render() {


        return (
            <div>
                {this.props.options.map(option => <Option key={option} optionText={option}/>)}
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {

        return (
            <div>
                AddOption component here.
            </div>
        );
    }
}


class IndecisionApp extends React.Component {

    render() {

        const title = 'Indecision';
        const subTitle = 'Put your life in the hands of a computer.';
        const options = ['ONE', 'TWO', 'THREE'];

        return (
            <div>
                <Header title={title} subtitle={subTitle}/>
                <Action/>
                <Options options={options}/>
                <AddOption/>
            </div>
        );
    }

}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));