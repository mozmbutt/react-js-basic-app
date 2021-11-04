//react and react-DOM
import React from "react";
import ReactDom from "react-dom";

//react components
const App = () => {
    return <div>Hello World !</div>;
}

const AppInput = () => {
    return <input type="text" placeholder="name"/>;
}


//take react component and show it on screen
ReactDom.render(
    // <App />,
    <AppInput />,
    document.querySelector('#root')
);