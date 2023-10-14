import { useEffect , useState } from "react";
function useCounter(initailValue) {
    const [counter , setCouter] = useState(initailValue);

    useEffect(() => {
        console.log(counter);
    } ,[counter]);

    function  handleClick() {
        setCouter(counter +1)
    }

    return {counter , handleClick}
};
export default useCounter;