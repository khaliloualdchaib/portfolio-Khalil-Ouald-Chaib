import React from "react";
import mock05 from "../assets/images/2.png";
import mock06 from "../assets/images/mock06.png";
import mock07 from "../assets/images/mock07.png";
import mock08 from "../assets/images/mock08.png";
import mock09 from "../assets/images/musicsheet.jpg";
import mock10 from "../assets/images/doodlejump.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://github.com/khaliloualdchaib/Project_doodle_jump"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock10} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/khaliloualdchaib/Project_doodle_jump"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Doodle Jump</h2>
          </a>
          <p>Remade the doodle jump game in C++</p>
        </div>
        <div className="project">
          <a
            href="https://github.com/khaliloualdchaib/Annotation_Binary_Classification"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock09} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/khaliloualdchaib/Annotation_Binary_Classification"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Human Annoitation Classifier</h2>
          </a>
          <p>
            Using image recognition techniques, I was able to classify whether a
            music sheet image contained any handwritten annotations.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/khaliloualdchaib/Pro-League-of-Legends-Prediction-Tool/tree/main"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock08} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/khaliloualdchaib/Pro-League-of-Legends-Prediction-Tool/tree/main"
            target="_blank"
            rel="noreferrer"
          >
            <h2>League of Legends Prediction & Analytics Tool</h2>
          </a>
          <p>
            Developed a web-based tool that allows users to input champion picks
            from a League of Legends match and instantly view detailed player
            and champion statistics. The tool also predicts the winning team,
            first blood, and first baron outcomes using a custom-built
            statistical model. Built with Python on the backend and ReactJS on
            the frontend, the application delivers fast, data-driven insights
            for competitive and casual players alike.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/khaliloualdchaib/LLM_SUPPORT"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock07} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/khaliloualdchaib/LLM_SUPPORT"
            target="_blank"
            rel="noreferrer"
          >
            <h2>LLM-Powered RAG System for Salesforce Documentation Support</h2>
          </a>
          <p>
            An intelligent Retrieval-Augmented Generation (RAG) system that
            helps users extract accurate, context-aware answers from Salesforce
            documentation. This tool leverages a Large Language Model (LLM)
            backend to understand natural language queries and fetch the most
            relevant information from a curated set of Salesforce docs,
            streamlining support and reducing time spent searching. Tech Stack:
            Python · LangChain · ollama
          </p>
        </div>
        <div className="project">
          <div>
            <img src={mock06} className="zoom" alt="thumbnail" width="100%" />
          </div>
          <div>
            <h2>AI Voice Agent Appointment Setter</h2>
          </div>
          <p>
            The system can handle inbound calls, engage users in natural
            conversation, and schedule appointments seamlessly, no human needed.
          </p>
        </div>
        <div className="project">
          <a
            href="https://www.linkedin.com/posts/khalil-ouald-chaib-4b4715312_ai-recruiting-chatbot-activity-7298256837584261120-NUcH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE976YgBS0gThs2DDxAuuEHXZV5pWkMQg5g"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock05} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://www.linkedin.com/posts/khalil-ouald-chaib-4b4715312_ai-recruiting-chatbot-activity-7298256837584261120-NUcH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE976YgBS0gThs2DDxAuuEHXZV5pWkMQg5g"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Recruiting Chatbot</h2>
          </a>
          <p>
            I created a recruiting chatbot using Botpress that helps users find
            job opportunities tailored to their profiles. Just enter your skills
            and experience, and the bot suggests relevant positions, and if
            you’re ready to apply, it can even apply for you automatically!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
