import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#75132f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full px4 grid grid-cols-2 gap-8'>
                    
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-rose-200'>About Me</p>
                    </div>

                    <div></div>
                    </div>

                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                        <div className='sm:text-right text-4xl font-bold'>
                            <p>Hello! I'm Sandra, nice to meet you. </p>
                        </div>
                        <div>
                            <p>I'm a software developer well-versed in multiple front and back-end technologies
                                including HTML, CSS, JavaScript, React, Node JS, MySQL, and Mongo DB.  </p>
                        </div>
                    </div>
            </div>
        </div>
    )
}


export default About