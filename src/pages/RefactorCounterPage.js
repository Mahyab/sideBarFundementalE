import React, { useReducer, useState } from "react";
import Button from "../Components/Button";
import Panel from "../Components/Panel";

const  INCREMENT_VALUE = "increment";
const DECREMENT_VALUE = "decrement"
const CHANGE_HANDLER_VALUE =  "change-value-to-add";
const ADD_VALUE_TO_COUNT = "add_value_to_count"
function reducer(state , action) {
    switch(action.type) {
        case INCREMENT_VALUE:
            return{
                ...state,
                count:state.count +1
            }
        case DECREMENT_VALUE:
            return {
                ...state ,
                 count: state.count -1
            }
        case CHANGE_HANDLER_VALUE:
            return {
                ...state ,
                valueToAdd  :action.payload + state.count
            }
        case ADD_VALUE_TO_COUNT:
            return {
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd:0
            }
        default:
            //  in depend a error handling or return current state => for an unexpected action type
    }

 }
export default function RefactorCounterPage({initailValue}) {
    const [state , dispatch] = useReducer(reducer , {count:initailValue , valueToAdd:0})
    function increment() {
        dispatch({
            type: INCREMENT_VALUE,
        });

    }

    function decrement() {
        dispatch({
            type:DECREMENT_VALUE
        });
    }

    function handleChange(event) {
        const value = parseInt(event.target.value) || 0;
        dispatch({
            type:CHANGE_HANDLER_VALUE,
            payload:value

        })
    }

    function handleSubmit(event){ 
        event.preventDefault();
        dispatch({
            type:ADD_VALUE_TO_COUNT
        })

    }


    return(
        <Panel className={"m-3"}>
            <h1 className="text-lg">{state.count}</h1>
            <div className="flex flex-row">
                <Button onClick={increment}>increment</Button>
                <Button onClick={decrement}></Button>
            </div>
            <form onSubmit={handleSubmit}>
                <label> Add a lot !</label>
                <input value={state.valueToAdd || ""}  onChange={handleChange} type="number" className="p-1 m-3 bg-gray-50 border border-gray-300" />
                <Button>Add it </Button>
            </form>
        </Panel>
    )
}