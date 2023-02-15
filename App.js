import { React, useState } from 'react'
import './App.css';
 
export default function App() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("green");
  //increase counter
  const increase = () => {


    if(counter >= 4 && counter <= 9){
        setColor("blue")
    }

    if(counter >= 9){
        setColor("red");
    }

    if(counter >= 10){ 
        return;
    }

    

    

    setCounter(count => count + 1);
  };
 
  //decrease counter
  const decrease = () => {

    if(counter >= 4 && counter <= 10){
        setColor("blue")
    }

    if(counter <= 5){
        setColor("green");
    }

    if(counter <= 0){
        return;
    }
    setCounter(count => count - 1);
  };
 

 
  return (
    <div className="counter">
      <h1> 
      <span className={`color-display ${color}`}>{counter}</span>
      </h1>
      <div className="btn__container">
        <button className="control__btn" onClick={increase} >+</button>
        <button className="control__btn" onClick={decrease}>-</button>
        
      </div>
    </div>
  );
}