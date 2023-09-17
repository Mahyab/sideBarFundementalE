import {GoBell , GoCloud ,GoDatabase} from "react-icons/go"

import React from "react";
import Button from "../Components/Button";
export default function ButtonPage() {
    function clickHandle() {
        console.log("clickes :)")
    }
    return(
        <>
    
        <Button primary  className={"mb-3"} onClick={clickHandle}>
            <GoBell/>
            click me !
        </Button>
        <Button secondary >
            <GoDatabase/> 
            DataBase
        </Button>
        <Button warning rounded >
            <GoCloud/> 
            DataBase
        </Button>
        </>
    )
}