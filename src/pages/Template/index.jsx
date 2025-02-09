import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';

const Template = () => {
    return (
        <div className="bg-[url(images/background.png)] bg-cover bg-no-repeat bg-center relative w-screen h-screen">
            <div className="absolute bg-dark/75 inset-0">
                <Header/>
                <Outlet />
            </div>
        </div>
    );
};
export default Template;
