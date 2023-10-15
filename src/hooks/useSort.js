import { useState } from "react";
export default function useSort(data , config) {
    const [sortOrder , setSortOrder] = useState(null);
    const [sortBy , setSortBy] = useState(null); 
    
    function setSortColumn(label) {
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

    };

    
    let sortedData = data;
    if(sortedData && sortBy) {
        const {sortValue} =config.find(column =>column.label === sortBy);
        //  create a new prop array
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
    return {
        sortBy, 
        sortOrder,
        setSortColumn,
        sortedData
    }
}