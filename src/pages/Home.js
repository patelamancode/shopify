import React from 'react'
import Hero from '../components/hero/Hero'
import Collection from '../components/productGallery/Collection'
import Category from '../components/category/Category'
import Statistic from '../components/statistics/Statistic'

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
            <h2 className='text-4xl font-bold text-center'>Statistic</h2>
            <Statistic/>
        </>
    )
}

export default Home
