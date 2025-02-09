import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './global.css';
import Template from './pages/Template';
import Home from "@/pages/Home"

function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Template />}>
                    <Route index element={<Home/>} />
                    <Route path="/imageOfDay" element={<h1>imageOfDay</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Routers;
