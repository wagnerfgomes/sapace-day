import Menu from '../Menu';

const Header = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-dark border-b-2 border-sky-950 lg:hidden">
            <img className="h-10" src="images/logo-spaceday.png" alt="" />
            <Menu />
        </header>
    );
};
export default Header;
