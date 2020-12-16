import {useEffect, useState} from "react";
import axios from "axios";

const useRequest = (initUrl) =>{
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState({})

    useEffect(() => {
        let ignore = false
        // when the component is repaired ignore will be set to true // to avoid the installation to save the extracted data
        const fetch  = async () => {

            try {
                setLoading(true)
                const response = await  axios(initUrl)
                if(!ignore) setData(response.data.results)
            }catch (err) {
                setError(err)
            }finally {
                setLoading(false)
            }
        }
        fetch().then(r => console.log(r))

        return(() => {ignore = true})
    },[initUrl])
    return {data, isLoading, error}
}

export default useRequest