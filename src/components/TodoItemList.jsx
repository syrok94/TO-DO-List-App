import React from "react";
import { useState } from "react";

function TodoItemList(props){

    const [checkItem , setcheckItem]=useState(false);

    function handleChecked(){
        setcheckItem((prevValue) => {
            return (!prevValue)
        });
    }

    return(
        <div onClick={handleChecked} >
            <li style={{textDecoration : checkItem ? "line-through" : "none"}} >{props.text}</li>
        </div>
    );
}

export default TodoItemList;