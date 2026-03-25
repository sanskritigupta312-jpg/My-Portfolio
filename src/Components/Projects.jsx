import React from 'react'
import ProjectCard from './Projectcard.jsx'
import ShoeWebsiteImg from '../assets/Shoe-Web.png'
import PortfolioImg from '../assets/portfolio.png'
import AmazonImg from '../assets/amazon.png'
import FlipkartImg from '../assets/flipkart.png'
import TypingTestImg from '../assets/typingtest.png'
import TicTacToeImg from '../assets/tictactoe.png'
import RockPaperScissor from '../assets/rockpaperscissor.png'

const Projects = () => {
  return (
    <div id='Projects' className='p-10 md:p-24 text-white'>
      <h1 className='text-2xl md:text-4xl font-bold text-white'>Projects</h1>
      <div className='py-10 px-8 flex flex-wrap gap-5'>
        <ProjectCard title="Modern Shoe Store UI" pic={ShoeWebsiteImg} description="A sleek and modern footwear e-commerce UI built using React.js. This project focuses on delivering a clean, responsive, and visually appealing UI inspired by premium shoe brands." DemoLink="https://modern-shoe-web-ui-react.vercel.app/" SourceLink="https://github.com/sanskritigupta312-jpg/modern-shoe-web-UI-react.git" />
        <ProjectCard title="Personal Portfolio Website" pic={PortfolioImg} description="A personal portfolio website built using React.js and TailwindCSS to showcase my skills, projects, and experience. The website features a clean and modern design with smooth animations and responsive layout." DemoLink="https://my-portfolio-psi-liard-97.vercel.app/" SourceLink="https://github.com/sanskritigupta312-jpg/My-Portfolio.git" />
        <ProjectCard title="Typing Speed Test" pic={TypingTestImg} description="A simple typing speed test application" DemoLink="https://sanskritigupta312-jpg.github.io/Typing-Test/" SourceLink="https://github.com/sanskritigupta312-jpg/Typing-Test" />
        <ProjectCard title="Amazon Clone" pic={AmazonImg} description="A clone of the Amazon shopping website (Only for Large Screen)" DemoLink="https://sanskritigupta312-jpg.github.io/Amazon-clone/" SourceLink="https://github.com/sanskritigupta312-jpg/Amazon-clone" />
        <ProjectCard title="Flipkart Clone" pic={FlipkartImg} description="A clone of the Flipkart shopping website (Only for Large Screen)" DemoLink = "https://sanskritigupta312-jpg.github.io/Flipkart-Clone-Designing-Web/" SourceLink="https://github.com/sanskritigupta312-jpg/Flipkart-Clone-Designing-Web" />
        <ProjectCard title="Tic-Tac_Toe Game" pic={TicTacToeImg} description="A simple tic-tac-toe game built with HTML and CSS" DemoLink="https://sanskritigupta312-jpg.github.io/Tic-Tac-Toe/" SourceLink="https://github.com/sanskritigupta312-jpg/Tic-Tac-Toe.git" />
        <ProjectCard title="Rock-Paper-Scissors Game" pic={RockPaperScissor} description="A simple rock-paper-scissors game built with HTML and CSS" DemoLink="https://sanskritigupta312-jpg.github.io/Rock-Paper-Scissors/" SourceLink="https://github.com/sanskritigupta312-jpg/Rock-Paper-Scissors.git" />

      </div>
    </div>
  )
}

export default Projects