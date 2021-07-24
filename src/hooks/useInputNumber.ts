import { useState } from 'react'

const useInputNumber = (initialState: number) => {
    const [val, setVa] = useState(initialState);

    const handlertChange: any = (event: any) => {
        const { value } = event.target
        setVa(value)
    }
    return [val, handlertChange]
}

export default useInputNumber