import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBtntlGogvGoj3gDakSD2FryL2hIGNngdY';

// create new component. this component should produce some 
//HTML
const App = () => {
    return (<div>
                <SearchBar />
            </div>);
}


//Take this component's generated html and put it on the page

ReactDOM.render(<App />, document.querySelector('.container'));