import Link from "./Link";
export default function Sidebar() {
    const links = [
        {label: "Dropdown", path: "/"},
        {label: "Accordion", path: "/accordion"},
        {label: "Buttons", path: "/buttons"},
    ]
    const renderLinks = links.map((link) => {
        return <Link className="mt-5 " key={link.label} to={link.path} activeClassName="font-bold border-l-4 border-blue-500 pl-2">{link.label}</Link>
    })
    return(
        <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
            {renderLinks}
        </div>
    )
}