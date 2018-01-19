import React from 'react';
import Option from './Option';

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

export default Options;