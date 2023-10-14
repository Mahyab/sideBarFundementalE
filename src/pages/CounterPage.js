import { useState , useEffect } from "react";
import Button from "../Components/Button";
 
export default function CounterPage({initailValue}){
    const [counter , setCouter] = useState(initailValue);

    useEffect(() => {
        console.log(counter);
    } ,[counter]);

    function  handleClick() {
        setCouter(counter +1)
    }
    return(
        <div>
            <h1>the Count is {counter}</h1>
            <Button onClick={handleClick}>Increment</Button>

        </div>
    )
}