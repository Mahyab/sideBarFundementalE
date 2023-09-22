import "./index.css";
import React, { useState } from "react";
import DropDown from "./Components/Dropdown";
export default function App() {
    const [selection , setSelection] = useState(null);
    function handleSelect(option) {
        setSelection(option)
    }
        const options = [
            {label:"red" , value:"red"},
            {label:"blue" , value:"blue"},
            {label:"green" , value:"green"},
            {label:"yellow" , value:"yellow"}
        ]
    return(
        <div className="flex">
            <DropDown options={options} onChange={handleSelect} value={selection} />
            <DropDown options={options} onChange={handleSelect} value={selection} />
            
        </div>
    )
}