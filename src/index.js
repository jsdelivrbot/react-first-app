import React from 'react';
import ReactDOM from 'react-dom';

// create new component. this component should produce some 
//HTML
const App = () => {
    return <div>Hi</div>;
}


//Take this component's generated html and put it on the page

ReactDOM.render(<App />, document.querySelector('.container'));