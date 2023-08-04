import React from 'react'
import NotFound from '../assets/img/NotFound.png'

const PagesNotFound = () => {
    return (
        <div className='flex flex-col items-center h-screen'>
            <img src={NotFound} className='w-[300px] mt-auto  ' alt="Not Found" />
            <h1 className='mb-auto text-4xl'>Page Not Found</h1>
        </div>
    )
}

export default PagesNotFound