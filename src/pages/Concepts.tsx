import React from 'react';

const concepts = [
  {
    title: 'Classes',
    description: 'Classes are templates for creating objects. They encapsulate data and behavior.',
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
    title: 'Inheritance',
    description: 'Inheritance allows a class to inherit properties and methods from another class.',
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
    title: 'Encapsulation',
    description: 'Encapsulation is the bundling of data and the methods that operate on that data within a single unit.',
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