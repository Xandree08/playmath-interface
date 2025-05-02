import { useState } from 'react';
import './matriz.css'; // Importando o arquivo CSS

// Questões do quiz
const questions = [
  {
    id: 1,
    question: "Qual é o determinante da seguinte matriz de identidade 2x2?",
    matrix: [
      [1, 0],
      [0, 1]
    ],
    options: ["A) 0", "B) 1", "C) 2", "D) -1"],
    correct: 1 // B) 1
  },
  {
    id: 2,
    question: "O que acontece quando multiplicamos uma matriz por sua inversa?",
    matrix: [
      [3, 1],
      [2, 2]
    ],
    options: ["A) Obtemos a matriz nula", "B) Obtemos a matriz de identidade", "C) Obtemos a matriz transposta", "D) Obtemos a matriz original"],
    correct: 1 // B) Obtemos a matriz de identidade
  },
  {
    id: 3,
    question: "Qual é o traço da seguinte matriz?",
    matrix: [
      [4, 0, 2],
      [1, 3, 5],
      [0, 1, 6]
    ],
    options: ["A) 13", "B) 10", "C) 15", "D) 9"],
    correct: 0 // A) 13 (4+3+6)
  },
  {
    id: 4,
    question: "Para que duas matrizes sejam multiplicáveis, é necessário que:",
    matrix: [
      [2, 3],
      [1, 4]
    ],
    options: [
      "A) O número de linhas da primeira seja igual ao número de colunas da segunda",
      "B) O número de colunas da primeira seja igual ao número de linhas da segunda",
      "C) Ambas tenham o mesmo número de linhas",
      "D) Ambas tenham o mesmo número de colunas"
    ],
    correct: 1 // B) O número de colunas da primeira seja igual ao número de linhas da segunda
  },
  {
    id: 5,
    question: "Qual é o resultado da multiplicação de matriz A por um escalar 2?",
    matrix: [
      [1, 2],
      [3, 4]
    ],
    options: [
      "A) [[2, 4], [6, 8]]",
      "B) [[1, 4], [3, 8]]",
      "C) [[3, 4], [5, 6]]",
      "D) [[2, 2], [2, 2]]"
    ],
    correct: 0 // A) [[2, 4], [6, 8]]
  },
  {
    id: 6,
    question: "Uma matriz quadrada é chamada de singular quando:",
    matrix: [
      [1, 2],
      [2, 4]
    ],
    options: [
      "A) Sua transposta é igual a ela mesma",
      "B) Seu determinante é igual a 1",
      "C) Seu determinante é igual a 0",
      "D) Sua diagonal principal tem apenas valores não nulos"
    ],
    correct: 2 // C) Seu determinante é igual a 0
  }
];

export default function MatrixQuizGame() {
  const [flippedCards, setFlippedCards] = useState({});
  const [score, setScore] = useState({ correct: 0, wrong: 0 });
  const [answered, setAnswered] = useState({});

  const handleCardFlip = (questionId) => {
    setFlippedCards(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const handleAnswer = (questionId, optionIndex) => {
    if (answered[questionId] !== undefined) return;
    
    const question = questions.find(q => q.id === questionId);
    const isCorrect = optionIndex === question.correct;
    
    setScore(prev => ({
      correct: isCorrect ? prev.correct + 1 : prev.correct,
      wrong: !isCorrect ? prev.wrong + 1 : prev.wrong
    }));
    
    setAnswered(prev => ({
      ...prev,
      [questionId]: { selected: optionIndex, isCorrect }
    }));
  };

  const renderMatrix = (matrix) => {
    return (
      <div className="matrix-container">
        <div className="matrix">
          {matrix.map((row, rowIndex) => (
            <div key={rowIndex} className="matrix-row">
              {row.map((value, colIndex) => (
                <div key={colIndex} className="matrix-cell">
                  {value}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="header2">
        <h1 className="title">Quiz de Matrizes</h1>
        <p className="subtitle">Clique nas cartas para revelar as questões!</p>
        
        <div className="scoreboard">
          <div className="score-item">
            <span className="score-value correct-score">{score.correct}</span>
            <p className="score-label correct-score">Acertos</p>
          </div>
          <div className="score-item">
            <span className="score-value wrong-score">{score.wrong}</span>
            <p className="score-label wrong-score">Erros</p>
          </div>
        </div>
      </div>
      
      <div className="cards-grid">
        {questions.map((question) => (
          <div key={question.id} className="card-container">
            <div 
              className={`card ${flippedCards[question.id] ? 'flipped' : ''}`}
              onClick={() => !flippedCards[question.id] && handleCardFlip(question.id)}
            >
              {/* Card Front */}
              <div className="card-front">
                <div className="card-front-content">
                  <div className="question-mark">?</div>
                  <div className="card-title">Questão {question.id}</div>
                  <div className="card-hint">Clique para revelar</div>
                </div>
              </div>
              
              {/* Card Back */}
              <div className="card-back">
                <div className="question-text">{question.question}</div>
                
                {renderMatrix(question.matrix)}
                
                <div className="options-container">
                  {question.options.map((option, index) => {
                    let optionClass = "option-button";
                    
                    if (answered[question.id]) {
                      if (index === answered[question.id].selected) {
                        optionClass += answered[question.id].isCorrect ? " option-correct" : " option-incorrect";
                      } else if (index === question.correct) {
                        optionClass += " option-correct";
                      }
                    }
                    
                    return (
                      <button
                        key={index}
                        className={optionClass}
                        onClick={() => handleAnswer(question.id, index)}
                        disabled={answered[question.id] !== undefined}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}