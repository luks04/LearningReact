import React, {Component} from 'react';
import '../assets/css/App.css';
import '../assets/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert} from 'react-bootstrap';
import axios from 'axios';

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
            <div>
                <h1>Jsonplaceholder Example</h1>
                {elements}
            </div>
        )
    }
}

class PokemonApiFetch extends Component{
    constructor(props){
        super(props)
        this.state = {
            pokemon: ''
        }
    }

    componentDidMount(){
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
        let pokemonName = String(this.state.pokemon['name']).toUpperCase()
        return(
            <div>
                <h1>Pokemon Api Fetch</h1>
                <Alert variant='danger'>
                    Pokemon name: {pokemonName}
                </Alert>
            </div>
        )
    }
}

class PokemonApiAxios extends Component{
    constructor(props){
        super(props)
        this.state = {
            pokemon_id: ''
        }
    }

    componentDidMount(){
        axios.get("https://pokeapi.co/api/v2/pokemon/pikachu/")
        .then(response => {
            this.setState({
                pokemon_id: response.data['id']
            })
            console.log(response.data);
        })
    }
    render(){
        let pokemonName = String(this.state.pokemon_id)
        return(
            <div>
                <h1>Pokemon Api Axios</h1>
                <Alert variant='warning'>
                    Id: {pokemonName}
                </Alert>
            </div>
        )
    }
}

export default Blog;
export {PokemonApiFetch, PokemonApiAxios};