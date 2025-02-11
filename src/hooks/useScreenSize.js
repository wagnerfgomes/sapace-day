import { useEffect, useState } from "react";

const useScreenSize = () =>{
    const [size, setSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setSize(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [size]);

    return [size];
}

export default useScreenSize
