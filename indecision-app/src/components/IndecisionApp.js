import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';


/** -----------------IndecisionApp------------------  **/
export default class IndecisionApp extends React.Component {

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


