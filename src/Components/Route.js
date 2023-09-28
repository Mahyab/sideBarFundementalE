import React  from "react";
import useNavigation from "../hooks/useNavgation";
export default function Route({path , children}) {
 const {currentPath}  = useNavigation()
 if(path === currentPath ) {
    return children;
 }
 return null;
}