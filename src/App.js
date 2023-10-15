import "./index.css";
import DropdownPage from "./pages/DropdownPage";
import Route from "./Components/Route";
import AccordionPage from "./pages/AcoordionPage";
import ButtonPage from "./pages/ButtonPage";
import Sidebar from "./Components/Sidebar";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";
import RefactorCounterPage from "./pages/RefactorCounterPage";
export default function App() {

    return(
        <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
            <Sidebar/>
            <div className="col-span-5">
                <Route path="/accordion">
                    <AccordionPage/>
                </Route>
                <Route path="/">
                    <DropdownPage/>
                </Route>
                <Route path="/buttons">
                    <ButtonPage/>
                </Route>
                <Route path="/modal">
                    <ModalPage/>
                </Route>
                <Route path="/table">
                    <TablePage/>
                </Route>
                <Route path="/counter">
                    <CounterPage initailValue={10}/>
                </Route>
                <Route path="/refcounter">
                    <RefactorCounterPage initailValue={1}/>
                </Route>
            </div>
        </div>
    )
}