

class Header extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>Put your life in the hands of a computer.</h2>
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
                <p>Option</p>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <p>Options component here.</p>
                <Option/>

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
        return (
            <div>
                <Header title="Test value"/>
                <Action/>
                <Options/>
                <AddOption/>
            </div>
        );
    }

}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));