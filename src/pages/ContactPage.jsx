import React from 'react'
import { BsGithub } from 'react-icons/bs' //
import { CiLinkedin } from 'react-icons/ci' //
import { MdOutlineEmail } from 'react-icons/md' //
import { FaLinkedin } from 'react-icons/fa' //
import { IoCall } from 'react-icons/io5'

const ContactPage = () => {
  return (
    <div className='text-white flex flex-col items-center justify-center p-10 md:p-24 min-h-[50vh]'>
        <h2 className='text-3xl md:text-5xl font-bold mb-8'>Get In Touch</h2>
        <div className='flex flex-col gap-6 text-lg md:text-2xl bg-black bg-opacity-30 p-10 rounded-xl shadow-xl'>
            {/* Phone No. */}
            <a 
            href="tel:+919341445297" target="_blank" rel="noopener noreferrer"className="flex items-center gap-2 hover:text-blue-500 duration-300">
               <IoCall size={20} />
                +91 9341445297
            </a>
            {/* Email Information */}
             <a 
            href="mailto:sanskritigupta312@gmail.com" target="_blank" rel="noopener noreferrer"className="flex items-center gap-2 hover:text-blue-500 duration-300">
               <MdOutlineEmail size={20} />
                sanskritigupta312@gmail.com
            </a>
            
            {/* LinkedIn Information */}
            <a 
            href="https://www.linkedin.com/in/sanskriti-kumari-36273a355" target="_blank" rel="noopener noreferrer"className="flex items-center gap-2 hover:text-blue-500 duration-300">
               <FaLinkedin size={20} />
                Sanskriti Kumari
            </a>

            {/* GitHub Information */}
             <a 
            href="https://www.github.com/sanskritigupta312-jpg" target="_blank" rel="noopener noreferrer"className="flex items-center gap-2 hover:text-blue-500 duration-300">
               <BsGithub size={20} />
                sanskritigupta
            </a>
        </div>
    </div>
  )
}

export default ContactPage