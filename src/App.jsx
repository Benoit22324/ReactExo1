import "./assets/css/App.css"
import { useState } from "react"
import { Title } from "./components/Title"
import { Parapgrahe } from "./components/Paragraphe"
import { Image } from "./components/Image"

export const App = () => {
    const [activated, setActivated] = useState(false);

    return <>
        <Title activated={activated} />
        <Parapgrahe activated={activated} />
        <Image activated={activated} />
        <div>
            <button onClick={() => setActivated(!activated)}>{activated ? "Désactiver" : "Activer"}</button>
        </div>
    </>
}