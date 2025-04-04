import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { CheckCircle2, XCircle } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const QuizApp = () => {
  const [topics, setTopics] = useState<string[]>([]);
  const [questionsByTopic, setQuestionsByTopic] = useState<Record<string, Question[]>>({});
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
//load questions from firebase
  useEffect(() => {
    const fetchTopicsAndQuestions = async () => {
      try {
        const topicsRef = collection(db, "quiz");
        const topicSnapshot = await getDocs(topicsRef);

        let topicList: string[] = [];
        let questionsData: Record<string, Question[]> = {};

        for (let doc of topicSnapshot.docs) {
          const topicName = doc.data().name; // 🔥 Firestore name field
          topicList.push(topicName);

          const questionsRef = collection(db, `quiz/${doc.id}/questions`);
          const questionsSnapshot = await getDocs(questionsRef);

          let questions: Question[] = [];
          questionsSnapshot.forEach((qDoc) => {
            const qData = qDoc.data();
            questions.push({
              id: qData.id,
              question: qData.question,
              options: qData.options,
              correctAnswer: qData.correctAnswer,
              explanation: qData.explanation,
            });
          });

          questionsData[topicName] = questions;
        }

        setTopics(topicList);
        setQuestionsByTopic(questionsData);
      } catch (error) {
        console.error("Error fetching topics and questions:", error);
      }
    };

    fetchTopicsAndQuestions();
  }, []);

  if (!selectedTopic) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Select a Topic</h2>
          {topics.length === 0 ? (
            <p>Loading topics...</p>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {topics.map((topic) => (
                <button
                  key={topic}
                  onClick={() => {
                    setSelectedTopic(topic);
                    setCurrentQuestionIndex(0);
                    setQuizCompleted(false);
                    setScore(0);
                    setSelectedAnswer(null);
                    setShowExplanation(false);
                  }}
                  className="bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  {topic}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  const questions = questionsByTopic[selectedTopic] || [];
  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (optionIndex: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(optionIndex);
    setShowExplanation(true);
    if (optionIndex === currentQuestion.correctAnswer) {
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

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold">{selectedTopic} Quiz</h2>
        {!quizCompleted ? (
          <>
            <h3 className="text-xl font-semibold mt-4">
              Question {currentQuestionIndex + 1}: {currentQuestion.question}
            </h3>
            <div className="mt-4 space-y-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={selectedAnswer !== null}
                  className={`w-full text-left p-4 rounded-lg border transition-colors ${
                    selectedAnswer !== null
                      ? index === currentQuestion.correctAnswer
                        ? "bg-green-100 border-green-500"
                        : selectedAnswer === index
                        ? "bg-red-100 border-red-500"
                        : "bg-gray-100"
                      : "hover:bg-gray-50"
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
            {showExplanation && (
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800">{currentQuestion.explanation}</p>
              </div>
            )}
            {selectedAnswer !== null && (
              <button
                onClick={handleNextQuestion}
                className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition-colors mt-4"
              >
                {currentQuestionIndex < questions.length - 1 ? "Next Question" : "Complete Quiz"}
              </button>
            )}
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
            <p className="text-xl">Your score: {score} out of {questions.length}</p>
            <button
              onClick={() => setSelectedTopic(null)}
              className="mt-4 bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Back to Topics
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizApp;
