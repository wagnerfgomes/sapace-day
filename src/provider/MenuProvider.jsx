import { useState } from "react";
import { MenuContext } from "../context/menuContext";

export const MenuProvider = ({ children }) => {
    const [menuState, setMenuState] = useState(false);
    return (
        <MenuContext.Provider value={{menuState, setMenuState}}>
            {children}
        </MenuContext.Provider>
    );
};
