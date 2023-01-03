import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {increment,decrement} from './Action'
import axios from 'axios';
import { useEffect,useState } from 'react';

const Main=()=>{
    const [data,setData]=useState();
    useEffect(()=>{
     axios.get('https://fakestoreapi.com/products/')
     .then(res=>{
         console.log(res.data,"aaa")
          
     })
    })
  
const mynum=useSelector((state)=>state.changeNumber);
    const dispatch=useDispatch();
   return(
    <>
      <h1>{mynum}</h1>
     <button onClick={()=>{
        dispatch(increment());
     }}>increment</button>
     <button onClick={()=>{
        dispatch(decrement());
        }}>dcrement</button>
        
  </>
   )
}
export default Main
