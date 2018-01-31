import React from "react";

/** --------------- AddOption ------------------  **/
export default class AddOption extends React.Component {


    state = {
        error: undefined
    };

    // Above is made possible by using
    // babel's transform-class-properties
    // library
    constructor(props) {
        super(props);
        // this.getOption = this.getOption.bind(this);
        // this.state = {
        //     error: undefined
        // };
    }

    getOption = (e) => {

        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({error}));


        if (!error) {
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
