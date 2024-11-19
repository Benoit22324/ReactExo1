import { useEffect, useState } from "react"

export const ResponsiveBackground = () => {
    const [windowWidth, setWindowWidth] = useState(0);

    const handleResponsive = () => {
        setWindowWidth(window.innerWidth);
    }

    const customResponsiveStyle = {
        backgroundColor: windowWidth >= 800 ? "#ADD8E6" : "#FFC0CB",
        width: "fit-content",
        padding: "5px",
        borderRadius: "5px"
    }

    useEffect(() => {
        handleResponsive();

        window.addEventListener('resize', () => {
            handleResponsive();
        })

        return () => {
            window.removeEventListener('resize', () => {
                handleResponsive()
            });
        }
    }, [])

    return <>
        <p style={customResponsiveStyle}>La taille actuelle est de {windowWidth}</p>
    </>
}