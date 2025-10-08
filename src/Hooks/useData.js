import { useEffect, useState } from "react"
import apiClient from "../utils/api-client";


const useData = (endpoint, customConfig, deps) => {
  
    const [data, setData] = useState(null);
     const [error, seterror] = useState("")
     const [loading, setLoading] = useState(false)
   
     useEffect(() => {
        setLoading(true)
        apiClient.get(endpoint, customConfig)
        .then(res =>{if (
                        endpoint === "/products" &&
                        data &&
                        data.products &&
                        customConfig.params.page !== 1
                    ) {
                        setData((prev) => ({
                            ...prev,
                            products: [...prev.products, ...res.data.products],
                        }));
                    } else {
                        setData(res.data);
                    }
                     setLoading(false)
        })
        .catch(err => {seterror(err.message)
                       setLoading(false)
        })
     }, deps ? deps : [])

     return {data, error , loading}
}

export default useData;