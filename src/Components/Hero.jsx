import React from 'react'
import avatarImg from '../assets/avatar.png'
import TextChanger from './TextChanger'

export function Home() {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
      <div className='md:w-2/4 md:pt-10'>
        <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-wide'><TextChanger /></h1>
        <p className='text-lg md:text-xl mt-4'>Full-Stack Developer (MERN Stack). I build responsive, modern web applications using React, Tailwind & Firebase.</p>
        <button className='mt-5 md:mt-10 text-white py-2 px-3 text-lg md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>
          <a href="https://github.com/sanskritigupta312-jpg" className='text-white no-underline'>View My Work</a>
        </button>
      </div>
      <div className='md:w-2/4 md:pt-10'>
        <img src={avatarImg} alt="" className='' />
      </div>
      
    </div>
  )
}

export default Home