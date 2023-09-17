import React from "react";
import className  from "classnames";
// import PropTypes  from "prop-types";
export default function Button({
    children,
    primary ,
    secondary ,
    success,
    warning,
    danger ,
    outline ,
    rounded,
    ...rest


}) {
    const classes = className(rest.className ,"px-3 py-1.5 border flex items-center " ,{
        "border-blue-500 block bg-blue-500 text-white":primary,
        "border-gray-900 block bg-gray-900   text-white":secondary,
        "border-green-500 block bg-green-500 text-white":success,
        "border-yellow-500 block bg-yellow-500 text-white":warning,
        "border-red-500 block bg-red-500 text-white":danger,
        "rounded-full": rounded,
        "bg-white":outline,
        "text-blue-500":outline && primary,
        "text-gray-500": outline && secondary,
        "text-green-500":outline && success,
        "text-yellow-500":outline && warning,
        "text-red-500":outline && danger 

        
    })

    return (
        <button {...rest}  className={classes}>{children}</button>
    )
    
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