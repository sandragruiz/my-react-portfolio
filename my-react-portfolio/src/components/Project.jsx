import React from "react"

const Projects = () => {
    return (
        <div name='projects' className='bg-[#75132f] text-gray-300 w-full md:h-screen'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-rose-200'>Portfolio</p>
                    <p className='py-6'>Check out some of my recent projects here!</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* Card with Project */}
                    <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hover effect */}
                        <div>
                            <div>
                                <span>

                                </span>
                                <div>
                                    <a href="/">
                                        <button></button>
                                    </a>
                                    <a href="/">
                                        <button></button>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                </div>
            
            </div>
        </div>
    )
}

export default Projects