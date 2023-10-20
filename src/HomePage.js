import React from 'react';

const HomePage = ({ containerWidth, containerHeight }) => {
  const containerStyle = {
    maxWidth: containerWidth || '1000px',
    height: containerHeight || '600px', // Container dimensions
    margin: '0 auto', // Center horizontally
    padding: '20px', // Padding
    backgroundColor: '#f7f7f7', // Background color
    backgroundImage: 'url("https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/ddbf5684906513.Y3JvcCw4MDgsNjMyLDAsMA.png")', // Background image
    backgroundSize: 'cover', // Background image size
  };

  const h1Style = {
    color: 'brown', // Text color
    fontSize: '45px', // Font size
    fontStyle: 'italic', // Font style
    textAlign: 'center', // Text alignment
  };

  const pStyle = {
    textAlign:'center',
    color:'brown',
    fontStyle:'italic'// Text alignment
  };

  return (
    <div id="HomePage"style={containerStyle}>
      <h1 style={h1Style}>Welcome to Sweet Harmony Bakery</h1>
      <p style={pStyle}>Crafting Sweet Memories, One Bite at a Time</p>
    </div>
  );
};

export default HomePage;
