import { useSelector } from "react-redux"
import { selectCount } from "../store/selector/counter"

export const Count = () => {
    const count = useSelector(selectCount);

    return <>
        <p>Le compteur est actuellement à {count}</p>
    </>
}