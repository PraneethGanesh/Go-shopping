import React,{useEffect}from 'react';
import './App.css';
import { useState } from 'react';
import axios from 'axios'
function Products() {
  
    
    const [name,setName]=useState('')
    const [price,setPrice]=useState(0)
    const [quantity,setQuantity]=useState(0)
    const [image,setImage]=useState('')
    const [products,setProducts]=useState([])

   
    const addNewProduct=()=>{
     // Axios.post('http://localhost:8080/add-phone',{name,phone})//code with axios to post the data to backend
     axios.post('https://localhost:8080/add-products',{name,quantity,price,image}
     ).then(function(response) {
      console.log(response);
    }).catch(function(error) {
      console.log(error);
    })
    
    }
    return (
      <div className='container bgwhite'>
        <h1>Products</h1>
        {/* {
        products.map((val,key)=>{
          return <div key={key} className="card">
            <p>Name :{val.name}</p>
            <p>Price{val.price}
            </p>
            </div>})}<hr/> */}

     <label htmlFor="">Name: </label>
    <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
    <label htmlFor="">quantity: </label>
    <input type="number" onChange={(e)=>{setQuantity(e.target.value)}}/>
    <label htmlFor="">price: </label>
    <input type="number" onChange={(e)=>{setPrice(e.target.value)}}/>
    <label htmlFor="">image: </label>
    <input type="text" onChange={(e)=>{setImage(e.target.value)}}/>
   
    <button onClick={addNewProduct}>Add New </button>
    </div>
  );
}

export default Products;