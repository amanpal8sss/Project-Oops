"use client";

import React, { useEffect, useState } from "react";
import { Play } from "lucide-react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../src/firebase"; // Adjust the path if needed

const Tutorials = () => {
  const [tutorials, setTutorials] = useState<
  { id: number; title: string; description: string; videoUrl: string }[]
>([]);

  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "tutorials"));
        const tutorialData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id, // Firestore document ID
            title: data.title || "Untitled",
            description: data.description || "No description available",
            videoUrl: data.videoUrl || "",
          };
        });

        // Sort tutorials by numerical ID (if document IDs are numbers like "101", "102")
        tutorialData.sort((a, b) => Number(a.id) - Number(b.id));

        setTutorials(tutorialData);
      } catch (error) {
        console.error("Error fetching tutorials:", error);
      }
    };

    fetchTutorials();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Video Tutorials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tutorials.length === 0 ? (
          <p className="text-gray-500">No tutorials found.</p>
        ) : (
          tutorials.map((tutorial) => (
            <div key={tutorial.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
                {tutorial.videoUrl ? (
                  <iframe
                    src={tutorial.videoUrl}
                    title={tutorial.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-md"
                  ></iframe>
                ) : (
                  <p className="text-center p-6 text-gray-500">No video available</p>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Play className="h-5 w-5 text-indigo-600 mr-2" />
                  <h2 className="text-xl font-semibold">{tutorial.title}</h2>
                </div>
                <p className="text-gray-600">{tutorial.description}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Tutorials;