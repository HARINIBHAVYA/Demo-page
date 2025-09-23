import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [nameMessage, setNameMessage] = useState('');
  const [countMessage, setCountMessage] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    document.title = `Count reflect ${count}`;
  }, [count]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleIncrement = () => {
    if (count >= 10) {
      setCountMessage('👻👻 Maximum count reached 👻👻');
      return;
    }

    const newCount = count + 1;
    setCount(newCount);

    if (newCount === 10) {
      setCountMessage('Upto 10 cliks is allowed!');
    } else {
      setCountMessage('');
    }
  };

  const handleReset = () => {
    setCount(0);
    setCountMessage('🔄 Count reset to 0 ');
  };

  const handleSubmitName = () => {
    if (name.trim() !== '') {
      setSubmitted(true);
      setNameMessage(`✅ Name submitted: ${name}`);
    } else {
      setNameMessage('⚠️ Please enter a name before submitting.');
    }
  };

  return (
    <div className="container">
      <h1>Demo</h1>

      {/* Name Card */}
      <div className="card">
        <p> Welcome, {submitted ? name : 'User'}!</p>
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={e => setName(e.target.value)}
          className={submitted ? 'submitted-input' : ''}
        />
        <button className='rounded' onClick={handleSubmitName}>Submit Name</button>
        {nameMessage && <p style={{ color: 'green', fontWeight: 'bold' }}>{nameMessage}</p>}
      </div>

      {/* Count Card */}
      <div className="card">
        <p>Number of times clicked <strong>{count}</strong>...</p>
        <button className="pill" onClick={handleIncrement}>Click Me</button>
        <button className="pill" onClick={handleReset}>Reset</button>
        {countMessage && <p style={{ color: 'green', fontWeight: 'bold' }}>{countMessage}</p>}
      </div>
    </div>
  );
}

export default App;
