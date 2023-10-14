import React, { useState, useEffect } from 'react';

function WordCount({ text }) 
{
  const [wordCount, setWordCount] = useState(0);
  useEffect(() => 
  {
    const words = text.split(/\s+/);
    const filteredWords = words.filter(word => word !== '');
    setWordCount(filteredWords.length);
  }, [text]);

  return (
    <div className="word-count">
      Word Count: {wordCount}
    </div>
  );
}

export default WordCount;
