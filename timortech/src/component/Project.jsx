import React from "react";
import Slider from "react-slick";
import "../styles/styles.css";
import { FaGithub, FaLink } from "react-icons/fa";
import sample from "../assets/166291.jpg";
import sample2 from "../assets/images.jpeg";

function Project() {
  const projects = [
    {
      image1: sample,
      image2: sample2,
      title: "Project 1",
      description:
        "A web-based platform that allows users to search and order products...",
      githubLink: "https://github.com/Timor-Tech",
      liveLink: "https://shop.live",
      tags: ["MERN", "Redux", "Material UI"],
    },
    {
      image1: sample2,
      image2: sample,
      title: "Project 2",
      description:
        "A platform for improving English fluency with meticulously crafted lessons...",
      githubLink: "https://github.com/Timor-Tech",
      liveLink: "https://englishenhancer.live",
      tags: ["ReactJS", "Material UI", "SCSS"],
    },
    {
      image1: sample,
      image2: sample2,
      title: "Project 3",
      description:
        "A web app that enables users to find people with the same interests in their career...",
      githubLink: "https://github.com/Timor-Tech",
      liveLink: "https://proconnect.live",
      tags: ["MERN", "REST API", "Tailwind"],
    },
  ];

  return (
    <div className="col-md-12">
      <div className="container">
        <p className="text-muted mb-0">Our work</p>
        <h2 className="fw-bold mb-1 project-heading">Projects</h2>
        <p className="text-muted">
          Explore a selection of our latest web development projects, showcasing
          our skills in full stack development, React, MongoDB, and more.
        </p>
        <div className="row justify-content-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              images={[project.image1, project.image2]}
              title={project.title}
              description={project.description}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  images,
  title,
  description,
  githubLink,
  liveLink,
  tags,
}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="col-md-4">
      <div className="project-card">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`${title} - ${index + 1}`}
                className="project-image"
              />
            </div>
          ))}
        </Slider>
        <div className="content">
          <h5>{title}</h5>
          <p>{description}</p>
          <div className="links">
            <a
              href={githubLink}
              className="icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href={liveLink}
              className="icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLink />
            </a>
          </div>
          <div className="tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
