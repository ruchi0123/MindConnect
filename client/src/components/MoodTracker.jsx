import React, { useState } from 'react';
import { saveMood } from './api';  // Import the saveMood function from api.js

function MoodTracker() {
  const [mood, setMood] = useState('');  // State to store the mood input from user

  const handleMoodChange = (e) => {
    setMood(e.target.value);  // Update the state when user types in the input field
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!mood.trim()) {
      alert('Please enter your mood.');
      return;  // Prevent submission if mood is empty
    }

    try {
      // Call saveMood function from api.js and pass the mood data to it
      await saveMood({ mood });
      setMood('');  // Reset the mood input field after submission
      alert('Mood saved successfully!');  // Alert the user about the successful mood save
    } catch (error) {
      console.error('Error saving mood:', error);
      alert('Error saving mood!');  // Show an error message if the save operation fails
    }
  };

  return (
    <div>
      <h2>Mood Tracker</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="How are you feeling today?"
          value={mood}  // Value of the input field is tied to the mood state
          onChange={handleMoodChange}  // Update the state whenever the input changes
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MoodTracker;
