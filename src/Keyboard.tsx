import styles from "./Keyboard.module.css"

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]

type KeyboardProps = {
    disabled?: boolean
    activeLetters: string[],
    inactiveLetters: string[],
    addGUessedLetter: (letter: string) => void
}


export function Keyboard({
    activeLetters,
    inactiveLetters,
    addGUessedLetter,
    disabled = false
}: KeyboardProps) {
    return <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem"
    }}
    >
        {KEYS.map(key => {
            const isActive = activeLetters.includes(key)
            const isInactive = inactiveLetters.includes(key)
            return <button 
            onClick={() => addGUessedLetter} 
            className={`${styles.btn} ${isActive ? styles.active : ""}
                        ${isInactive ? styles.active : ""}`} 
            disabled={isInactive || isActive || disabled}
            key={key}>
                {key}
                </button>
        })}
    </div>
}