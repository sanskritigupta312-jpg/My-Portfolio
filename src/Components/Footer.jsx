import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { CiLinkedin } from 'react-icons/ci'
import { IoCall } from 'react-icons/io5'
import { MdOutlineEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer id='Footer' className='bg-[#465697] text-white pt-16 pb-8 px-10 md:px-20'>
        {/* Main Footer Content */}
        <div className='flex flex-col md:flex-row justify-between gap-10 border-b border-white border-opacity-20 pb-12'>
            
            {/* Left Section: Branding & Tagline */}
            <div className='flex-1'>
                <h1 className='text-3xl md:text-5xl font-bold mb-4'>Let's Connect</h1>
                <p className='text-sm md:text-lg opacity-80 max-w-sm'>
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
            </div>

            {/* Middle Section: Quick Links */}
            <div className='flex-1 flex flex-col gap-3'>
                <h2 className='text-xl font-semibold mb-2'>Navigation</h2>
                <Link to="/" className='hover:underline opacity-80 hover:opacity-100 transition'>Home</Link>
                <Link to="/About" className='hover:underline opacity-80 hover:opacity-100 transition'>About</Link>
                <Link to="/Experience" className='hover:underline opacity-80 hover:opacity-100 transition'>Experience</Link>
                <Link to="/Projects" className='hover:underline opacity-80 hover:opacity-100 transition'>Projects</Link>
            </div>

            {/* Right Section: Contact Details */}
            <div className='flex-1 flex flex-col gap-4'>
                <h2 className='text-xl font-semibold mb-2'>Contact Me</h2>
                <ul className='text-sm md:text-lg space-y-3'>
                    <li className='flex gap-3 items-center hover:translate-x-2 duration-300'>
                        <MdOutlineEmail size={24}/> 
                        <a href="mailto:sanskritigupta312@gmail.com">sanskritigupta312@gmail.com</a>
                    </li>
                    <li className='flex gap-3 items-center hover:translate-x-2 duration-300'>
                        <CiLinkedin size={24}/> 
                        <a href="https://linkedin.com/in/sanskriti-kumari-36273a355" target="_blank" rel="noreferrer">LinkedIn Profile</a>
                    </li>
                    <li className='flex gap-3 items-center hover:translate-x-2 duration-300'>
                        <BsGithub size={24}/> 
                        <a href="https://github.com/sanskritigupta312-jpg" target="_blank" rel="noreferrer">GitHub Profile</a>
                    </li>
                    <li className='flex gap-3 items-center hover:translate-x-2 duration-300'>
                        <IoCall size={24}/> 
                        <a href="tel:+919341445297">+91 9341445297</a>
                    </li>
                </ul>
            </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className='mt-8 text-center text-sm opacity-60'>
            <p>© {new Date().getFullYear()} Sanskriti Kumari. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer