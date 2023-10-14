import Button from "../Components/Button";
import useCounter from "../hooks/useCounter";

export default function CounterPage({initailValue}){
   const {counter ,handleClick} = useCounter(initailValue);
    return(
        <div>
            <h1>the Count is {counter}</h1>
            <Button onClick={handleClick}>Increment</Button>

        </div>
    )
}