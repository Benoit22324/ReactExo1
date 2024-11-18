export function Parapgrahe({activated}) {
    /* je veux un paragraphe qui affiche soit "Hello" soit "Goodbye" en fonction d'un boolean */
    return <>
        <p>{activated ? "Hello" : "Goodbye"}</p>
    </>
}