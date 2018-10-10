import React, { Component } from 'react';
import './index.css'
class Quiz extends Component {
  render () {
    return (
      <div className="QuizContainer">
        <h2>Quiz</h2>
        <div className="Quiz">
          <h1>Vad kan du om politiska mord?</h1>
          <div className="startQuiz"><a href="http://localhost:3001/">Starta quiz</a></div>
        </div>
      </div>
    )
  }
}

export default Quiz;
