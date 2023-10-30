// import React from 'react';

// const About = () => {
//   return (
//     <div className="content">
//       <h1>About Me</h1>
//       <h2>Hello</h2>
//       <h3>My Name is Vangala Bhargavi.</h3>
//       <p>
//       I am currently pursuing my B.tech in AIML with 9.17 cgpa in VIT-Amaravathi, Andhra Pradesh.
//       </p>
      
//       <p>
//         I have completed my Secondary education with 96.8 percentage from the Bhashyam junior college , Guntur, Andhra Pradesh
//       </p>
//       <p>
//       I have completed my primary education with 93.1 percentage from the Bhashyam public college , Guntur, Andhra Pradesh
//       </p>
//     </div>
//   );
// };

// export default About;
import React from 'react';
import './About.css'; // Import the CSS file

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-heading">About Me</h2>
      <h1 className="about-content">
      My Name is Vangala Bhargavi.
      </h1>

      <p>
      I am currently pursuing my B.tech in AIML with 9.17 cgpa in VIT-Amaravathi, Andhra Pradesh.
      </p>
    
    
      <p>
      I have completed my Secondary education with 96.8 percentage from the Bhashyam junior college , Guntur, Andhra Pradesh.
      </p>
      <p>
      I have completed my primary education with 93.1 percentage from the Bhashyam public School , Guntur, Andhra Pradesh
      </p>
      
    
      
    </div>
  );
};

export default About;
