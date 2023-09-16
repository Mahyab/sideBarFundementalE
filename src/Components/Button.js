import React from "react";
import PropTypes  from "prop-types";
export default function Button({
    children,
    primary ,
    secondary ,
    success,
    warning,
    danger ,
    outline ,
    rounded


}) {
    return <button>{children}</button>
    
}
Button.propTypes ={
    checkVariationValue: ({primary ,
        secondary ,
        success,
        warning,
        danger 
    }) =>{
        const count  = Number(!! primary) + Number(!! secondary) + Number(!! success) + Number(!! warning) +  Number(!! danger)
        if(count > 1 ) {
            return new Error("Only one color should be selected in Button prop component dev :) ")
        }
    },
}