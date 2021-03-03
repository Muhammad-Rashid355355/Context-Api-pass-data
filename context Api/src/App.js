import './App.css';
import React, {  useContext, useState } from 'react';
import Countercontext from './createContext';
import Child from './child';

function App() {
 const countervalue=useContext(Countercontext);
 console.log(countervalue)
  
return (
  <>
  <Child/>
  </>
)
}

export default App;
