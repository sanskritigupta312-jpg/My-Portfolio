import React from 'react'
import CertificateCard from '../Components/CertificateCard' 

const Certificates = () => {
  return (
    <div id='Certificates' className='p-10 md:p-24'>
      
      <h1 className='text-2xl md:text-4xl font-bold text-white mb-10'>
        Certificates
      </h1>

      <div className='grid md:grid-cols-2 gap-6'>

        <CertificateCard 
          title="Web Development Internship Certificate"
          org="CodeWebx Technologies"
          year="2026"
          description="Completed internship working on real-world projects using ReactJS, Tailwind CSS, and Firebase."
          link="public/certificates/CodeWebx Internship.pdf"
        />

        <CertificateCard 
          title="Cyber Security Certificate"
          org="Tech Mahindra Foundation"
          year="Aug 02, 2025"
          description="Completed training on cybersecurity fundamentals including threats, prevention, and best practices."
          link="public/certificates/Cyber-Security-Certificate.pdf"
        />

      </div>
    </div>
  )
}

export default Certificates