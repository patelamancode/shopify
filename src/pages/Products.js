import React, {useContext} from 'react'
import ItemCard from '../components/itemcard/ItemCard'
import {DataContext} from '../context/ItemDataContext'


const Products = () => {
    const {data} = useContext(DataContext);

    return (
        <>
            <div className="relative mr-4 ml-10 lg:w-60% xl:w-1/2 w-2/4 md:w-full text-left">
                <label for="hero-field" className="leading-7 text-sm text-gray-600">Search</label>
                <input type="text" id="hero-field" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="container px-5 py-24 mx-auto flex flex-wrap gap-10 justify-center">
                {
                data.map(item => <ItemCard {...item}
                    key={
                        item.id
                    }/>)
            } </div>

        </>
    )
}

export default Products
