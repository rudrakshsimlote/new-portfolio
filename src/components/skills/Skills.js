import React from 'react';
import { FaJava, FaPython, FaReact, FaNodeJs, FaGit, FaDocker, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiAngular, SiPostgresql, SiSpring, SiVisualstudiocode, SiPycharm, SiIntellijidea, SiEclipseide, SiWordpress, SiAndroidstudio, SiNumpy, SiTensorflow, SiOpencv, SiPandas, SiC, SiR } from 'react-icons/si';
import './Skills.css';

const skills = {
  "Programming Languages": [
    { name: 'Java', icon: <FaJava className="skill-icon java-icon" /> },
    { name: 'Python', icon: <FaPython className="skill-icon python-icon" /> },
    { name: 'Angular', icon: <SiAngular className="skill-icon angular-icon" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="skill-icon postgresql-icon" /> },
    { name: 'JavaScript', icon: <FaJsSquare className="skill-icon js-icon" /> },
    { name: 'HTML/CSS', icon: <FaHtml5 className="skill-icon html-icon" />, extraIcon: <FaCss3Alt className="skill-icon css-icon" /> },
    { name: 'C', icon: <SiC className="skill-icon c-icon" /> },
    { name: 'R', icon: <SiR className="skill-icon r-icon" /> }
  ],
  "Frameworks": [
    { name: 'React', icon: <FaReact className="skill-icon react-icon" /> },
    { name: 'Node.js', icon: <FaNodeJs className="skill-icon nodejs-icon" /> },
    { name: 'Spring', icon: <SiSpring className="skill-icon spring-icon" /> }
  ],
  "Developer Tools": [
    { name: 'Git', icon: <FaGit className="skill-icon git-icon" /> },
    { name: 'Docker', icon: <FaDocker className="skill-icon docker-icon" /> },
    { name: 'Visual Studio Code', icon: <SiVisualstudiocode className="skill-icon vscode-icon" /> },
    { name: 'PyCharm', icon: <SiPycharm className="skill-icon pycharm-icon" /> },
    { name: 'IntelliJ IDEA', icon: <SiIntellijidea className="skill-icon intellij-icon" /> },
    { name: 'Eclipse', icon: <SiEclipseide className="skill-icon eclipse-icon" /> },
    { name: 'Wordpress', icon: <SiWordpress className="skill-icon wordpress-icon" /> },
    { name: 'Android Studio', icon: <SiAndroidstudio className="skill-icon androidstudio-icon" /> }
  ],
  "Libraries": [
    { name: 'NumPy', icon: <SiNumpy className="skill-icon numpy-icon" /> },
    { name: 'TensorFlow', icon: <SiTensorflow className="skill-icon tensorflow-icon" /> },
    { name: 'OpenCV', icon: <SiOpencv className="skill-icon opencv-icon" /> },
    { name: 'Pandas', icon: <SiPandas className="skill-icon pandas-icon" /> }
  ],
  "Languages": [
    { name: 'English' },
    { name: 'Hindi' },
    { name: 'Spanish' }
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="w-full py-20 px-10 bg-gray-900 text-white">
      <h2 className="skills-title text-4xl font-bold mb-5 text-center">Skills</h2>
      <p className="skills-description text-lg mb-10 text-center">Here are some of the technologies I have worked with.</p>
      {Object.keys(skills).map((category, index) => (
        <div key={index} className="mb-10">
          <h3 className="skills-category text-2xl font-semibold mb-5">{category}</h3>
          <div className="flex flex-wrap gap-4">
            {skills[category].map((skill, idx) => (
              <div key={idx} className="flex items-center gap-2 p-4 bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                {skill.icon}
                {skill.extraIcon && skill.extraIcon}
                <span className="text-lg">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
