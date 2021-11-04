//react and react-DOM
import React from "react";
import ReactDom from "react-dom";

function getButtonText(){
    return 'hello'
}
//react components
const App = () => {
    const buttonText = 'Save'
    console.log(buttonText);
    return (
        <div>
            <h1>The form element</h1>
            <label htmlFor="fname">First name:</label>
            <input type="text" id="fname" name="fname"/>
            <br/>
            <label htmlFor="lname">Last name:</label>
            <input type="text" id="lname" name="lname"/>
            <br/>
            <input type="submit" value={ getButtonText() } />
        </div>
    )
}


//take react component and show it on screen
ReactDom.render(
    <App />,
    document.querySelector('#root')
);