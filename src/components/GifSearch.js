import React, { Component } from 'react'
import "./GifSearch.css"

export class GifSearch extends Component {
    constructor(){
        super()
        this.state = {
            term: ""
        }
    }
    
    handleChange = (e) => {
        this.setState({term: e.target.value})
    }

    handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleFetch(this.state.term)
    }

    render() {
        return (
            <form className="submit-box" onSubmit={this.handleSubmit}>
                <h3><b>Enter a Search Term:</b></h3>
                <input className = "form-control-plaintext" onChange={this.handleChange} type="text" value={this.state.term}/>
                <input className = "btn btn-danger" type="submit" value="Find Gifs"/>
            </form>
        ) 
    }
}

export default GifSearch
