export function Image({activated}) {
    /*
        Afficher soit:
            - https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTq1KZI9GbrTXSAmN0cj7bxaR7lweiUfwxRbGiVgH8SfSVKJyH1
            - https://www.zoologiste.com/images/main/lama.jpg
        en fonction d'un boolean
    */
    return <>
        <img src={activated ? "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTq1KZI9GbrTXSAmN0cj7bxaR7lweiUfwxRbGiVgH8SfSVKJyH1"
            : "https://www.zoologiste.com/images/main/lama.jpg"}
            alt="Une image"
            className="fixImage" />
    </>
}