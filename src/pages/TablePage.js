import Table from "../Components/Table"
export default function TablePage() {
    const data = [
        {name:"orange",color:"bg-orange-500", score:5},
        {name:"apple",color:"bg-red-500", score:3},
        {name:"Banana",color:"bg-yellow-500", score:4},
        {name:"Lime",color:"bg-green-500", score:5},
    ];
    const config = [
        {
            label:"Name" , 
            render: (fruit) => fruit.name     
        },
        {
            label:"Color",
            render: (fruit) => fruit.color
        },
        {
            label:"score",
            render: (fruit) => fruit.score
         },
        
    ]


    return(
        <div>
          <Table data={data} config={config}/>
        </div>
    )
}