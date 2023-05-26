import React, {useEffect} from 'react'

const Product = () => {

    const getData = async () => {
        try {
            const data = await fetch('https://fakestoreapi.com/products')
            console.log(data);

        } catch {console.log("error")}}
    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <h1>Individual product item page</h1>
        </div>
    )
}

export default Product
