import React from 'react';
import { Play } from 'lucide-react';

const tutorials = [
  {
    id: 1,
    title: 'Introduction to OOP',
    description: 'Learn the basics of Object-Oriented Programming',
    videoUrl: 'https://www.youtube.com/embed/PFmuCDHHpwk',
  },
  {
    id: 2,
    title: 'Classes and Objects',
    description: 'Understanding classes and objects in JavaScript',
    videoUrl: 'https://www.youtube.com/embed/2ZphE5HcQPQ',
  },
  {
    id: 3,
    title: 'Inheritance and Polymorphism',
    description: 'Deep dive into inheritance and polymorphism concepts',
    videoUrl: 'https://www.youtube.com/embed/MfxBfRD0FVU',
  },
];

const Tutorials = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Video Tutorials</h1>
      <div className="grid grid-cols-1 gap-8">
        {tutorials.map((tutorial) => (
          <div key={tutorial.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={tutorial.videoUrl}
                title={tutorial.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[400px]"
              ></iframe>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-2">
                <Play className="h-5 w-5 text-indigo-600 mr-2" />
                <h2 className="text-xl font-semibold">{tutorial.title}</h2>
              </div>
              <p className="text-gray-600">{tutorial.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutorials;