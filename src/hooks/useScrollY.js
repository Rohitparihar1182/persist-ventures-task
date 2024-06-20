import React, { useEffect } from "react";

const useScrollY = () => {
    const [scrollY, setScrollY] = React.useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    })
    return scrollY;
}

export default useScrollY;