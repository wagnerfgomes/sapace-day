import Menu from "../Menu"

const Header = () =>{
    return (
        <header className="flex items-center justify-between p-4 backdrop-blur-[1px] shadow-[0px_1px_10px_#1d203e] ">
            <img className="h-10" src="images/logo-spaceday.png" alt="" />
            <Menu />
        </header>
    );
}
export default Header