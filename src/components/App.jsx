import React  from "react";
import { useState } from "react";
import TodoItemList  from "./TodoItemList";


function App(){

    const [inputText , setInputText] = useState("");
    const [items , setItems] = useState([]);

    function updateChange(event){
        const newValue = event.target.value;
        setInputText(newValue)
    }

    function addItem(event){
        setItems((prevItem)=>{
            return([...prevItem, inputText]);
        });

        setInputText("");

        event.preventDefault();
    }

    return(
        <div className="container">
            {/* heading */}
            <div className="heading">
                <h1>TODO-LIST </h1>
            </div >

            {/* FORM */}
            <div className="form">
                <form onSubmit={addItem}>
                    <input 
                    type="text" 
                    onChange={updateChange} 
                    value={inputText}
                    />
                    <button onClick={addItem}>
                        <span>Add</span>
                    </button>
                </form>
            </div>

            {/* LIST */}
                <ul>
                    {items.map( todoItem=> <TodoItemList text={todoItem}/>)}
                </ul>
            <div>


            </div>
        </div>
    );
}

export default App;