import React, { useContext } from "react";
import NavigationContext from "../contexts/navigation";
export default function Link({to , children}) {
    const {navigate} = useContext(NavigationContext);
    function handleClick(e){
        e.preventDefault();
        navigate(to)
    }
    return <a onClick={handleClick}>{children}</a>

}