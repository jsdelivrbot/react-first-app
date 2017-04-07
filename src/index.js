import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBtntlGogvGoj3gDakSD2FryL2hIGNngdY';

YTSearch({key: API_KEY, term: 'surfboards'}, (data) =>{
    console.log(data);
});

// create new component. this component should produce some 
//HTML
class App extends Component {
    constructor(props){
        super(props);
        this.state = { videos: []};

        YTSearch({key: API_KEY, term: 'surfboards'}, (data) =>{
            this.setState({ videos:data });
        });
    }

    render (){
    return (<div>
                <SearchBar />
            </div>);
    }
};


//Take this component's generated html and put it on the page

ReactDOM.render(<App />, document.querySelector('.container'));