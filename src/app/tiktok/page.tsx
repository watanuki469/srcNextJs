
import { useRouter } from "next/navigation"
import { Button } from "react-bootstrap"

const Tiktok = () => {

    const router = useRouter()
    const handleBtn = () => {
        router.push("/")
    }
    return (

        <div>
            <h1> Tiktok page</h1>
            <Button variant="success"> click </Button>
            <button onClick={() => handleBtn()} >Back home</button>
        </div>
    )
}

export default Tiktok;