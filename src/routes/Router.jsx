import { Routes, Route } from "react-router-dom";

// Pages
import Login from "../pages/Login";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    )
}

export default MainRoutes;