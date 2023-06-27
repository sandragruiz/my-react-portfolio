import React, { useState } from 'react'
import { validateEmail } from '../utils/helpers'

const Contact = () => {

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleEmailChange = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);

    if (inputValue && !validateEmail(inputValue)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }};

    return (
        <div id='contact' name='contact' className='w-full h-screen bg-[#75132f] flex justify-center items-center p-4'>
            <form onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-rose-200 text-gray-300'>Contact</p>
                </div>
                <input className='p-2' type='text' placeholder='Name' name='name'/>
                <input 
                    className='my-4 p-2'
                    type='email' 
                    placeholder='Email' 
                    name='email'
                    value={email}
                    onChange={handleEmailChange}
                    />
                    {emailError && <p className='text-red-500'>{emailError}</p>}
                <textarea className='p-2' name='message' placeholder='Message'rows='10'></textarea>
                <button className='text-white border-2 hover:bg-emerald-700 hover:border-emerald-700 px-4 py-3 my-8 mx-auto flex items-center' type='submit'>Send</button>
            </form>
        </div>
    )
}

export default Contact