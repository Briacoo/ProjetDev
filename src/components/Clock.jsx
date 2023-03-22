import { useState, useEffect } from "react"
import Card from "./Card"

function Clock (){
    //Initialisation de l'état local
    const [date, setDate] = useState(new Date())

    //Fonction appelée automatiquement au montage du copasant 
    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date())
        }, 1000)
        //Fonction appelée automatiquement au démontage du composant
        return () => {
            clearInterval(interval)
        }
    }, [])

    return(
        <h1>{date.toLocaleTimeString()}</h1>
    )
}

export default Clock