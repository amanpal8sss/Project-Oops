import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Code2, Play } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Master Object-Oriented Programming
        </h1>
        <p className="text-xl text-gray-600">
          Interactive learning platform for understanding OOP concepts through practical examples and video tutorials
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Link to="/concepts" className="transform hover:scale-105 transition-transform">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <BookOpen className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">OOP Concepts</h2>
            <p className="text-gray-600">Learn core OOP principles with interactive examples</p>
          </div>
        </Link>

        <Link to="/playground" className="transform hover:scale-105 transition-transform">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Code2 className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Code Playground</h2>
            <p className="text-gray-600">Practice OOP with our interactive code editor</p>
          </div>
        </Link>

        <Link to="/tutorials" className="transform hover:scale-105 transition-transform">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Play className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Video Tutorials</h2>
            <p className="text-gray-600">Watch comprehensive OOP video tutorials</p>
          </div>
        </Link>
        <Link to="/quiz" className="transform hover:scale-105 transition-transform">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Play className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Quiz</h2>
            <p className="text-gray-600">Take our OOP quiz to test your knowledge</p>
          </div>
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-4">Why Learn OOP?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Better Code Organization</h3>
            <p className="text-gray-600">Learn to structure your code in a maintainable and reusable way</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Real-world Applications</h3>
            <p className="text-gray-600">Understand how OOP is used in modern software development</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Problem Solving</h3>
            <p className="text-gray-600">Develop better problem-solving skills through OOP principles</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Career Growth</h3>
            <p className="text-gray-600">Enhance your career prospects with solid OOP knowledge</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;