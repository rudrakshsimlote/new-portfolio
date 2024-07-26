import React from 'react';
import Slider from 'react-slick';
import { FaGithub } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Projects.css'; // Create a CSS file for additional styles

const projects = [
  {
    title: 'Codestorm Internship Tracker',
    description: 'Planned and developed a web application with a team of 3 to track internship applications, improving application tracking efficiency by 40%.',
    link: 'https://github.com/rudrakshsimlote/Codestorm-Internship-Tracker',
    image: '/path/to/image1.png',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
  },
  {
    title: 'Codenames Game Project',
    description: 'Created an interactive, multiplayer online version of the Codenames board game, increasing accessibility for remote play by 50%.',
    link: 'https://github.com/rudrakshsimlote/Codenames-Game',
    image: '/path/to/image2.png',
    technologies: ['React', 'TypeScript', 'Node.js', 'Firebase'],
  },
  {
    title: 'Matrimonial Application',
    description: 'Developed a full-stack web application for matching individuals, resulting in a 30% increase in successful matches within the local community.',
    link: 'https://github.com/rudrakshsimlote/Matrimonial-Application',
    image: '/path/to/image3.png',
    technologies: ['Angular', 'Node.js', 'React', 'PostgreSQL', 'Flutter'],
  },
  {
    title: 'Personal Portfolio Website',
    description: 'Developed and maintained a personal website to showcase projects, increasing online visibility by 50%.',
    link: 'https://github.com/rudrakshsimlote/Personal-Portfolio',
    image: '/path/to/image4.png',
    technologies: ['ReactJS', 'HTML', 'CSS'],
  },
  {
    title: 'Discord Commands/Reactions Bot',
    description: 'Designed and deployed a feature-rich Discord bot, improving server functionality by 35%.',
    link: 'https://github.com/rudrakshsimlote/Discord-Bot',
    image: '/path/to/image5.png',
    technologies: ['JavaScript', 'JSON'],
  },
];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="projects" className="w-full py-20 px-10 bg-gray-900 text-white">
      <h2 className="projects-title text-4xl font-bold mb-5">Projects</h2>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="p-5">
            <div className="project-card bg-gray-800 p-5 rounded-lg shadow-lg h-full transition-transform transform hover:scale-105">
              <img src={project.image} alt={project.title} className="rounded-lg mb-4 project-image" />
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-lg mb-3">{project.description}</p>
              <a href={project.link} className="text-designColor hover:underline" target="_blank" rel="noopener noreferrer">
                <FaGithub className="inline mr-2" /> View Project
              </a>
              <div className="mt-4">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-next-arrow`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow custom-prev-arrow`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

export default Projects;
