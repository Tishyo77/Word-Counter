import React from 'react';
import './Header.css'; 

function Header({text}) 
{
  return (
    <div className="centered-text-container">
      <h1 className="centered-text">{text}</h1>
    </div>
  );
}

export default Header;
