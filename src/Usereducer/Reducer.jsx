import React, { useReducer } from 'react'
const initialstate=0;
const reducer=(state,action)=>{
    console.log(state,action);
   if(action.type==="increase")
   {
    return state+1;
   }
   if(action.type==="decrease")
   {
    return state-1;
   }
   return state;
      
}
function Reducer()
{
    const [state,dispatch]=useReducer(reducer,initialstate);
    return(
        <>
        <h1>{state}</h1>
        <button onClick={()=>{
            dispatch({
                type:"increase"
               })
        }}>increment</button>
        <button  onClick={()=>{
            dispatch({
                type:"decrease"
                  })
    }}>decrement</button>
        </>
    )
}
export default Reducer;