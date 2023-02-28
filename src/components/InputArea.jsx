import React ,{ useState } from "react";


function InputArea(props){

    const [inputText , setInputText] = useState("");

    function updateChange(event){
        const newValue = event.target.value;
        setInputText(newValue)
    }

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
}


export default InputArea;