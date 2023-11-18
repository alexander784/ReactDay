import { useState, useEffect } from "react";


const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error,setError] = useState(null);
    useEffect(() => {
        fetch(url)
        .then(res => {
        if(!res.ok){
        throw Error('could not fetch data for that resource');
        }
            return res.json()
        })
        .then(data => {
            setData(data)
        })
        .catch(err => {
            setError(err.message);

        })
    }, [url]);
 
    return {data, }
}


export default useFetch;