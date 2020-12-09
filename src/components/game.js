import React, {useState} from 'react'
import Board from "./board";

function Game() {

  // const [isNext, setNext] = useState(true)

  function tryClick(index){
    state[index] = 1
    setState([...state])
  }

  const [state, setState] = useState([0,0,0,0,0,0,0,0,0]);

  return (
    <div className="App">
      <Board state={state} setState={setState} tryClick={tryClick}  />
    </div>
  );
}

export default Game;
