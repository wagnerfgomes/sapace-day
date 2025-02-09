import { useState } from 'react';
import { MdOutlineMenu, MdOutlineClose } from 'react-icons/md';
const MenuHamburguer = () => {
    const [modifyMenu, setModifyMenu] = useState(false);

    return (
        <button
            className="p-2 bg-light/5 backdrop-blur-sm border-[1px] border-light/50 rounded-md"
            onClick={() => setModifyMenu(!modifyMenu)}
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
