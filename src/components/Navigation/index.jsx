import {
    MdOutlineCake,
    MdOutlineHome,
    MdOutlineWarningAmber,
} from 'react-icons/md';
import ItemNavigation from './ItemNavigation';
import { useContext } from 'react';
import { MenuContext } from '../../context/menuContext';

const Navigation = () => {
    const { menuState } = useContext(MenuContext);
    return (
        <nav
            className={`${
                menuState ? 'right-0' : '-right-[271px]'
            } h-screen pt-[102px] p-6 absolute top-0  bg-dark border-l-2 border-sky-950 lg:static lg:pt-6 lg:flex lg:flex-col lg:gap-8 transition-right duration-300`}
        >
            <img
                className="h-10 hidden lg:block"
                src="images/logo-spaceday.png"
                alt=""
            />
            <ul className="flex flex-col gap-4">
                <ItemNavigation
                    icon={<MdOutlineHome className="w-5 h-5" />}
                    to={'/'}
                >
                    Home
                </ItemNavigation>
                <ItemNavigation
                    icon={<MdOutlineCake className="w-5 h-5" />}
                    to={'/imageoftheday'}
                >
                    Imagem do Dia
                </ItemNavigation>
                <li className="text-sky-900 flex gap-3 ">
                    <MdOutlineWarningAmber className="w-5 h-5" /> Mais Funções
                    Futuramente
                </li>
            </ul>
        </nav>
    );
};
export default Navigation;
