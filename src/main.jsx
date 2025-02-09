import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routers from './Router.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Routers />
    </StrictMode>
);
