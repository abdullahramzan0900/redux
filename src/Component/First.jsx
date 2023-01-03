import React, { useContext } from 'react'
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import { api } from '../API/api';
import { checkstate, firstname } from '../App';
import Second from './Second';
import axios from 'axios'
import { BrowserRouter as Router,Route } from 'react-router-dom';
function  First(){ 
    const {value,setvalue}=useContext(firstname);
    const [button,setButton]=useState(false)
    const [id,setId]=useState(40)
   const [check,Setcheck]=useState(false)
    console.log(value,"value");
    const [array,setArray]=useState([]);
  
    const {value2,setvalue2}=useContext(checkstate);
    console.log(value2,"statecheck")
   
   const  navigate=useNavigate();
    const  Api= async()=>{
   let ab= await  axios.get('https://fakestoreapi.com/products')
   setArray(ab.data);   
    }   
    useState(()=>{
      Api();
    },[])
  function Cart(item){     
      setvalue(current => [...current,item ]);
      console.log(value,"value");
    
  }
  function addremcart(ID)
{     if(id==ID)
   {  console.log(id)
    console.log(ID)
      Setcheck(true);
      console.log(true);
    }
    else {
      Setcheck(false);
      console.log(false)
    }
    
}
const RemoveFromCart=(id)=>{
let newValue=  value.filter((item)=>{
      if(item.id!=id)
      {
        return item
      }
  })
  setvalue(newValue);
  console.log("afterfilter",value);
}
  return (
     <>
     <div className='navbar'>

     <h1>Ecommerce</h1>
     <button onClick={()=>{
       navigate(`/Third`)
     }} >View Cart</button>
     </div>
    <div  className='grid-container'>  
    {   
      array && array.map((item)=>{
        return(
         <div className='grid-container > div' id={item.id}>
          <div onClick={()=>{
              navigate(`/Second/${item.id}`)
          }}>
        <h1 style={{
          fontSize:7
        }}>{item.category}</h1>
        <h2 style={{
          fontSize:7
        }}>{item.description}</h2>
        <img style={{
          width:100
        }} src={item.image}></img>
        </div>
        
        { 
           item.id!=id &&
          <button onClick={()=>{
            console.log(item.id);
            Cart(item);      
          //  navigate(`/Second/${item.id}`)
           setId(item.id);    
            setvalue2(true)
          }}>add to cart</button>
        }
        {
          item.id===id &&
          <button onClick={()=>{
                  
            setId(item.id);
            setvalue2(false);
            RemoveFromCart(item.id)

        
          }}>remove from cart</button>
        }
        </div>     
       )
      })
    }             
    </div>
    <Second button={button}setButton={setButton}/>  
    </>
    );   
};

export default First;

