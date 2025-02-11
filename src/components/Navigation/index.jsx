import {
    MdOutlineCake,
    MdOutlineHome,
    MdOutlineWarningAmber,
} from 'react-icons/md';
import ItemNavigation from './ItemNavigation';
import { useContext } from 'react';
import { MenuContext } from '../../context/menuContext';

const Navigation = ({ aside }) => {
    const { menuState } = useContext(MenuContext);
    if (aside) {
        return (
            <nav
                className={`static h-screen bg-dark border-l-2 border-sky-950 p-4 flex-col gap-6 hidden lg:flex`}
            >
                <img
                    className="max-w-none w-[190px]"
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
                    <li className="text-sky-900 flex items-center gap-3 text-[14px] ">
                        <MdOutlineWarningAmber className="w-5 h-5" /> Mais
                        Funções Futuramente
                    </li>
                </ul>
            </nav>
        );
    } else {
        return (
            <nav
                className={`${
                    menuState ? 'right-0' : '-right-[271px]'
                } h-screen pt-[114px] p-6 absolute top-0 bg-dark border-l-2 border-sky-950 transition-right duration-200 ease-in-out
            `}
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
                    <li className="text-sky-900 flex items-center gap-3">
                        <MdOutlineWarningAmber className="w-5 h-5" /> Mais
                        Funções Futuramente
                    </li>
                </ul>
            </nav>
        );
    }
};
export default Navigation;
