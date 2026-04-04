import React from 'react';
import CertificateCard from '../Components/CertificateCard';

const Certificates = () => {
  return (
    <div id='Certificates' className='p-10 md:p-24'>
      <h1 className='text-2xl md:text-4xl font-bold text-white mb-10'>
        Certificates
      </h1>

      <div className='grid md:grid-cols-2 gap-6'>
        <CertificateCard 
          title="React JS Developer Internship"
          org="CodeWebx Technologies"
          year="February 27, 2026"
          description="Completed a 4-month internship program as a React JS Developer, working on real-world projects using ReactJS, Tailwind CSS, and Firebase."
          link="/certificates/CodeWebx Internship.pdf"
        />

        <CertificateCard 
          title="Bootcamp on Data Empowerment"
          org="Kalinga University & IIIT Hyderabad"
          year="January 31, 2026"
          description="Participated in a bootcamp focused on Data Empowerment for Local Innovation and Entrepreneurship."
          link="/certificates/Data-Empowerment.pdf"
        />

        <CertificateCard 
          title="Cloud Computing & DevOps Value Added Course"
          org="Kalinga University"
          year="January 30, 2026"
          description="Completed a 30-hour course covering Cloud Computing and DevOps concepts, including AWS, Azure, and Google Cloud."
          link="/certificates/Cloud-Computing.pdf"
        />

        <CertificateCard 
          title="Technology Job Simulation"
          org="Deloitte"
          year="January 9, 2026"
          description="Successfully completed practical tasks in coding and development during a job simulation program."
          link="/certificates/Certificate.pdf"
        />

        <CertificateCard 
          title="Innovation Ambassador (IA) Training"
          org="MoE's Innovation Cell & AICTE"
          year="November 27, 2025"
          description="Underwent 'Foundation Level' training comprising 16 sessions and 30 contact hours."
          link="/certificates/IA Online Training Certificate (2).pdf"
        />

        <CertificateCard 
          title="ICSTDTSD International Conference"
          org="Kalinga University"
          year="October 31, 2025"
          description="Participated and presented a paper at the International Conference on Smart Technologies and Digital Transformation for Sustainable Development."
          link="/certificates/International-Conference .pdf"
        />

        <CertificateCard 
          title="Hands-on Training on Auto-ML Basics and EDA" 
          org="Kalinga University" 
          year="August 22, 2025" 
          description="Participated in a training session on Automated Machine Learning (Auto-ML) and Exploratory Data Analysis (EDA) using AI tools."
          link="/certificates/Sanskriti Kumari.pdf"
        />

        <CertificateCard 
          title="Cybersecurity Skilling Course"
          org="Tech Mahindra Foundation & Skill India"
          year="August 2, 2025"
          description="Successfully completed a 10-hour online skilling course focused on modern Cybersecurity concepts."
          link="/certificates/Cyber-Security-Certificate.pdf"
        />

        <CertificateCard 
          title="ICETSD International Conference"
          org="Kalinga University"
          year="April 18, 2025"
          description="Attended and presented a paper at the International Conference on Emerging Technologies for Sustainable Development."
          link="/certificates/International-Conference-1.pdf"
        />

        <CertificateCard 
          title="Two-Day Certification Program on Web Development" 
          org="Kalinga University" 
          year="February 25, 2025" 
          description="Participated in a two-day certification program focused on Web Development organized by the Faculty of CS and IT."
          link="/certificates/Web-Dev.pdf"
        />

        <CertificateCard 
          title="Hands-on Training on Python, Coding & Robotics"
          org="IEEE KU SB & BDS Education"
          year="January 25, 2025"
          description="Participated in an intensive one-day hands-on training session covering Python, coding fundamentals, and robotics."
          link="/certificates/One-Day.pdf"
        />

        <CertificateCard 
          title="Robotics Training - 3rd Position Winner"
          org="IEEE KU SB"
          year="September 20, 2024"
          description="Secured 3rd position for the project 'IR Remote Controlled Robot' during a one-week hands-on robotics training."
          link="/certificates/Robotics-3rd.pdf"
        />
      </div>
    </div>
  );
};

export default Certificates;