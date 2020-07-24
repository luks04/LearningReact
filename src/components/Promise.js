import React, {Component} from '../../node_modules/react';
import '../assets/css/App.css';
import '../assets/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert} from 'react-bootstrap';

// AJAX Y COLECCIONES
class Blog extends React.Component{
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
        return(
        <div>
            {
            this.state.articles.map((article) => {
                return(
                    <Alert variant='info'>
                        {article.title}
                    </Alert>
                )
            })
            }
        </div>
        )
    }
}

export default Blog;