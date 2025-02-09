import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './global.css';
import Template from './pages/Template';

function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Template />}>
                    <Route index element={<h1>Home</h1>} />
                    <Route path="/imageOfDay" element={<h1>imageOfDay</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Routers;
