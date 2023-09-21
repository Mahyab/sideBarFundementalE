import "./index.css";
import React from "react";
import ButtonPage from "./pages/ButtonPage";
import Accordion from "./Components/Accordion";
export default function App() {
    const  items=[
        {
            label:"can i use a react project ",
            content:"are you a programmer baby "
        },
        {
            label:"can i use a sql project ",
            content:"are you a programmer baby "
        },
        {
            label:"can i use a Angular project ",
            content:"are you a programmer baby "
        },
    ]
    return(
        <>
            <Accordion items={items}/>
        </>
    )
}