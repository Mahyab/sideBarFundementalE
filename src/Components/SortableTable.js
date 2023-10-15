import Table from "./Table";
import useSort from "../hooks/useSort";
import {BiUpArrow ,BiDownArrow } from "react-icons/bi"
export default function SoetableTable(props) {
    const {config , data} = props;
    const {sortBy , sortOrder , sortedData , setSortColumn:handleClick} = useSort(data, config)

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