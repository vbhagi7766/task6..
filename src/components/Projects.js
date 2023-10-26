// import React from 'react';

// const Projects = () => {
//   return (
//     <div className="content">
//       <h2>Projects</h2>
//       <p>I have completed a AIML project on SMS_SPAM Classification.</p>
//       <p>I have completed a project on Hate_speech detection</p>
//       <p>I have wriiten a Reserach paper on PCOD/PCOS</p>
//     </div>
//   );
// };

// export default Projects;
import React from 'react';
import './Projects.css'; // Import the CSS file

const Projects = () => {
  return (
    <div className="project-container">
      <div className="project-card">
        <h3 className="project-title">SMS_SPAM Classification</h3>
        <p className="project-description">
          As we can see today, there are many spam messages are floating in our mobiles.so,in order to control it I have designed  a AIML lagorithm which classify the messages into spam and not spam.
        </p>
      </div>
      <div className="project-card">
        <h3 className="project-title">Hate_speech detection</h3>
        <p className="project-description">
          As we can see today, there are many hate messgaes are coming in all our social media accounts, by this many people may feel offended and it can hurt the people in many ways. so in order to minimize them , I have designed  a AIML lagorithm which classify the comments/messgaes to hate speech, offensive or neither hate nor offensive.
        </p>
      </div>
      <div className="project-card">
        <h3 className="project-tittletitle">Prediction of PCOD/PCOS</h3>
        <p className="project-description">
          As we can see today, there are many girls out there suffering from Pcod/pcos disesase. so in order to minimize its effects I thought of having an AIML algorithm which minimizes the efgect on girls lives by predicting it beforehand.
        </p>
      </div>
      <div className="project-card">
        <h3 className="project-tittletitle">Soil Moist sensor</h3>
        <p className="project-description">
          This is a sensor which detects weather a soil is moist or not by using the sensors and help the farmers to get to knaow much about the crops.
        </p>
      </div>
      <div className="project-card">
        <h3 className="project-tittletitle">Acci-Track</h3>
        <p className="project-description">
          This is a alaram based sensor which notifies to respected contact given and sends the location if there is any accident occured.
        </p>
      </div>
    </div>
  );
};

export default Projects;
