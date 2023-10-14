import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import TextArea from './TextArea';
import WordCount from './WordCount';

function App() {
  const [text, setText] = useState('');

  return (
    <div className="App">
      <Header text="Responsive Paragraph Word Counter" />
      <TextArea text={text} setText={setText} />
      <WordCount text={text} /> 
    </div>
  );
}

export default App;
