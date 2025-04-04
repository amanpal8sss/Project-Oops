"use client";

import React, { useEffect, useState, useRef } from "react";
import { Play } from "lucide-react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../src/firebase"; // Adjust the path if needed

const Tutorials = () => {
  const [tutorials, setTutorials] = useState<
    { id: string; title: string; description: string; videoUrl: string }[]
  >([]);
  const videoRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "tutorials"));
        const tutorialData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title || "Untitled",
            description: data.description || "No description available",
            videoUrl: data.videoUrl || "",
          };
        });

        // Sorting by document ID (assuming IDs are numeric strings)
        tutorialData.sort((a, b) => Number(a.id) - Number(b.id));

        setTutorials(tutorialData);
      } catch (error) {
        console.error("Error fetching tutorials:", error);
      }
    };

    fetchTutorials();
  }, []);

  const handleFullScreen = (videoUrl: string) => {
    const newWindow = window.open(videoUrl, "_blank", "fullscreen=yes");
    if (newWindow) {
      newWindow.focus();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Video Tutorials</h1>
      <div className="flex flex-col gap-6">
        {tutorials.length === 0 ? (
          <p className="text-gray-500">No tutorials found.</p>
        ) : (
          tutorials.map((tutorial) => (
            <div
              key={tutorial.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
              onClick={() => handleFullScreen(tutorial.videoUrl)}
            >
              <div className="w-full h-[250px] sm:h-[300px]">
                {tutorial.videoUrl ? (
                  <iframe
                    ref={videoRef}
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
              <div className="p-4">
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
