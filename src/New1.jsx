import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { firstname } from './App';
import New2 from './New2';

function New1()
{   const navigate=useNavigate()
    const {value,setvalue}=useContext(firstname);
console.log(value,"fontext");
function change()
{
    setvalue(value=>value+1);
}
    return(
        <>
        <h1>{value}</h1>
        <button onClick={change}>clickme</button>  
        <button onClick={()=>{
    navigate('/New2');
        }}>click</button>
        </>
    )
}
export default New1;