import React from 'react'

const Footer = () => {
    return (
        <div className='w-full h-[100px] bg-[#75132f] text-gray-300 text-2xl'>
            <div className='flex flex-col justify-center items-center w-full h-full'>

                <a href='https://www.linkedin.com/in/sandra-gutierrez-b892311a2/'>
                <button className='hover:cursor-pointer px-4'>LinkedIn</button>
                </a>

                <a href='https://github.com/sandragruiz'>
                <button className='hover:cursor-pointer py-4'>Github</button>
                </a>
                
            </div>
        </div>
    )

}

export default Footer