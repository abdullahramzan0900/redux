import React from "react";
import useContext from 'react'
import { firstname } from "./App";
function New2()
{ 
    const context =React.useContext(firstname);
    console.log(context.value,"ontext");
    return(
        <>
     <h1>{context.value}</h1>
        </>
    )
}
export default New2;