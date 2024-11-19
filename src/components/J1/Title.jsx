export function Title({activated}) {
    // Un titre soit en rouge soit en bleu en fonction d'un boolean
    return <>
        <h2 className={activated ? "blue" : "red"}>Bonjour, ceci est le titre</h2>
    </>
}