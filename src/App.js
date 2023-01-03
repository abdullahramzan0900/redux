import logo from './logo.svg';
import './App.css';
import First from './Component/First';
import { createContext } from 'react';
import { useState } from 'react';
import Second from './Component/Second';
import Third from './Component/Third';
import Check from './Component/Check';
import New1 from './New1';
import New2 from './New2';
import useHistory from 'react-router-dom';
import Reducer from './Usereducer/Reducer';
import Main from './Redux/Main';
import {Provider} from 'react-redux';

import {
  Routes,
  Route,
  Link
} from 'react-router-dom';

 
export const firstname=createContext();
export const checkstate=createContext();

function App() { 
  const [value, setvalue] = useState(0);
  const [state,setstate]=useState(false);
  return (
  <div>
 <button>abccc</button>
  {/* <firstname.Provider value={{value,setvalue}}>
    <Routes>
    <Route path='/' element={<New1/>}/> 
    <Route path='/new2' element={<New2/>}/> 
    <Route path='/reducer' element={<Reducer/>}/>
    <Route path='/redux' element={<Main/>}/>


   </Routes>
   </firstname.Provider> */}
   <Main/>


</div>


  )
}

export default App;
