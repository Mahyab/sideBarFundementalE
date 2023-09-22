import React, { useEffect,useRef,useState } from "react";
import { GoChevronDown ,GoChevronLeft } from "react-icons/go";
import Panel from "./Panel";
export default function DropDown({options , onChange , value}) {
    const [isOpen , setIsOpen] = useState(false);
    const drpDownRef = useRef();
    useEffect(() => {
        function handleClick(event) {
            if(!drpDownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("click" ,handleClick ,true);
        return(() => {
            document.removeEventListener("click" , handleClick);
        })
    },[])
    function handleClick() {
        setIsOpen(!isOpen);
    }
    function handleOptionClick(option) {
        setIsOpen(false);

        onChange(option);
    }
    const renderedOptions= options.map((option) =>{
            return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>
    })
    return(
        <div ref={drpDownRef} className="w-48 relative ">
            <Panel className="flex justify-between items-center cursor-pointer"   onClick={handleClick}>
                {value?.label || "SELECT ..."} 
                {isOpen ? <GoChevronDown className="font-bold text-lg"/>: <GoChevronLeft className="font-bold text-lg "/>}
                </Panel>
          {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
        </div>
    )
}