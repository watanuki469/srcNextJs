'use client'

import { useRouter } from "next/navigation"
import { Button } from "react-bootstrap"

const Facebook = () => {

    const router = useRouter()
    const handleBtn = () => {
        router.push("/")
    }
    return (

        <div>
            <h1> Facebook page</h1>
            <Button variant="success"> click </Button>
            <button onClick={() => handleBtn()} >Back home</button>
        </div>
    )
}

export default Facebook;