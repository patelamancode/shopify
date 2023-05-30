import {createContext, useState} from "react";
import {products} from "../backend/db/products";

export const DataContext = createContext();

export const DataContextProvider = ({children}) => {

    const [data, setData] = useState([...products]);


    return (
        <DataContext.Provider value={
            {data}
        }>
            {children} </DataContext.Provider>
    )
}
