"use client"
import React, { useState } from 'react';
import Router from 'next/router';

const QuizeFrom = () => {
  const [name, setName] = useState('');
  const [topic, setTopic] = useState('');
  
  const apiKey = process.env.API_KEY;

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Call OpenAI API to fetch quiz questions based on the entered topic
    const response = await fetch('https://api.openai.com/v1/quiz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add your OpenAI API key here
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        context: topic,
        questions: 10, // Number of quiz questions you want
      }),
    });

    if (response.ok) {
      const data = await response.json();
  
      // Store the quiz data in localStorage or pass it to the next page using state management libraries like Redux, MobX, etc.
      localStorage.setItem('quiz', JSON.stringify(data));
  
      // Navigate to the quiz page
      Router.push('/allQuize');
    } else {
      // Handle API error here
      console.error('Failed to fetch quiz questions from the API.');
    }
  };

  

  return (
    <section>
      <form className='mainQuizeFrom'>
        <div className="quizeFormData">
          <div className="quizeFormInput">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Enter Your Name" />
          </div>
          <div className="quizeFormInput">
            <label htmlFor="searchInput">Search Now</label>
            <input type="text" name="searchInput" id="searchInput" placeholder="Type Somthing" />
          </div>

          <div className="quizeButton">
            <button type="submit" className='quizeBtn'>Submit</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default QuizeFrom;