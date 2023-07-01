import React from 'react'
import Foodie from '../assets/images/foodie-fetch-screenshot.png'
import Jate from '../assets/images/JATEpwa.gif'
import Planner from '../assets/images/third-party-apis-planner.gif'
import Quickdecks from '../assets/images/quickdecks.png'

/* (for future development, use components for project cards)
const projects = [
    {
        title: "Third-Party API",
        image: Foodie,
        deploy-link: ,
        github-link: ,
    },
    {

    }
]*/

const Projects = () => {
    return (
        <div id='portfolio' name='projects' className='bg-[#75132f] text-gray-300 w-full md:h-screen'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-rose-200'>Portfolio</p>
                    <p className='py-6'>Check out some of my recent projects here!</p>
                </div>

                {/* Project cards container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/* Card with Project */}
                    <div style={{backgroundImage: `url(${Foodie})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <div>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    Third-Party API
                                </span>
                                <div className='pt-8 text-center'>
                                    <a href="https://stephen-castillo.github.io/Foodie-Fetch/">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                    </a>
                                    <a href="https://github.com/stephen-castillo/Foodie-Fetch">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card with Project */}
                    <div style={{backgroundImage: `url(${Jate})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <div>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    Progressive Web App
                                </span>
                                <div className='pt-8 text-center'>
                                    <a href="/">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                    </a>
                                    <a href="https://github.com/sandragruiz/text-editor-pwa">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card with Project */}
                    <div style={{backgroundImage: `url(${Planner})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <div>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    Third Party API
                                </span>
                                <div className='pt-8 text-center'>
                                    <a href="https://sandragruiz.github.io/daily-planner/">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                    </a>
                                    <a href="https://github.com/sandragruiz/daily-planner">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card with Project */}
                    <div style={{backgroundImage: `url(${Quickdecks})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <div>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    MVC model, MySQL
                                </span>
                                <div className='pt-8 text-center'>
                                    <a href="https://quickdecks.herokuapp.com/">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                    </a>
                                    <a href="https://github.com/stephen-castillo/Project2">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card with Project */}
                    <div style={{backgroundImage: `url(${Quickdecks})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <div>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    Placeholder
                                </span>
                                <div className='pt-8 text-center'>
                                    <a href="/">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                    </a>
                                    <a href="/">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card with Project */}
                    <div style={{backgroundImage: `url(${Quickdecks})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        
                        {/* hover effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <div>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    Placeholder
                                </span>
                                <div className='pt-8 text-center'>
                                    <a href="/">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                    </a>
                                    <a href="/">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
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