import { useEffect, useState } from "react"
import { fetchPages } from "../client"

export const usePages = () => {
    const [pages, setPages] = useState([])
    
    useEffect(() => {
        fetchPages().then((pages) => {
            setPages(pages)
        })
    }, [])

    return {pages}
}