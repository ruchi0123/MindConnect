import React, { useState } from 'react';

function Journal() {
  const [entry, setEntry] = useState('');

  const handleChange = (e) => {
    setEntry(e.target.value);  // Update journal entry state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could save the journal entry to your backend
    alert('Journal entry saved!');
    setEntry('');  // Reset journal entry after submission
  };

  return (
    <div>
      <h2>Journal</h2>
      <textarea 
        placeholder="Write your thoughts..." 
        value={entry} 
        onChange={handleChange} 
      />
      <button onClick={handleSubmit}>Save Entry</button>
    </div>
  );
}

export default Journal;
