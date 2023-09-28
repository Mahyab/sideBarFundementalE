import React, { useContext } from "react";
import classNames from "classnames";
import useNavigation from "../hooks/useNavgation";
export default function Link({to , children ,className , activeClassName}) {
    const {currentPath ,navigate} =  useNavigation();

    const classes = classNames("text-blue-500" , className ,
    currentPath === to && activeClassName);
    function handleClick(e){
        // console.log(e);
        if(e.mataKey || e.ctrlKey) {
            return;
        }
        navigate(to)
    }
    return <a href={to} className={classes} onClick={handleClick}>{children}</a>

} 