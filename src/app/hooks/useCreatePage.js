import { useState } from "react"

export const useCreatePage = () => {
    const DATA_CONTENT = {
        creator_name: '',
        page_url: '',
    }

    const [data, setData] = useState(
        DATA_CONTENT 
    )

    const handleOnChange = (e) => setData({
        ...data,
        [e.target.name]: e.target.value
    })

    return {
        data,
        handleOnChange
    }
}
