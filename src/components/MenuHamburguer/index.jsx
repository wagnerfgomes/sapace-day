import { useContext, useState } from 'react';
import { MdOutlineMenu, MdOutlineClose } from 'react-icons/md';
import { MenuContext } from '../../context/menuContext';
const MenuHamburguer = () => {
    const [modifyMenu, setModifyMenu] = useState(false);
    const { menuState, setMenuState } = useContext(MenuContext);
    return (
        <button
            className="p-2 bg-light/5 backdrop-blur-sm border-[1px] border-light/50 rounded-md lg:hidden z-20"
            onClick={() => {
                setModifyMenu(!modifyMenu);
                setMenuState(!menuState);               
            }}
        >
            {modifyMenu ? (
                <MdOutlineClose className="w-10 h-10 fill-light" />
            ) : (
                <MdOutlineMenu className="w-10 h-10 fill-light" />
            )}
        </button>
    );
};
export default MenuHamburguer;
