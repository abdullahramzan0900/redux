import React, { useState } from "react";
import { firstname } from "../App";
import { useContext } from "react";
const Third = () => {
  const {value,setvalue,state,setstate}=useContext(firstname);
  const [button,setButton]=useState(false);
  console.log("value33",value);
  
  function deletefromcart(id)
  {   let newval= value.filter((item)=>{
          if(item.id!=id)
          {
            return item;
          }
      })
      console.log(newval,"newval");
      setvalue(newval)
  }

  return <>
      {
        value && value?.map((item)=>{
          return(       
          <>
        <div key={item.id}>

         <h4>{item.price}</h4>
         <img style={{
           width:100
          }} src={item.image}></img>
          <button onClick={()=>{
            console.log(item.id);
             deletefromcart(item.id);
          }}>Remove from cart </button>
          </div>
          </>
          )
        })
      }
  </>;
};
export default Third;
