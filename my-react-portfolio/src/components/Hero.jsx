import React from 'react'

const Hero = () => {
    return (
        <div className='w-full h-screen bg-[#75132f]'>

            <div className='max-w[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-red-200'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-rose-100'>Sandra Gutierrez Ruiz</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-rose-300'>I'm a Full Stack developer.</h2>
                <p className='text-rose-300 py-4 max-w-[700px]'></p>
            </div> 
            
            {/* for future dev: add button below('View Portfolio') */}

        </div>
    )
}


export default Hero