import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#75132f] flex justify-center items-center p-4'>
            <form action='' className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-rose-200 text-gray-300'>Contact</p>
                </div>
                <input className='p-2' type='text' placeholder='Name' name='name'/>
                <input className='my-4 p-2'type='email' placeholder='Email' name='email'/>
                <textarea className='p-2' name='message' placeholder='Message'rows='10'></textarea>
                <button className='text-white border-2 hover:bg-emerald-700 hover:border-emerald-700 px-4 py-3 my-8 mx-auto flex items-center'>Send</button>
            </form>
        </div>
    )
}

export default Contact