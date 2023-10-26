import React from 'react';
import './Home.css'; // Import the CSS file

const Home = () => {
  const profileImageUrl = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'; // URL to your profile image

  return (
    <div className="home-container">
      <div className="image-container">
        <img src={profileImageUrl} alt="Profile" className="profile-image" />
      </div>
      <div className="content-container">
        <h1 className="title">Welcome to My Portfolio!</h1>
        <p className="description">Explore my work and skills.</p>
      </div>
    </div>
  );
};

export default Home;
