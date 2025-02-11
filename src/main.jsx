import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Routers from './Router.jsx';
import { MenuProvider } from './provider/MenuProvider.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <MenuProvider>
            <Routers />
        </MenuProvider>
    </StrictMode>
);
