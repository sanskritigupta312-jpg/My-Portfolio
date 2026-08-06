import React from "react";

import {
  FaCss3,
  FaFigma,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";

import {
  SiExpress,
  SiFirebase,
  SiGit,
  SiMongodb,
  SiRedis,
  SiTailwindcss,
  SiVercel,
  SiVite,
} from "react-icons/si";

import { RiCodeSSlashLine } from "react-icons/ri";

const Experience = () => {
  return (
    <section id="Experience" className="p-10 md:p-24 bg-[#0b1228]">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center mb-8">
          Experience
        </h1>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-10">
          Here are the tools, technologies, and projects that define my hands-on
          software experience.
        </p>

        <div className="grid gap-8 md:grid-cols-2 items-start">
          <article className="rounded-2xl border border-white/10 bg-black/30 p-6 shadow-xl backdrop-blur">
            <h2 className="text-2xl font-semibold text-white mb-6 text-center">
              Technologies I Work With
            </h2>
            <div className="grid grid-cols-3 gap-4 px-4 sm:grid-cols-4">
              {[
                { icon: <FaHtml5 size={34} color="#E34F26" />, label: "HTML" },
                { icon: <FaCss3 size={34} color="#1572B6" />, label: "CSS" },
                { icon: <FaReact size={34} color="#61DAFB" />, label: "React" },
                {
                  icon: <FaJs size={34} color="#F7DF1E" />,
                  label: "JavaScript",
                },
                {
                  icon: <SiTailwindcss size={34} color="#06B6D4" />,
                  label: "Tailwind CSS",
                },
                { icon: <SiVite size={34} color="#646CFF" />, label: "Vite" },
                {
                  icon: <FaNodeJs size={34} color="#339933" />,
                  label: "Node.js",
                },
                {
                  icon: <SiExpress size={34} color="#FFFFFF" />,
                  label: "Express.js",
                },
                {
                  icon: <SiMongodb size={34} color="#47A248" />,
                  label: "MongoDB",
                },
                {
                  icon: <SiFirebase size={34} color="#FFCA28" />,
                  label: "Firebase",
                },
                { icon: <SiGit size={34} color="#F05032" />, label: "Git" },
                {
                  icon: <FaGithub size={34} color="#FFFFFF" />,
                  label: "GitHub",
                },
                { icon: <FaFigma size={34} color="#F24E1E" />, label: "Figma" },
                {
                  icon: <SiVercel size={34} color="#FFFFFF" />,
                  label: "Vercel",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-2 rounded-lg p-2 hover:bg-white/10 transition"
                >
                  <div className="bg-slate-900 p-2 rounded-md">{item.icon}</div>
                  <span className="text-xs md:text-sm text-gray-300">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-white/10 bg-black/30 p-6 shadow-xl backdrop-blur">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Frontend Developer Intern
            </h2>
            <p className="text-gray-400 italic mb-4">
              CodeAir Software Solutions · May 2026 – Present
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                Developing responsive web applications using ReactJS,
                JavaScript, and Tailwind CSS.
              </li>
              <li>Building reusable components and integrating REST APIs.</li>
              <li>
                Collaborating with the development team using Git and Agile
                workflows.
              </li>
              <li>
                Improving UI performance, fixing bugs, and enhancing user
                experience.
              </li>
            </ul>
          </article>
          <article className="rounded-2xl border border-white/10 bg-black/30 p-6 shadow-xl backdrop-blur">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Web Development Intern
            </h2>
            <p className="text-gray-400 italic mb-4">
              CodeWebx Technologies · Nov 2025 – Feb 2026
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                Built responsive UI components with React and Tailwind CSS.
              </li>
              <li>
                Created reusable hooks and modular component architecture.
              </li>
              <li>Collaborated on Agile sprints and Git workflows.</li>
              <li>Optimized performance and solved UI/UX issues.</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
