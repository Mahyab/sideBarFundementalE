import { render } from "@testing-library/react";

export default function Table({data ,config}) {
    const renderedRows = data.map((fruit) =>{
        return (
            <tr className="border-b" key={fruit.name}>
                <td className="p-3">{fruit.name}</td>
                <td className="p-3">
                    <div className={`p-3 m-2 ${fruit.color}`}></div>
                </td>
                <td className="p-3">{fruit.score}</td>
            </tr>
        )
    });
    const renderedTableHeaders = config.map((column) => {
        return(
            <th key={column.label}>{column.label}</th>
        )
    })
    return(
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderedTableHeaders}
                </tr>
            </thead>
            <tbody>{renderedRows}</tbody>
        </table>
    )
}