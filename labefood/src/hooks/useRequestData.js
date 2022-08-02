import {useState,useEffect} from "react";
import axios from "axios";

const useRequestData = (url,headers) => {
    const [data,setData] = useState(undefined);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState('');

    useEffect(()=>{
        setIsLoading(true)
        axios
        .get(url,headers)
        .then((res)=>{
            setIsLoading(false)
            setData(res.data)
        })
        .catch((err)=>{
            setIsLoading(false)
            setError(err)
        })
    },[url])
    return [data,isLoading,error]
}

export default useRequestData