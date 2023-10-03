import { useEffect, useState } from "react"
import loading from '../Assets/loading.jpg'
import { useNavigate } from "react-router-dom"
import { FbAuth } from "../config/Firebase/firebasemethods"




export default function Protected(props: any) {

    const { Screen } = props
    const [loader, setloader] = useState<any>(true)
    const navigate = useNavigate()
    
    let checkAuth = () => {
        setloader(true)
        FbAuth().then(res => {
            setloader(false)
        }).catch(err => {
            setloader(true)
            navigate("/login")
        })

    }
    useEffect(() => {
        checkAuth()
    }, [])

    return loader ? <>
        <div>
            <img src={loading} height={100} width={100} />
        </div>
    </>

        : <Screen />
}