import "./index.css";
import DropdownPage from "./pages/DropdownPage";
import Link from "./Components/Link";
import Route from "./Components/Route";
import AccordionPage from "./pages/AcoordionPage";
export default function App() {

    return(
        <div>
            <Link to="/navigation">go to navigation</Link>
            <Link to="/accordion">go to accourdion </Link>
            <div>
                <Route path="/accordion">
                    <AccordionPage/>
                </Route>
                <Route path="/dropdown">
                    <DropdownPage/>
                </Route>
            </div>
        </div>
    )
}