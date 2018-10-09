import React, { Component } from 'react';
import './index.css'
class Quiz extends React.Component {
  render () {
    return (
      <div className="QuizContainer">
        <h2>Quiz</h2>
        <div className="Quiz">
          <h1>Vad kan du om politiska mord?</h1>
          <div className="startQuiz">Starta quiz</div>
        </div>
      </div>
    )
  }
}

export default Quiz;
