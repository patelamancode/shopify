import {createContext, useEffect, useState} from "react";
import {getProductListService} from "../services/products-service/productDataService";

export const DataContext = createContext();

export const DataContextProvider = ({children}) => {

    const [data, setData] = useState([]);
    const dataFromServer = async () => {
        try {
            const response = await getProductListService()
            if (response.status === 200) {
                setData(response.data.products)
            }
        } catch (err) {
            console.log(err)
        }

    }
    useEffect(() => {
        dataFromServer()

    }, [])

    return (<DataContext.Provider value={
        {data}
    }> {children} </DataContext.Provider>)
}
