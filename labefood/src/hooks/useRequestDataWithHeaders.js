import {useState,useEffect} from "react";
import axios from "axios";

const useRequestDataWithHeaders = (url,headers) => {
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
    },[])
    return [data,isLoading,error]
}

export default useRequestDataWithHeaders