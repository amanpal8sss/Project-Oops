import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, BookOpen, Play, Home, Brain } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-800">OOP Learning Hub</span>
          </Link>
          
          <div className="flex space-x-6">
            <Link to="/" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="/concepts" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
              <BookOpen className="h-5 w-5" />
              <span>Concepts</span>
            </Link>
            <Link to="/playground" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
              <Code2 className="h-5 w-5" />
              <span>Playground</span>
            </Link>
            <Link to="/tutorials" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
              <Play className="h-5 w-5" />
              <span>Tutorials</span>
            </Link>
            <Link to="/quiz" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
              <Brain className="h-5 w-5" />
              <span>Quiz</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;