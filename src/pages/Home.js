import React from 'react'
import Hero from '../components/hero/Hero'
import Collection from '../components/productGallery/Collection'
import Category from '../components/category/Category'

const Home = () => {
    return (
        <>
            <Hero/>
            <h2 className='text-4xl font-bold text-center'>
                Categories
            </h2>
            <Category/>
            <h2 className='text-4xl font-bold text-center'>Product Collection</h2>
            <Collection/>
        </>
    )
}

export default Home
