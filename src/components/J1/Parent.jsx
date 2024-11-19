import { Children } from "./Children"

export function Parent({activated}) {
    // Ici un component qui appelle un component enfant (à savoir Children.jsx)
    // (mettre au moins une props + children)

    // DOIT ETRE VISIBLE DANS LA PAGE ! (prenez les dispositions nécessaires)
    return <>
        <Children activated={activated} >Project Zomboïd</Children>
    </>
}