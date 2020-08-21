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

        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeHandler(event){
        this.setState({pokemon: event.target.value})
    }

    submitHandler = event => {
        event.preventDefault()
        let promesa = fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemon}/`);
        promesa.then(response => {
            return response.json();
        })
        .then(poke => {
            this.setState({
                pokemon: poke['name']
            })
            alert('A pokemon was submitted: ' + this.state.pokemon);
        })
    }

    render(){
        let pokemonName = this.state.pokemon.toUpperCase()

        return(
        <div>
            <form onSubmit = {this.submitHandler}>
                <input type="text" name="pokemon" value={this.state.pokemon} onChange={this.changeHandler} placeholder="Pokemon's id"></input>
                <button className="btn btn-success btn-sm" type="submit">Submit</button>
            </form>
            {isNaN(this.state.pokemon) &&  <div>
                <h1>Pokemon Api Fetch</h1>
                <Alert variant='danger'>
                    Pokemon name: {pokemonName}
                </Alert>
            </div>
            }
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