import  ReactDOM  from "react-dom"
export default  function Modal ({onClose , children ,actionBar}) {
    return ReactDOM.createPortal(
        <div>
            <div onClick={onClose} className="absolute inset-0 bg-gray-300 opacity-80"></div>
            <div className="absolute inset-40 p-10 bg-white">
                <div className="flex flex-col justify-between h-full">
                    {children}
                </div>
                <div className="flex justify-end">
                    {actionBar}
                </div>
            
            </div>
        </div> , document.querySelector(".modal-container")
    );

}