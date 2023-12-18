import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../components/exibitions-pages/home";
import { FormPage } from "../components/exibitions-pages/form";

export const AppRoutes = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/form" element={<FormPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}