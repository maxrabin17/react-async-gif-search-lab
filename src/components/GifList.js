import React, { Component } from 'react'
import "./GifList.css"

export class GifList extends Component {
    
    
    genList = () => {
        return this.props.gifs.map((gif,index) => {
            return (index <= 2) ? <li key={index}><img className="img" src={gif.images.original.url} alt=""/></li> : null;
        })
    }
    
    render() {
        return (
                <ul className="images">
                    {this.genList()}
                </ul>
        )
    }
}

export default GifList
