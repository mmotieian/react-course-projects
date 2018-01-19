import React from "react";

/** ---------------Option -----------------------  **/
export default Option = (props) => {
    return (
        <div>
            Option: {props.optionText}
            <button onClick={() => props.handleDeleteOption(props.optionText)}>Remove</button>
        </div>
    );
};