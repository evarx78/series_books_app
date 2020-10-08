import React from 'react'
import { Component } from "react";

class ApiMaze extends Component {
    constructor(props) {
        super(props);
        this.state = {
            informations: [],  //La liste contient tout les éléments récupérés dans le fetch de l'API
            value: "outlander",
            name: "",
            img: "",
            summary: ""

        };
    }

    handleInput = (event) => this.setState({ value: event.target.value });

    async componentDidMount() {
        const url = "http://api.tvmaze.com/search/shows?q=" + this.state.value
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({ name: data[0].show.name })
        this.setState({ img: data[0].show.image.medium })
        this.setState({ summary: data[0].show.summary })
    }

    render() {
        return (

            <div>
                <form>
                    <div>
                        <input type="text" value={this.state.value} required onChange={this.handleInput} placeholder="Name of the serie" />
                    </div>
                </form>
                <div class="apiResult">
                    <div>
                        <h3>{this.state.name}</h3>
                        <img src={this.state.img} alt="yop" />
                        <p>{this.state.summary}</p>
                    </div>
                    <button>Add to WatchList</button>
                </div>
            </div>


        )
    }

}

export default ApiMaze;


// Créer  une liste vide pour récupérer les résultats 
// Faire un for each pour chaque résultat 
    // Pousser chaque résultat dans la liste 

// Pour chaque résultat dans la Liste, afficher une div 

// A voir: Async, await, promise 

// Récupérer l'ensemble des résultats dans une liste 
// Pousser la liste avec setState 
// Créer une liste name, une liste, img, etc... 

// Pour chaque élément de value, pousser dans la liste name, img 