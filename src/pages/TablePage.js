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
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>
        },
        {
            label:"score",
            render: (fruit) => fruit.score
        },
        {
            label:"score squred",
            render:(fruit) => (fruit.score * fruit.score)
        } 
        
    ];
    function keyFn(fruit) {
        return fruit.name
    }


    return(
        <div>
          <Table keyFn= {keyFn} data={data} config={config}/>
        </div>
    )
}