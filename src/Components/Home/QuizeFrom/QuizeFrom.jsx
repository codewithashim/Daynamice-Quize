"use client"
import React, { useState } from 'react';

const QuizeFrom = () => {
  const [name, setName] = useState('');
  const [topic, setTopic] = useState('');
 
  const apiKey = process.env.API_KEY;

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Call your server endpoint to fetch quiz questions based on the entered topic
    const response = await fetch('http://localhost:5000/api/v1/quiz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        topic: topic, // Pass the entered topic from your form
      }),
    });
    const data = await response.json();
    console.log(response)

    if (data) {
      console.log(data)
      // Store the quiz data in localStorage or pass it to the next page using state management libraries like Redux, MobX, etc.
      localStorage.setItem('quiz', JSON.stringify(data));
      localStorage.setItem('name', name);

      // Redirect to the quiz page
      window.location.href = '/quize';
  
    } else {
      // Handle API error here
      console.error('Failed to fetch quiz questions from the API.', data.error);
    }
  };


  return (
    <section>
      <form className='mainQuizeFrom' onSubmit={handleSubmit}>
        <div className="quizeFormData">
          <div className="quizeFormInput">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="quizeFormInput">
            <label htmlFor="searchInput">Search Now</label>
            <input
              type="text"
              name="searchInput"
              id="searchInput"
              placeholder="Type Quize Topics"
              value={topic}
              onChange={(event) => setTopic(event.target.value)}
            />
          </div>

          <div className="quizeButton">
            <button type="submit" className='quizeBtn'>Start Qize</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default QuizeFrom;