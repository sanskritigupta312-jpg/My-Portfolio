import React from 'react'
import AboutImg from "../assets/about-img.png"
import { IoArrowForward } from 'react-icons/io5'

const About = () => {
  return (
    <div className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl m-2 md:mx-20 bg-opacity-30 rounded-lg p-8 md:p-12'>
        <div>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>About Me</h2>
            <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
                <img className='md:h-80 rounded-2xl mb-8 md:mb-0' src={AboutImg} alt='Sanskriti Kumari' />
                
                <ul className='md:ml-10'>
                    {/* Professional Summary */}
                    <div className='flex gap-3 py-4'>
                        <IoArrowForward className='text-3xl text-green-500 mt-1' />
                        <span className='max-w-md'>
                            <h1 className="text-xl md:text-2xl font-semibold">Sanskriti Kumari</h1>
                            <p className="text-sm md:text-md text-gray-300">
                                I am a BTech Computer Science Engineering student at Kalinga University (2024-Present) with a passion for building responsive and user-friendly web applications.
                            </p>
                        </span>
                    </div>

                    {/* Education Details */}
                    <div className='flex gap-3 py-4'>
                        <IoArrowForward className='text-3xl text-green-500 mt-1' />
                        <span className='max-w-md'>
                            <h1 className="text-xl md:text-2xl font-semibold">🎓 Education</h1>
                            <p className="text-sm md:text-md text-gray-300">
                                Currently pursuing BTech at Kalinga University, Raipur. Completed Class XII (69.4%) and Class X (78.6%) at Adarsh Vidya Mandir, Jharkhand.
                            </p>
                        </span>
                    </div>

                    {/* Technical Skills */}
                    <div className='flex gap-3 py-4'>
                        <IoArrowForward className='text-3xl text-green-500 mt-1' />
                        <span className='max-w-md'>
                            <h1 className="text-xl md:text-2xl font-semibold">💻 Technical Skills</h1>
                            <p className="text-sm md:text-md text-gray-300">
                                <strong>Frontend:</strong> ReactJS, Tailwind CSS, CSS. <br/>
                                <strong>Backend/DB:</strong> Firebase (Auth & Firestore). <br/>
                                <strong>Languages:</strong> JavaScript, Python, C.
                            </p>
                        </span>
                    </div>

                    {/* Professional Experience */}
                    <div className='flex gap-3 py-4'>
                        <IoArrowForward className='text-3xl text-green-500 mt-1' />
                        <span className='max-w-md'>
                            <h1 className="text-xl md:text-2xl font-semibold">💼 Internship Experience</h1>
                            <p className="text-sm md:text-md text-gray-300">
                                Web Development Intern at CodeWebx Technologies (Nov 2025 – Feb 2026). Specialized in MERN stack, building reusable components, and optimizing UI performance.
                            </p>
                        </span>
                    </div>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About