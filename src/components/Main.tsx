import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profile from '../assets/images/me.png';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profile} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/khaliloualdchaib" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/khalil-ouald-chaib-4b4715312/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Khalil Ouald Chaib</h1>
          <p>AI Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/khaliloualdchaib" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/khalil-ouald-chaib-4b4715312/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;