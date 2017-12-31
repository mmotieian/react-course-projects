class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    componentDidMount(){

        try {
            const json = localStorage.getItem('count');
            const jsonCount = parseInt(json, 10);
            console.log(jsonCount);
            if(!isNaN(jsonCount)) {
                this.setState(() => {
                    return {count: jsonCount}
                });
            }
        }catch (e){
            console.error(e);
        }


    }

    componentDidUpdate(prevProps, prevState) {

        console.log('componentDidUpdate');

        if(this.state.count !== prevState.count){
            localStorage.setItem('count', this.state.count);
        }



    }

    handleAddOne() {

        this.setState((prevState) => {
            return {

                count: prevState.count + 1
            }
        });
    }

    handleMinusOne() {

        this.setState((prevState) => {

            return {
                count: prevState.count - 1
            }
        });
    }

    handleReset() {


        // this.state.count = 0;
        this.setState(() => ({count: 0}));

    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

// Counter.defaultProps = {
//     count: 2
// };

ReactDOM.render(<Counter />, document.getElementById('app'));