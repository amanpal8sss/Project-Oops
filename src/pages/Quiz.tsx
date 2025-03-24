import React, { useState } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const topics = [
  "Introduction to OOP",
  "Classes and Objects",
  "Inheritance",
  "Polymorphism",
  "Encapsulation",
  "Abstraction"
];

const questionsByTopic: Record<string, Question[]> = {
  "Introduction to OOP": [
    {
      id: 1,
      question: "Which of the following is NOT one of the four pillars of OOP?",
      options: ["Encapsulation", "Abstraction", "Inheritance", "Compilation"],
      correctAnswer: 3,
      explanation:
        "The four pillars of OOP are Encapsulation, Abstraction, Inheritance, and Polymorphism. Compilation is not one of the pillars.",
    },
    {
      id: 2,
      question: "What does encapsulation provide in OOP?",
      options: ["Code reusability", "Data hiding and protection", "Multiple inheritance", "Method overloading"],
      correctAnswer: 1,
      explanation:
        "Encapsulation provides data hiding and protection by bundling data and methods that operate on that data within a single unit or object.",
    },
    {
      id: 3,
      question: "Which OOP pillar allows a class to inherit properties and methods from another class?",
      options: ["Encapsulation", "Abstraction", "Inheritance", "Polymorphism"],
      correctAnswer: 2,
      explanation:
        "Inheritance is the OOP pillar that allows a class to inherit properties and methods from another class.",
    },
    {
      id: 4,
      question: "What is the main purpose of abstraction in OOP?",
      options: [
        "To create multiple instances of a class",
        "To hide complex implementation details and show only essential features",
        "To override base class methods",
        "To achieve multiple inheritance",
      ],
      correctAnswer: 1,
      explanation:
        "The main purpose of abstraction in OOP is to hide complex implementation details and show only the essential features of an object.",
    },
    {
      id: 5,
      question: "Which OOP pillar allows objects of different classes to be treated as objects of a common base class?",
      options: ["Encapsulation", "Abstraction", "Inheritance", "Polymorphism"],
      correctAnswer: 3,
      explanation:
        "Polymorphism allows objects of different classes to be treated as objects of a common base class, enabling flexible and extensible code.",
    },
    {
      id: 6,
      question: "What is a key benefit of using inheritance in OOP?",
      options: [
        "It allows for data hiding",
        "It enables code reuse",
        "It provides multiple instances of a class",
        "It allows for method overloading",
      ],
      correctAnswer: 1,
      explanation:
        "A key benefit of using inheritance in OOP is that it enables code reuse by allowing derived classes to inherit properties and methods from base classes.",
    },
    {
      id: 7,
      question: "Which access specifier in C++ provides the highest level of encapsulation?",
      options: ["public", "protected", "private", "friend"],
      correctAnswer: 2,
      explanation:
        "The 'private' access specifier provides the highest level of encapsulation in C++ by restricting access to class members from outside the class.",
    },
    {
      id: 8,
      question: "What is a pure virtual function in C++?",
      options: [
        "A function that cannot be overridden",
        "A function with no parameters",
        "A function with no implementation in the base class",
        "A function that can only be called once",
      ],
      correctAnswer: 2,
      explanation:
        "A pure virtual function in C++ is a virtual function declared in the base class that has no implementation and is set to 0.",
    },
    {
      id: 9,
      question: "Which type of polymorphism is achieved through function overloading?",
      options: ["Runtime polymorphism", "Compile-time polymorphism", "Dynamic polymorphism", "Late binding polymorphism"],
      correctAnswer: 1,
      explanation: "Function overloading is a form of compile-time polymorphism, also known as static polymorphism.",
    },
    {
      id: 10,
      question: "What is the purpose of an abstract class in OOP?",
      options: [
        "To create multiple instances of a class",
        "To provide a common interface for derived classes",
        "To achieve multiple inheritance",
        "To implement function overloading",
      ],
      correctAnswer: 1,
      explanation:
        "The purpose of an abstract class in OOP is to provide a common interface for derived classes, often containing one or more pure virtual functions.",
    }
  ],
  "Classes and Objects": [
    {
      id: 1,
      question: "What is a class in C++?",
      options: [
        "A built-in data type",
        "A user-defined data type that encapsulates data and functions",
        "A function that returns an object",
        "A type of loop in C++",
      ],
      correctAnswer: 1,
      explanation:
        "A class in C++ is a user-defined data type that encapsulates data (attributes) and functions (methods) that operate on that data.",
    },
    {
      id: 2,
      question: "Which keyword is used to define a class in C++?",
      options: ["struct", "class", "object", "define"],
      correctAnswer: 1,
      explanation: "The 'class' keyword is used to define a class in C++.",
    },
    {
      id: 3,
      question: "What is an object in C++?",
      options: [
        "A function that belongs to a class",
        "A variable of a class type",
        "A keyword used to create classes",
        "A built-in data type in C++",
      ],
      correctAnswer: 1,
      explanation: "An object in C++ is an instance of a class, which is a variable of the class type.",
    },
    {
      id: 4,
      question: "Which of the following is true about constructors?",
      options: [
        "They have a return type",
        "They can be inherited",
        "They have the same name as the class",
        "They are called explicitly by the programmer",
      ],
      correctAnswer: 2,
      explanation: "Constructors have the same name as the class and are used to initialize objects of that class.",
    },
    {
      id: 5,
      question: "What is the purpose of the 'this' pointer in C++?",
      options: [
        "To create a new object",
        "To delete an object",
        "To refer to the current object",
        "To access static members of a class",
      ],
      correctAnswer: 2,
      explanation: "The 'this' pointer is used to refer to the current object instance within a member function.",
    },
    {
      id: 6,
      question: "What is encapsulation in C++?",
      options: [
        "The process of creating an object",
        "The bundling of data and methods that operate on that data within a single unit",
        "The ability to derive a class from another class",
        "The process of compiling a C++ program",
      ],
      correctAnswer: 1,
      explanation:
        "Encapsulation is the bundling of data and methods that operate on that data within a single unit, typically a class.",
    },
    {
      id: 7,
      question: "Which access specifier makes class members accessible only within the class?",
      options: ["public", "private", "protected", "static"],
      correctAnswer: 1,
      explanation: "The 'private' access specifier makes class members accessible only within the class.",
    },
    {
      id: 8,
      question: "What is a destructor in C++?",
      options: [
        "A function that creates objects",
        "A function that deletes objects",
        "A function called when an object goes out of scope or is explicitly deleted",
        "A function that initializes class members",
      ],
      correctAnswer: 2,
      explanation:
        "A destructor is a special member function called when an object goes out of scope or is explicitly deleted, used for cleanup operations.",
    },
    {
      id: 9,
      question: "What is the difference between a structure and a class in C++?",
      options: [
        "Structures cannot have member functions",
        "Classes cannot have data members",
        "Members of a structure are public by default, while members of a class are private by default",
        "Structures are used for inheritance, while classes are not",
      ],
      correctAnswer: 2,
      explanation:
        "The main difference is that members of a structure are public by default, while members of a class are private by default.",
    },
    {
      id: 10,
      question: "What is a class in OOP?",
      options: [
        "A function",
        "A blueprint for creating objects",
        "A variable",
        "A loop structure"
      ],
      correctAnswer: 1,
      explanation: "A class is a blueprint for creating objects, defining their properties and behaviors."
    },
  ],
  "Inheritance": [
    {
      id: 1,
      question: "What is inheritance in C++?",
      options: [
        "A way to create multiple objects",
        "A process where a class acquires properties of another class",
        "A method to overload functions",
        "A technique to hide data within a class",
      ],
      correctAnswer: 1,
      explanation:
        "Inheritance in C++ is a process where a class (derived class) acquires properties and behaviors of another class (base class).",
    },
    {
      id: 2,
      question: "Which keyword is used to define a derived class in C++?",
      options: ["derived", "inherits", "extends", ":"],
      correctAnswer: 3,
      explanation:
        "In C++, the ':' symbol is used to define a derived class, followed by the access specifier and the base class name.",
    },
    {
      id: 3,
      question: "What is the purpose of the 'protected' access specifier in inheritance?",
      options: [
        "To make members public in the derived class",
        "To hide members from the derived class",
        "To allow access to members in the derived class but not outside",
        "To make members static",
      ],
      correctAnswer: 2,
      explanation:
        "The 'protected' access specifier allows members to be accessed in the derived class but not outside the class hierarchy.",
    },
    {
      id: 4,
      question: "Which type of inheritance results in the 'diamond problem'?",
      options: ["Single inheritance", "Multiple inheritance", "Multilevel inheritance", "Hierarchical inheritance"],
      correctAnswer: 1,
      explanation:
        "The 'diamond problem' occurs in multiple inheritance when a class inherits from two classes that have a common base class.",
    },
    {
      id: 5,
      question: "What is the purpose of the 'virtual' keyword in inheritance?",
      options: [
        "To create a virtual function",
        "To prevent inheritance",
        "To allow multiple inheritance",
        "To make a class abstract",
      ],
      correctAnswer: 0,
      explanation:
        "The 'virtual' keyword is used to create virtual functions, which enable runtime polymorphism through inheritance.",
    },
    {
      id: 6,
      question: "What is single inheritance?",
      options: [
        "A class inheriting from multiple base classes",
        "A class inheriting from one base class",
        "A base class inheriting from a derived class",
        "Multiple classes inheriting from a single base class",
      ],
      correctAnswer: 1,
      explanation: "Single inheritance is when a class inherits from only one base class.",
    },
    {
      id: 7,
      question: "What is the syntax for defining a publicly inherited class in C++?",
      options: [
        "class Derived : public Base",
        "class Derived extends Base",
        "class Derived implements Base",
        "class Derived inherits Base",
      ],
      correctAnswer: 0,
      explanation: "The correct syntax for defining a publicly inherited class in C++ is 'class Derived : public Base'.",
    },
    {
      id: 8,
      question: "What happens to the private members of a base class in the derived class?",
      options: [
        "They become protected",
        "They become public",
        "They remain private and are not accessible",
        "They are automatically deleted",
      ],
      correctAnswer: 2,
      explanation: "Private members of a base class remain private and are not accessible in the derived class.",
    },
    {
      id: 9,
      question: "What is hierarchical inheritance?",
      options: [
        "One base class inheriting from multiple derived classes",
        "Multiple base classes inheriting from a single derived class",
        "Multiple derived classes inheriting from a single base class",
        "A chain of inheritance from base to derived classes",
      ],
      correctAnswer: 2,
      explanation: "Hierarchical inheritance is when multiple derived classes inherit from a single base class.",
    },
    {
      id: 10,
      question: "What is the purpose of using inheritance in C++?",
      options: [
        "To increase the complexity of the program",
        "To reduce the size of the executable file",
        "To promote code reuse and establish a relationship between classes",
        "To make all members of a class public",
      ],
      correctAnswer: 2,
      explanation:
        "Inheritance in C++ is used to promote code reuse and establish a relationship between classes, allowing for more organized and efficient code structures.",
    },
  ],
  "Polymorphism" : [
    {
      id: 1,
      question: "What is polymorphism in C++?",
      options: [
        "The ability to create multiple objects",
        "The ability to use one function or operator to work on multiple types",
        "The ability to inherit from multiple classes",
        "The ability to overload functions",
      ],
      correctAnswer: 1,
      explanation:
        "Polymorphism in C++ is the ability to use one function or operator to work on multiple types, allowing objects of different classes to be treated as objects of a common base class.",
    },
    {
      id: 2,
      question: "Which of the following is an example of compile-time polymorphism?",
      options: ["Virtual functions", "Function overloading", "Dynamic binding", "Runtime type identification"],
      correctAnswer: 1,
      explanation: "Function overloading is an example of compile-time polymorphism, also known as static polymorphism.",
    },
    {
      id: 3,
      question: "What is a pure virtual function?",
      options: [
        "A virtual function that is defined in the base class",
        "A function that cannot be overridden",
        "A virtual function with no implementation in the base class",
        "A function that is always inline",
      ],
      correctAnswer: 2,
      explanation:
        "A pure virtual function is a virtual function declared in the base class that has no implementation and is set to 0.",
    },
    {
      id: 4,
      question: "Which keyword is used to override a virtual function in a derived class?",
      options: ["virtual", "override", "overload", "new"],
      correctAnswer: 1,
      explanation:
        "The 'override' keyword is used in C++11 and later to explicitly indicate that a function is meant to override a virtual function from the base class.",
    },
    {
      id: 5,
      question: "What is dynamic binding in C++?",
      options: [
        "Binding of data and functions at compile time",
        "Binding of data and functions at runtime",
        "Creating dynamic memory allocation",
        "Using dynamic arrays",
      ],
      correctAnswer: 1,
      explanation:
        "Dynamic binding in C++ refers to the binding of a function call to the appropriate function definition at runtime, which is essential for runtime polymorphism.",
    },
    {
      id: 6,
      question: "What is the difference between overloading and overriding?",
      options: [
        "Overloading is for functions with different names, overriding is for functions with the same name",
        "Overloading is within the same class, overriding is in derived classes",
        "Overloading is compile-time polymorphism, overriding is runtime polymorphism",
        "There is no difference between overloading and overriding",
      ],
      correctAnswer: 2,
      explanation:
        "Overloading is a form of compile-time polymorphism within the same class, while overriding is a form of runtime polymorphism in derived classes.",
    },
    {
      id: 7,
      question: "What is the purpose of a virtual destructor?",
      options: [
        "To create objects dynamically",
        "To ensure proper destruction of derived class objects through base class pointers",
        "To prevent inheritance",
        "To make the destructor inline",
      ],
      correctAnswer: 1,
      explanation:
        "A virtual destructor ensures proper destruction of derived class objects when they are deleted through a pointer to the base class.",
    },
    {
      id: 8,
      question: "What is late binding in C++?",
      options: [
        "Binding that occurs at compile-time",
        "Binding that occurs at link-time",
        "Binding that occurs at runtime",
        "Binding that occurs when the program starts",
      ],
      correctAnswer: 2,
      explanation:
        "Late binding, also known as dynamic binding, occurs at runtime and is a key feature of runtime polymorphism in C++.",
    },
    {
      id: 9,
      question: "Which of the following is true about abstract classes in C++?",
      options: [
        "They can be instantiated directly",
        "They must contain at least one pure virtual function",
        "They cannot have constructors",
        "They cannot be used as base classes",
      ],
      correctAnswer: 1,
      explanation:
        "An abstract class in C++ must contain at least one pure virtual function and cannot be instantiated directly.",
    },
    {
      id: 10,
      question: "What is the purpose of the virtual keyword in a base class function?",
      options: [
        "To make the function inline",
        "To prevent the function from being overridden",
        "To allow the function to be overridden in derived classes",
        "To make the function static",
      ],
      correctAnswer: 2,
      explanation:
        "The virtual keyword in a base class function allows that function to be overridden in derived classes, enabling runtime polymorphism.",
    },
  ],
  "Encapsulation" : [
    {
      id: 1,
      question: "What is encapsulation in C++?",
      options: [
        "A way to create multiple objects",
        "The process of inheriting properties from a base class",
        "The bundling of data and methods that operate on that data within a single unit",
        "A technique to overload functions",
      ],
      correctAnswer: 2,
      explanation:
        "Encapsulation in C++ is the bundling of data and the methods that operate on that data within a single unit or object, typically a class.",
    },
    {
      id: 2,
      question: "Which access specifier provides the highest level of encapsulation?",
      options: ["public", "protected", "private", "friend"],
      correctAnswer: 2,
      explanation:
        "The 'private' access specifier provides the highest level of encapsulation by restricting access to class members from outside the class.",
    },
    {
      id: 3,
      question: "What is the primary purpose of getter and setter methods?",
      options: [
        "To initialize objects",
        "To create multiple instances of a class",
        "To provide controlled access to private data members",
        "To implement inheritance",
      ],
      correctAnswer: 2,
      explanation:
        "Getter and setter methods provide controlled access to private data members, allowing for data validation and maintaining encapsulation.",
    },
    {
      id: 4,
      question: "Which of the following is true about encapsulation?",
      options: [
        "It always requires inheritance",
        "It reduces the complexity of the program",
        "It makes all data members public",
        "It prevents the use of constructors",
      ],
      correctAnswer: 1,
      explanation:
        "Encapsulation reduces the complexity of the program by bundling data and methods together and controlling access to the internal details of a class.",
    },
    {
      id: 5,
      question: "What is data hiding in C++?",
      options: [
        "Deleting unused variables",
        "Encrypting data in memory",
        "Concealing the internal implementation details of a class",
        "Using anonymous variables",
      ],
      correctAnswer: 2,
      explanation:
        "Data hiding in C++ refers to concealing the internal implementation details of a class and providing access only through well-defined interfaces.",
    },
    {
      id: 6,
      question: "Which of the following is NOT a benefit of encapsulation?",
      options: [
        "Improved maintainability",
        "Better data security",
        "Increased code complexity",
        "Flexibility to change implementation",
      ],
      correctAnswer: 2,
      explanation:
        "Encapsulation aims to reduce code complexity, not increase it. It improves maintainability, data security, and provides flexibility to change implementation without affecting the interface.",
    },
    {
      id: 7,
      question: "What is the role of the 'const' keyword in getter methods?",
      options: [
        "It makes the method static",
        "It prevents the method from modifying the object's state",
        "It allows the method to modify private members",
        "It makes the method inline",
      ],
      correctAnswer: 1,
      explanation:
        "The 'const' keyword in getter methods indicates that the method does not modify the object's state, ensuring read-only access to the object's data.",
    },
    {
      id: 8,
      question: "How does encapsulation contribute to code reusability?",
      options: [
        "By allowing direct access to all class members",
        "By making all methods virtual",
        "By providing a well-defined interface for interacting with objects",
        "By eliminating the need for classes",
      ],
      correctAnswer: 2,
      explanation:
        "Encapsulation contributes to code reusability by providing a well-defined interface for interacting with objects, allowing the internal implementation to be changed without affecting code that uses the class.",
    },
    {
      id: 9,
      question: "What is the relationship between encapsulation and abstraction?",
      options: [
        "They are unrelated concepts",
        "Encapsulation is a technique used to achieve abstraction",
        "Abstraction is a technique used to achieve encapsulation",
        "They are the same thing",
      ],
      correctAnswer: 1,
      explanation:
        "Encapsulation is a technique used to achieve abstraction. It hides the internal details of a class, providing a higher level of abstraction for users of the class.",
    },
    {
      id: 10,
      question: "Which of the following is true about access specifiers in C++?",
      options: [
        "They can only be used with classes, not structures",
        "They affect the memory layout of the class",
        "They can be changed at runtime",
        "They control the visibility of class members",
      ],
      correctAnswer: 3,
      explanation:
        "Access specifiers in C++ (public, private, protected) control the visibility of class members, determining where they can be accessed from.",
    },
  ],
  "Abstraction" : [
    {
      id: 1,
      question: "What is abstraction in C++?",
      options: [
        "The process of creating objects",
        "Hiding complex implementation details and showing only essential features",
        "The ability to inherit from multiple classes",
        "A way to overload operators",
      ],
      correctAnswer: 1,
      explanation:
        "Abstraction in C++ is the process of hiding complex implementation details and showing only the essential features of an object.",
    },
    {
      id: 2,
      question: "Which of the following best describes an abstract class?",
      options: [
        "A class that cannot have any methods",
        "A class that cannot be instantiated and may contain pure virtual functions",
        "A class that can only have static members",
        "A class that is automatically inherited by all other classes",
      ],
      correctAnswer: 1,
      explanation:
        "An abstract class is a class that cannot be instantiated and may contain one or more pure virtual functions.",
    },
    {
      id: 3,
      question: "What is a pure virtual function?",
      options: [
        "A function that is always inline",
        "A function that cannot be overridden",
        "A virtual function with no implementation in the base class",
        "A function that is automatically static",
      ],
      correctAnswer: 2,
      explanation:
        "A pure virtual function is a virtual function declared in the base class that has no implementation and is set to 0.",
    },
    {
      id: 4,
      question: "How is a pure virtual function declared in C++?",
      options: [
        "virtual void function() const;",
        "abstract void function();",
        "virtual void function() = 0;",
        "void function() override;",
      ],
      correctAnswer: 2,
      explanation:
        "A pure virtual function is declared by setting it equal to 0 in the base class: 'virtual void function() = 0;'",
    },
    {
      id: 5,
      question: "What happens if a derived class doesn't override all pure virtual functions of its abstract base class?",
      options: [
        "The program will not compile",
        "The derived class becomes an abstract class",
        "The pure virtual functions are automatically implemented",
        "It results in a runtime error",
      ],
      correctAnswer: 1,
      explanation:
        "If a derived class doesn't override all pure virtual functions of its abstract base class, it also becomes an abstract class and cannot be instantiated.",
    },
    {
      id: 6,
      question: "What is the main purpose of abstraction in C++?",
      options: [
        "To increase code complexity",
        "To make all data members public",
        "To hide implementation details and reduce complexity for the user",
        "To eliminate the use of classes",
      ],
      correctAnswer: 2,
      explanation:
        "The main purpose of abstraction in C++ is to hide implementation details and reduce complexity for the user of a class or system.",
    },
    {
      id: 7,
      question: "Which of the following is true about interfaces in C++?",
      options: [
        "C++ has a built-in 'interface' keyword",
        "Interfaces are implemented using abstract classes with only pure virtual functions",
        "Interfaces can have data members",
        "Interfaces can have implemented methods",
      ],
      correctAnswer: 1,
      explanation:
        "In C++, interfaces are typically implemented using abstract classes that contain only pure virtual functions and no data members.",
    },
    {
      id: 8,
      question: "How does abstraction differ from encapsulation?",
      options: [
        "Abstraction is about hiding implementation details, while encapsulation is about bundling data and methods",
        "Abstraction is used in derived classes, while encapsulation is used in base classes",
        "Abstraction uses private members, while encapsulation uses public members",
        "There is no difference between abstraction and encapsulation",
      ],
      correctAnswer: 0,
      explanation:
        "Abstraction focuses on hiding implementation details and showing only essential features, while encapsulation bundles data and methods that operate on that data within a single unit.",
    },
    {
      id: 9,
      question: "What is the relationship between abstraction and inheritance in C++?",
      options: [
        "Abstraction and inheritance are mutually exclusive concepts",
        "Inheritance is a form of abstraction",
        "Abstraction is achieved through inheritance",
        "Abstraction can be implemented using inheritance, but they are separate concepts",
      ],
      correctAnswer: 3,
      explanation:
        "While abstraction can be implemented using inheritance (e.g., through abstract base classes), they are separate concepts. Inheritance is a mechanism for code reuse and establishing relationships between classes.",
    },
    {
      id: 10,
      question: "Which of the following is an example of abstraction in C++?",
      options: [
        "Using the 'private' keyword for class members",
        "Creating multiple objects of a class",
        "Defining a class that represents a high-level concept without implementation details",
        "Overloading operators for a class",
      ],
      correctAnswer: 2,
      explanation:
        "Defining a class that represents a high-level concept without exposing implementation details is an example of abstraction in C++.",
    },
  ],

};

const QuizApp = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  if (!selectedTopic) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Select a Topic</h2>
          <div className="grid grid-cols-2 gap-4">
            {topics.map((topic) => (
              <button key={topic} onClick={() => { setSelectedTopic(topic); setCurrentQuestionIndex(0); setQuizCompleted(false); setScore(0); setSelectedAnswer(null); setShowExplanation(false); }} className="bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition-colors">{topic}</button>
            ))}
          </div>
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
            <h3 className="text-xl font-semibold mt-4">{currentQuestion.question}</h3>
            <div className="mt-4 space-y-3">
              {currentQuestion.options.map((option, index) => (
                <button key={index} onClick={() => handleAnswerSelect(index)} disabled={selectedAnswer !== null} className={`w-full text-left p-4 rounded-lg border transition-colors ${selectedAnswer !== null ? (index === currentQuestion.correctAnswer ? 'bg-green-100 border-green-500' : selectedAnswer === index ? 'bg-red-100 border-red-500' : 'bg-gray-100') : 'hover:bg-gray-50'}`}>
                  <div className="flex items-center">
                    {selectedAnswer !== null && index === currentQuestion.correctAnswer && <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />}
                    {selectedAnswer === index && index !== currentQuestion.correctAnswer && <XCircle className="w-5 h-5 text-red-500 mr-2" />}
                    {option}
                  </div>
                </button>
              ))}
            </div>
            {showExplanation && <div className="mt-4 p-4 bg-blue-50 rounded-lg"><p className="text-blue-800">{currentQuestion.explanation}</p></div>}
            {selectedAnswer !== null && <button onClick={handleNextQuestion} className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition-colors mt-4">{currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Complete Quiz'}</button>}
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
            <p className="text-xl">Your score: {score} out of {questions.length}</p>
            <button onClick={() => setSelectedTopic(null)} className="mt-4 bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition-colors">Back to Topics</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizApp;

