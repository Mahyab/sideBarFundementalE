import React, { Fragment ,useState } from "react";
import { GoChevronDown } from "react-icons/go";
export default function DropDown({options , onChange , value}) {
    const [isOpen , setIsOpen] = useState(false);
    function handleClick() {
        // setIsOpen((currentIsOpen) =>!currentIsOpen);
        setIsOpen(!isOpen);
    }
    function handleOptionClick(option) {
        setIsOpen(false);
        console.log();
        // which option is click    
        onChange(option);
        console.log(option);
    }
    const renderedOptions= options.map((option) =>{
            return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>
    })
    return(
        <div className="w-45 relative ">
            <div className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-fulll "  onClick={handleClick}>
                {value?.label || "SELECT ..."}
                <GoChevronDown className="font-bold text-lg"/>
                </div>
          {isOpen && <div className="absolute top-full border rounded p-3 shadow bg-white w-full ">{renderedOptions}</div>}
        </div>
    )
}