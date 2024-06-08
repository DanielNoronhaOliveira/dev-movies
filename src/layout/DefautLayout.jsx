import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function DefautLayout(){
    return(
        <>
        <Header/>
        <Outlet/>
        </>
    )
}
export default DefautLayout