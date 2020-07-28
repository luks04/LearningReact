import React, {Component} from 'react';
import '../assets/css/App.css';
import '../assets/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert} from 'react-bootstrap';

// AJAX Y COLECCIONES
class Blog extends Component{
    constructor(props){
        super(props)
        this.state = {
            articles: []
        }
    }

    componentDidMount(props){
        let promesa = fetch("https://jsonplaceholder.typicode.com/posts");

        promesa.then(response => response.json()).then(data => {
            this.setState({
                articles: data
            })
        })
    }
    render(){
        let array = this.state.articles
        var elements = array.map( (item,index) => {
            return <Alert variant='info' key={index}>{item.title}</Alert>
        })
        return(
            elements
        )
    }
}

class PokemonApi extends Component{
    constructor(props){
        super(props)
        this.state = {
            pokemon: ''
        }
    }

    componentDidMount(props){
        let promesa = fetch("https://pokeapi.co/api/v2/pokemon/pikachu/");

        promesa.then(response => {
            return response.json();
        })
        .then(name => {
            this.setState({
                pokemon: name
            })
        })
    }
    render(){
        let pokemonName = this.state.pokemon['name']
        return(
            <div>
                <Alert variant='danger'>
                    {String(pokemonName).toUpperCase()}
                </Alert>
            </div>
        )
    }
}

export default Blog;
export {PokemonApi};