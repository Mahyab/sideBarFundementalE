import React, { useState } from "react";
import  {GoChevronDown , GoChevronLeft} from "react-icons/go"
export default function Accordion({items}) {
    const [expandIndex , setExpandIndex] = useState(null);
    function handleClick(nextIndex) {

        setExpandIndex((curretExpandedIndex) =>{
            if(curretExpandedIndex === nextIndex) {
                return -1;
            }
            else {
                return nextIndex;
            }
        })

    }
    const renderItems = items.map((item , index) => {
        const isExpended = index === expandIndex;
        return (
            <div key={index}>
                <div className="flex p-3 bg-gray-50 border-b items-center justify-between cursor-pointer" onClick={() => handleClick(index)}>
                {item.label}
                    <span className="text-xl">{isExpended ?  <GoChevronDown/>: <GoChevronLeft/> }</span>
                </div>
                {isExpended && <div className="border-b p-5">{item.content}</div> }
            </div>
        )
    })
    return(
        <>
            <div className="border-x border-t rounded">{renderItems}</div>
        </>
    )
}