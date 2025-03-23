import React, { useState } from 'react';
import { CheckCircle2, XCircle, RefreshCw } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is Encapsulation in OOP?",
    options: [
      "The process of handling objects in a sequential manner",
      "The bundling of data and the methods that operate on that data within a single unit",
      "The process of creating multiple instances of an object",
      "A way to execute multiple threads simultaneously"
    ],
    correctAnswer: 1,
    explanation: "Encapsulation is a fundamental principle in OOP that bundles related data and methods that operate on that data within a single unit or object, hiding the internal details of how operations are carried out."
  },
  {
    id: 2,
    question: "Which of the following best describes Inheritance?",
    options: [
      "Creating multiple copies of a class",
      "A mechanism that allows a class to inherit properties and methods from another class",
      "Hiding data from other classes",
      "A way to overload methods"
    ],
    correctAnswer: 1,
    explanation: "Inheritance is a mechanism that enables a class to inherit properties and methods from another class, promoting code reuse and establishing a relationship between parent and child classes."
  },
  {
    id: 3,
    question: "What is Polymorphism in OOP?",
    options: [
      "The ability to create multiple objects",
      "The process of hiding data",
      "The ability of objects to maintain their state",
      "The ability of objects to take multiple forms"
    ],
    correctAnswer: 3,
    explanation: "Polymorphism allows objects to take multiple forms. In practice, it means that a single function or operator can work with different types of objects and behave differently based on the type of object it's working with."
  },
  {
    id: 4,
    question: "What is the main purpose of a Constructor?",
    options: [
      "To destroy an object",
      "To initialize object properties when creating an object",
      "To inherit from a parent class",
      "To implement polymorphism"
    ],
    correctAnswer: 1,
    explanation: "A constructor is a special method that is automatically called when an object is created. Its main purpose is to initialize the object's properties with the values passed during object creation."
  },
  {
    id: 5,
    question: "What is the concept of Abstraction in OOP?",
    options: [
      "Making all data public",
      "Creating multiple instances of a class",
      "Hiding complex implementation details and showing only necessary features",
      "Converting one data type to another"
    ],
    correctAnswer: 2,
    explanation: "Abstraction is the process of hiding complex implementation details and showing only the necessary features of an object. This helps in reducing complexity and increasing efficiency."
  }
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (optionIndex: number) => {
    if (selectedAnswer !== null) return; // Prevent multiple selections
    setSelectedAnswer(optionIndex);
    setShowExplanation(true);
    
    if (optionIndex === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
  };

  const currentQuestion = questions[currentQuestionIndex];

  if (quizCompleted) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Quiz Completed!</h2>
          <p className="text-xl mb-4">
            Your score: {score} out of {questions.length}
          </p>
          <p className="text-lg mb-6">
            Percentage: {((score / questions.length) * 100).toFixed(1)}%
          </p>
          <button
            onClick={restartQuiz}
            className="flex items-center justify-center mx-auto bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Restart Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">OOP Concepts Quiz</h2>
          <p className="text-gray-600">
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">{currentQuestion.question}</h3>
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={selectedAnswer !== null}
                className={`w-full text-left p-4 rounded-lg border transition-colors ${
                  selectedAnswer === null
                    ? 'hover:bg-gray-50'
                    : selectedAnswer === index
                    ? index === currentQuestion.correctAnswer
                      ? 'bg-green-100 border-green-500'
                      : 'bg-red-100 border-red-500'
                    : index === currentQuestion.correctAnswer
                    ? 'bg-green-100 border-green-500'
                    : 'bg-gray-50'
                }`}
              >
                <div className="flex items-center">
                  {selectedAnswer !== null && index === currentQuestion.correctAnswer && (
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                  )}
                  {selectedAnswer === index && index !== currentQuestion.correctAnswer && (
                    <XCircle className="w-5 h-5 text-red-500 mr-2" />
                  )}
                  {option}
                </div>
              </button>
            ))}
          </div>
        </div>

        {showExplanation && (
          <div className="mb-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-blue-800">{currentQuestion.explanation}</p>
          </div>
        )}

        {selectedAnswer !== null && (
          <button
            onClick={handleNextQuestion}
            className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition-colors"
          >
            {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Complete Quiz'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;