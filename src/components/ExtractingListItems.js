import React, {Component} from '../../node_modules/react';
import '../assets/css/App.css';
import '../assets/css/index.css';

var array =[
    {id: 100, product:"Apple", price:3},
    {id: 101, product:"Banana", price:1},
    {id: 102, product:"Carrot", price:2},
    {id: 103, product:"Donuts", price:5},
    {id: 104, product:"Eggplant", price:4}
]

// Extracting List Items
function ListItem(props){
    //don't need to add a key to 
    return <li>Product: {props.product} | Price: ${props.price}  </li>
}

class ProductList extends Component{
    render(){
        var elements = array.map( (item,index) => {
            //need to add a key here
            return <ListItem key={item.id} product={item.product} price = {item.price}/>
        })

        return (
            <div>
                <h1>Extracting List Items</h1>
                <ol>
                {elements}
                </ol>
            </div>
        )
    }  

}

export default ProductList;