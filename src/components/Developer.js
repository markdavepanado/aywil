import React from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

import "../styles/Developer.css";

const Developer = () => {
  return (
    <div className='developer'>
      <h1 className='developer__logo'>
        <span className='developer__logo--green'>Ay</span>
        <span className='developer__logo--orange'>wil</span>
      </h1>
      <div className='developer__social-container'>
        <h2 className='developer__h2'>You can reach me here.</h2>
        <div className='developer__social-links'>
          <a href='https://www.facebook.com/dabeeeeeee7' target='_blank'>
            <FacebookIcon
              className='developer__icon'
              style={{ color: "#0572E7" }}
            />
          </a>
          <a href='https://github.com/markdavepanado' target='_blank'>
            <GitHubIcon
              className='developer__icon'
              style={{ color: "#000000" }}
            />
          </a>
          <a
            href='https://www.linkedin.com/in/mark-dave-panado-0040b2180/'
            target='_blank'
          >
            <LinkedInIcon
              className='developer__icon'
              style={{ color: "#0A66C2" }}
            />
          </a>
          <a href='mailto:markdavepanado@gmail.com'>
            <EmailIcon
              className='developer__icon'
              style={{ color: "#ef5350" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Developer;
// () , < ! @ # $ % ^ & * 0 1 2 3 4 5 6 7 8 9
