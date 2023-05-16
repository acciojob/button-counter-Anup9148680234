import {useState} from "react";
import React from "react";
import './../styles/App.css';

const App = () => {
  let [a, setA] = useState(0);

  function addA(){
    setA(a+1);
  }

  return (
    <div>
      <p>Button clicked {a} times</p>
      <button onClick={addA}>Click me</button>
    </div>
  )
}

export default App

