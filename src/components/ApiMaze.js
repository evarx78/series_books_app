import React from 'react'
import { Component } from "react";

class ApiMaze extends Component {
    constructor(props) {
        super(props);
        this.state = {
            informations: [],  //La liste contient tout les éléments récupérés dans le fetch de l'API
            value: ""
        };
    }

    // Fonction fléchée 
    handleInput = (event) => {
        this.setState({ value: event.target.value });
        console.log(this.state.value)
    }

    // Fonction normale 
    handleSubmit(event) {
        event.preventDefault();
    }

    // Life Cycle: Se produit après que le composant soit chargée 
    async componentDidUpdate() {
        const url = "http://api.tvmaze.com/search/shows?q=" + this.state.value
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ informations: data })
        console.log(this.state.informations);
    }

    // Rendu final 
    render() {
        return (
            <div className="api">
                <form className="api__searchbar" onSubmit={this.handleSubmit}>
                    <h2 className="api-title">By Name</h2>
                    <div>
                        <input type="text" value={this.state.value} required onChange={this.handleInput} placeholder="Type here..." />
                    </div>
                </form>
                <div className="api__genre">
                    <h2 className="api-title">By Genre</h2>
                    <div>
                        <label>Adventure</label>
                        <input type="checkbox" />
                    </div>
                    <div>
                        <label>Romance</label>
                        <input type="checkbox" />
                    </div>
                    <div>
                        <label>War</label>
                        <input type="checkbox" />
                    </div>
                </div>
                <div>
                    <h2 className="api-title">Results</h2>
                    <div className="api__result">
                        {this.state.informations.map(serie => (
                            <div className="api__result-content" key={serie.show.id}>
                                <h3>{serie.show.name}</h3>
                                <p>{serie.show.summary}</p>                               
                                {/* <button>Add to WatchList</button> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default ApiMaze;