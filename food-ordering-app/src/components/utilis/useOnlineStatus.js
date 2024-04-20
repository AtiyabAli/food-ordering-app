import { useEffect, useState } from "react"

const useOnlineStatus = () => {
    const [status, setStatus] = useState(true);

   useEffect(() => {
    window.addEventListener("online", () => {
        setStatus(false)
    })
    window.addEventListener("ofline", () => {
        setStatus(true)
    })
   }, [])

   return status

}

export default useOnlineStatus;
