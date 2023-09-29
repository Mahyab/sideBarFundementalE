import { render } from "@testing-library/react";

export default function Table({data ,config , keyFn}) {
    const renderedRows = data.map((rowData) =>{
        const renderedCells = config.map((column) =>{
            return (
                <td className={`p-2`} key={column.label}>{column.render(rowData)}</td>
            );
        })
        return (
            <tr className="border-b" key={keyFn(rowData)}>
                {renderedCells}
            </tr>
        )
    });
    const renderedTableHeaders = config.map((column) => {
        return(
            <th className="px-2" key={column.label}>{column.label}</th>
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