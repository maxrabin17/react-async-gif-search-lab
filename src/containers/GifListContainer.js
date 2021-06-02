import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'
import "./GifListContainer.css"

export class GifListContainer extends Component {
    
    state = {
        gifs: []
    }

    handleFetch = term => {
        const key = "gasb98CL9y7O6bffazU6Dj0ajk2x5Yph"
        let url = `https://api.giphy.com/v1/gifs/search?q=${term}&api_key=${key}&rating=g`
        fetch(url)
        .then(res => res.json())
        .then(gifImage => this.setState({gifs: gifImage.data}))
    }
    
    render() {
        return (
            <div className="gif-container">
                <GifList gifs={this.state.gifs}/>
                <GifSearch handleFetch={this.handleFetch}/>
            </div>
        )
    }
}

export default GifListContainer

