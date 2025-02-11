import { Link, useLocation } from 'react-router-dom';

const ItemNavigation = ({ children, to, icon }) => {
    const lacation = useLocation();
    return (
        <li className="">
            <Link
                className={`${
                    lacation.pathname === to
                        ? 'text-sky-600 border-b-1'
                        : 'text-light hover:text-sky-300'
                } flex items-center gap-3`}
                to={to}
            >
                {icon}
                {children}
            </Link>
        </li>
    );
};
export default ItemNavigation;
