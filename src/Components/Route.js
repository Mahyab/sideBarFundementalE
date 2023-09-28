import React , {useContext } from "react";
import NavigationContext from "../contexts/navigation";
export default function Route({path , children}) {
 const {currentPath}  = useContext(NavigationContext);
 if(path === currentPath ) {
    return children;
 }
 return null;
}