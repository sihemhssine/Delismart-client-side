 import React from "react";
import ReactDOM from "react-dom";
import  MainApp from  "./MainApp";
const rootEl = document.getElementById('root');
 let render = () => {
    // Dynamically import our main App component, and render it
    ReactDOM.render(
        <MainApp />,
        rootEl
    );
};


render();