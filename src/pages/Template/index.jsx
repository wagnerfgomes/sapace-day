import { Outlet } from "react-router-dom"

const Template = () =>{
    return(
        <div className="bg-[url(/images/background.png">
            <Outlet/>
        </div>
    )
}
export default Template