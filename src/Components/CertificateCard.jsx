import React from 'react'
import { FaCertificate } from 'react-icons/fa'

const CertificateCard = ({ title, org, year, description, link }) => {
  return (
    <div className='bg-slate-950 bg-opacity-45 border border-slate-800 rounded-lg p-6 hover:scale-[1.02] hover:bg-opacity-60 duration-300 hover:shadow-lg hover:shadow-blue-500/20'>
      
      {/* Top */}
      <div className='flex items-center gap-4'>
        <div className='p-3 bg-zinc-900 rounded-xl'>
          <FaCertificate size={30} className='text-blue-400'/>
        </div>

        <div>
          <h2 className='text-lg md:text-xl font-semibold text-white'>
            {title}
          </h2>
          <p className='text-sm text-gray-400'>
            {org} | {year}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className='text-sm text-gray-300 mt-4'>
        {description}
      </p>

      {/* Button */}
      <a 
        href={link}
        target="_blank"
        rel="noreferrer"
        className='inline-block mt-4 text-blue-400 hover:underline'
      >
        View Certificate →
      </a>

    </div>
  )
}

export default CertificateCard