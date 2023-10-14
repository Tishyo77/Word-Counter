import React from 'react';

function TextArea({ text, setText }) 
{
  const handleTextChange = (event) => 
  {
    setText(event.target.value);
  };

  return (
    <div className="text-area-container">
      <textarea
        className="text-area"
        rows="15"
        cols="70"
        value={text} 
        onChange={handleTextChange} 
      />
    </div>
  );
}

export default TextArea;
