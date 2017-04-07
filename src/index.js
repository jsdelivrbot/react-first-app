import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBtntlGogvGoj3gDakSD2FryL2hIGNngdY';

YTSearch({key: API_KEY, term: 'surfboards'}, (data) =>{
    console.log(data);
});

// create new component. this component should produce some 
//HTML
class App extends Component {
    constructor(props){
        super(props);
        this.state = { 
            videos: [],
            selectedVideo: null
        };

        YTSearch({key: API_KEY, term: 'star wars'}, (videos) =>{
            this.setState({
                  videos,
                 selectedVideo: videos[0] 
                });
        });
    }

    render (){
    return (<div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>);
    }
};


//Take this component's generated html and put it on the page

ReactDOM.render(<App />, document.querySelector('.container'));