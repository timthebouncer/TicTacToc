import React from "react";
import Square from "./square";


function Board(props){
  const {tryClick} = props

  return(
    props.state.map((item,index)=>{
      return <div>
        <Square value={item} tryClick={()=>tryClick(index)} />
      </div>

    }
)
  )
}

export default Board
