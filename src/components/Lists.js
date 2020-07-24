import React from '../../node_modules/react';
import '../assets/css/App.css';
import '../assets/css/index.css';

// LISTS //
// Rendering arrays of React Elements
function Lists(props){
    var elements = [] 
    var array = [1,2,3,4,5]

    for(let i = 0; i < array.length; i++){
        elements.push(<li>{array[i]}</li>)
    }
    
    return(
        <div>
            <h3>Rendering arrays of React Elements</h3>
            {elements}
            <br></br>
        </div>
    )
}

// Using Map() to render arrays of React Elements
function ListsMap(props){
    var array =[
        {product:"Apple", price:3},
        {product:"Banana", price:1},
        {product:"Carrot", price:2},
        {product:"Donuts", price:5},
        {product:"Eggplant", price:4}
    ]
    
    var elements = array.map( (item) => {
        return <li>Product: {item.product} | Price: ${item.price}  </li>
    })
    
    return(
        <div>
            <h3>Using Map() to render arrays of React Elements</h3>
            {elements}
            <br></br>
        </div>
    )
}

// Adding Keys to List Items
function ListsMapKeys(props){
    var array =[
        {id: 100, product:"Apple", price:3},
        {id: 101, product:"Banana", price:1},
        {id: 102, product:"Carrot", price:2},
        {id: 103, product:"Donuts", price:5},
        {id: 104, product:"Eggplant", price:4}
    ]
    
    var elements = array.map( (item) => {
        return <li key={item.id}>Product: {item.product} | Price: ${item.price}  </li>
    })
    
    return(
        <div>
            <h3>Adding Keys to List Items</h3>
            {elements}
            <br></br>
        </div>
    )
}

// If your array items do not have anything that can uniquely identify them, you can use the item index as a last resort for the key value. The drawback to using indexes as keys is that list item reordering is slow to rerender.
function ListsMapIndexKeys(props){
    var array =[
        {product:"Apple", price:3},
        {product:"Banana", price:1},
        {product:"Carrot", price:2},
        {product:"Donuts", price:5},
        {product:"Eggplant", price:4}
    ]
    
    //the item index is the second argument to the map() method
    var elements = array.map( (item,index) => {
        return <li key={index}>Product: {item.product} | Price: ${item.price}  </li>
    })
    
    return(
        <div>
            <h4>If your array items do not have anything that can uniquely identify them, you can use the item index as a last resort for the key value. The drawback to using indexes as keys is that list item reordering is slow to rerender.</h4>
            {elements}
            <br></br>
        </div>
    )
}

export default Lists;
export {ListsMap, ListsMapKeys, ListsMapIndexKeys};