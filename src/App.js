import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {Increment, Decrement} from "./actions";

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged= useSelector(state =>state.isLogged )
  const dispatch = useDispatch();
  return (
    <div className="App">
  <h1>Counter {counter} </h1>
  <button onClick={()=> dispatch(Increment())}>+</button>
  <button onClick={()=> dispatch(Decrement())}>-</button>

  {isLogged ? <h3> Valuable information you should not see</h3> : " "}
    </div>
  );
}

export default App;
