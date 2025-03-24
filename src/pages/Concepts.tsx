import React from 'react';

const concepts = [
  {
    title: 'Classes',
    description: 'Classes are blueprints for creating objects in object-oriented programming (OOP). They encapsulate data (properties) and behavior (methods) in a structured way. A class defines how an object should function, making it reusable and scalable. With classes, we can implement key OOP principles such as inheritance, encapsulation, and polymorphism. ',
    example: `class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getInfo() {
    return \`\${this.make} \${this.model}\`;
  }
}

const myCar = new Car('Toyota', 'Camry');
console.log(myCar.getInfo()); // Toyota Camry`,
  },
  {
title: 'Objects',
description: 'Objects are instances of classes in object-oriented programming (OOP). They store data in the form of properties (key-value pairs) and define behavior through methods. Objects allow us to model real-world entities and interact with them dynamically. ',
example:`const car = {
  make: 'Toyota',
  model: 'Camry',
  getInfo() {
    return \`\${this.make} \`\${this.model}\`;
  }
};

console.log(car.getInfo()); // Toyota Camry`,
  },
  {
    title: 'Inheritance',
    description: 'Inheritance is a fundamental concept in object-oriented programming (OOP) that allows a class to inherit properties and methods from another class. This promotes code reusability and hierarchical relationships between classes.  ',
    example: `class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return \`\${this.name} makes a sound\`;
  }
}

class Dog extends Animal {
  speak() {
    return \`\${this.name} barks!\`;
  }
}

const dog = new Dog('Rex');
console.log(dog.speak()); // Rex barks!`,
  },
  {
    title:'Polymorphism',
    description: 'Polymorphism is an OOP concept that allows methods in different classes to have the same name but different implementations. It enables a single interface to be used for different data types, making the code more flexible and extensible. In JavaScript, polymorphism is achieved through method overriding in class inheritance.',
    example:
    `class Animal {
  speak() {
    return "This animal makes a sound.";
  }
}

class Dog extends Animal {
  speak() {
    return "The dog barks!";
  }
}

class Cat extends Animal {
  speak() {
    return "The cat meows!";
  }
}

const animals = [new Dog(), new Cat()];
animals.forEach(animal => console.log(animal.speak()));

// Output:
// The dog barks!
// The cat meows!
`
  },
  {
    title: 'Encapsulation',
    description: 'Encapsulation is an OOP principle that restricts direct access to an object \'s data and only allows modifications through controlled methods. It helps in data hiding, protecting the internal state of an object, and ensuring that data is modified only in intended ways.',
    example: `class BankAccount {
  #balance = 0;  // private field

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return true;
    }
    return false;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance()); // 100`,
  },
  {
    title:'Abstraction',
    description:'Description: Abstraction is an OOP principle that hides implementation details and only exposes essential functionalities. It simplifies complex systems by providing a clear interface for interaction. In JavaScript, abstraction can be achieved using classes with methods that should be implemented by subclasses. ',
    example:
    `class Vehicle {
  constructor(make, model) {
    if (this.constructor === Vehicle) {
      throw new Error("Abstract class 'Vehicle' cannot be instantiated directly.");
    }
    this.make = make;
    this.model = model;
  }

  getInfo() {
    throw new Error("Method 'getInfo()' must be implemented in derived classes.");
  }
}

class Car extends Vehicle {
  getInfo() {
    return \`\${this.make} \`\${this.model} is a car.\`
  }
const myCar = new Car('Toyota', 'Camry');
console.log(myCar.getInfo()); // Toyota Camry is a car`
  },
];

const Concepts = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">OOP Concepts</h1>
      <div className="space-y-8">
        {concepts.map((concept, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-3">{concept.title}</h2>
            <p className="text-gray-600 mb-4">{concept.description}</p>
            <div className="bg-gray-50 rounded-lg p-4">
              <pre className="text-sm overflow-x-auto">
                <code className="language-javascript">{concept.example}</code>
              </pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Concepts;