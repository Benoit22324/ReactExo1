import { useEffect, useState } from "react"

export const ResponsiveBackground = () => {
    const [windowWidth, setWindowWidth] = useState(0);
    const [actualColor, setActualColor] = useState("");

    const handleResponsive = () => {
        setWindowWidth(window.innerWidth);
        setActualColor(window.innerWidth >= 800 ? "#ADD8E6" : "#FFC0CB");
    }

    const customResponsiveStyle = {
        backgroundColor: actualColor,
        width: "fit-content",
        padding: "5px",
        borderRadius: "5px"
    }

    useEffect(() => {
        handleResponsive();

        window.addEventListener('resize', handleResponsive);

        return () => {
            window.removeEventListener('resize', handleResponsive);
        }
    }, []);

    return <>
        <p style={customResponsiveStyle}>La taille actuelle est de {windowWidth}px</p>
    </>
}