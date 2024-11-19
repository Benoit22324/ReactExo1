import { useEffect, useState } from "react"

export const MagicCounter = () => {
    const [counter, setCounter] = useState(0);

    const counterTest = counter !== 0 && !(counter % 5);

    const magicStyle = {
        backgroundColor: counterTest ? '#D4F1F4' : '#FDEDEC',
        width: "15rem",
        textAlign: "center",
        borderRadius: '10px',
        padding: "5px"
    };

    useEffect(() => {
        counter < 0 && setCounter(0);
    }, [counter])

    return <>
        <p style={magicStyle}>Le nombre actuelle est {counter}</p>
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setCounter(counter - 1)}>-</button>
        </div>
        <button onClick={() => setCounter(0)}>Reset</button>
        {
            counterTest && <p>✨ Nombre magique atteint ! ✨</p>
        }
    </>
}