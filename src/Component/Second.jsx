import React from "react";
import { useContext } from "react";
import { firstname } from "../App";
import { api } from "../API/api";
import { useAsyncValue, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { checkstate } from "../App";
const Second =({button,setButton})=>{
  useEffect(()=>{
    Api();     
  },[])  
  const {value2,setvalue2}=useContext(checkstate);
  console.log(value2,"statecheck");
  let x;
 const [array,setArray]=useState([]);
 let {id}=useParams();
 console.log(id,"aab");
 const  Api= async()=>{
    const  ab= await  axios.get(`https://fakestoreapi.com/products`)
    console.log(ab?.data,"data");
    const  newArray= ab?.data?.filter((item)=>{
      if(item.id==id)// here id  is  param 
      {
        return item;
      }

 })
console.log(newArray,"newarray")
 setArray(newArray)
 
     }
  

    return(
        <>
        {
         array  && array?.map((item)=>{
            return(
            <div>
            <h1>{item?.category}</h1>
            <h2>{item?.description}</h2>
            <img style={{
              width:130
            }} src={item?.image}></img>
            <button>{value2?'remove from cart':'add to cart'}</button>
            </div>
            )
            
         })
        }
      
        </>

    )
}
export default Second 