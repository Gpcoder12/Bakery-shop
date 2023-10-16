import React from 'react';

const HomePage = () => {
  const containerStyle = {
    maxWidth: '800px',      // Container dimensions
    margin: '0 auto',       // Center horizontally
    padding: '20px',        // Padding
    backgroundColor: '#f7f7f7',  // Background color
    backgroundImage: 'url("your-background-image-url.jpg")',  // Background image
    backgroundSize: 'cover',  // Background image size
  };

  const h1Style = {
    color: 'teal',          // Text color
    fontSize: '28px',       // Font size
    fontStyle: 'italic',   // Font style
    textAlign: 'center',    // Text alignment
  };

  const pStyle = {
    textAlign: 'center',    // Text alignment
  };

  return (
    <div style={containerStyle}>
      <h1 style={h1Style}>Welcome to Sweet Harmony Bakery</h1>
      <p style={pStyle}>Crafting Sweet Memories, One Bite at a Time</p>
    </div>
  );
};

export default HomePage;


