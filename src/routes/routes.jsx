import { Route, Routes } from "react-router-dom";

import Home from "../containers/Home";
import Movies from "../containers/Home/Movies"
import Series from "../containers/Home/Series";
import DefautLayout from "../layout/DefautLayout";
import Detail from "../containers/Detail";

function Router(){
    return(
    <Routes>
        <Route element={<DefautLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/filmes" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/detalhe/:id" element={<Detail />} />
        </Route>
    </Routes>
    )
}
export default Router