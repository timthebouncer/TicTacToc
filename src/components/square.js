import React from "react";

const Square = (props) => {
    function textChange(){

      if(props.value === 0)
      {
        return ""
      }
    else if (props.value === 1) {
        return "O"
      }
    else if (props.value === 2) {
        return "X"
      }

  }

  return (
    <div >
      <button onClick={()=>props.tryClick()} className="board-btn">{textChange()}</button>
    </div>
)
}

export default Square
