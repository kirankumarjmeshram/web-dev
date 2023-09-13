import "./styles.css";
import {useState} from 'react';
import {Btn, Lbl} from './Btn'
import React from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const clickHandler = () =>{
    setCounter(counter+1);
  }
  return (
    <div className="App">
      <Btn onClick = {clickHandler}/>
      <Lbl count = {counter}/>
    </div>
  );
}
