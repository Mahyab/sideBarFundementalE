import { useState } from "react";
import Table from "./Table";
import {BiUpArrow ,BiDownArrow } from "react-icons/bi"
export default function SoetableTable(props) {
    const [sortOrder , setSortOrder] = useState(null);
    const [sortBy , setSortBy] = useState(null);  
    const {config , data} = props;

    function getIcons(label , sortBy , sortOrder){
        if(label !==sortBy ) {
            return <div>
                <BiUpArrow/>
                <BiDownArrow />
            </div>
        }
        if(sortOrder === null) {
            return <div>
            <BiUpArrow/>
            <BiDownArrow/>
        </div>
        }else if (sortOrder === "asc") {
            return <div>
            <BiUpArrow/>
            
        </div>
        }else if (sortOrder === "desc") {
            return <div>
            <BiDownArrow/>
        </div>
        }


    }
    function handleClick(label) {
        //  fixed the column cycle hierarchy
        //  the code is not clean hear  :( 
        if(sortBy && label !== sortBy) {
            setSortBy(label);
            setSortOrder("asc");
            return
        }
        if(sortOrder === null){
            setSortOrder("asc");
            setSortBy(label)
        } else if(sortOrder === "asc") {
            setSortOrder("desc");
            setSortBy(label)
        }else if(sortOrder === "desc") {
            setSortOrder(null);
            setSortBy(null)
        }

    }
    let sortedData = data;
    if(sortedData && sortBy) {
        const {sortValue} =config.find(column =>column.label === sortBy);
        //  create a new prop arra
        sortedData = [...data].sort((objA , objB) => {
        const firstvalue = sortValue(objA);
        const secontValue= sortValue(objB);
        const reverseSortOrder = sortOrder === "asc" ? 1 : -1;
        if(typeof firstvalue === "string") {
            return firstvalue.localeCompare(secontValue) * reverseSortOrder;
        }else {
            return (firstvalue - secontValue) * reverseSortOrder
        }

        })
        
    }   
    const updatedConfig = config.map((column) =>{
        if(!column.sortValue) {
            return column
        }
        return {
            ...column,
            header:() => <th  className="cursor-pointer hover:bg-gray-100" onClick={() => handleClick(column.label)}>
                <div className="flex mx-2 items-center">
                    {getIcons(column.label , sortBy , sortOrder)}
                {column.label}
                </div>
                 </th>
        }
    });
     return <div> 
        <Table {...props} data={sortedData} config={updatedConfig} />
     </div>
}