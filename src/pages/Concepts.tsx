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
    title:'Single Inheritance',
    description:'In single inheritance, a derived class inherits from only one base class.',
    example:
  `class Base {
public:
    void show() { cout << "Base class method" << endl; }
};

class Derived : public Base {};

int main() {
    Derived obj;
    obj.show(); // Output: Base class method
    return 0;
}`
  },
  {
    title:'Hierarchical Inheritance',
    description:'In hierarchical inheritance, multiple derived classes inherit from a single base class.',
    example:
    `class Base {
public:
    void show() { cout << "Base class method" << endl; }
};

class Derived1 : public Base {};
class Derived2 : public Base {};

int main() {
    Derived1 obj1;
    Derived2 obj2;

    obj1.show(); // Output: Base class method
    obj2.show(); // Output: Base class method

    return 0;
}`
  },
  {
    title:'Multilevel Inheritance',
    description:'In multilevel inheritance, a derived class inherits from another derived class.',
    example:
    `class Base {
public:
    void show() { cout << "Base class method" << endl; }
};

class Intermediate : public Base {};  
class Derived : public Intermediate {};  

int main() {    
    Derived obj;
    obj.show(); // Output: Base class method
    return 0;
}`
  },
  {
    title:'Multiple Inheritance',
    description:'In multiple inheritance, a derived class inherits from more than one base class.',
    example:
    `class Base1 {
public:
    void show1() { cout << "Base1 class method" << endl; }
};

class Base2 {
public:
    void show2() { cout << "Base2 class method" << endl; }
};

class Derived : public Base1, public Base2 {};

int main() {
    Derived obj;
    obj.show1(); // Output: Base1 class method
    obj.show2(); // Output: Base2 class method
    return 0;
}`
  },
  {
    title:'Hybrid Inheritance',
    description:'Hybrid inheritance is a combination of two or more types of inheritance.',
    example:
    `class Base {
      public:
          void show() { cout << "Base class method" << endl; }
      };
      
      class Derived1 : virtual public Base {};  // Virtual inheritance
      class Derived2 : virtual public Base {};  // Virtual inheritance
      
      class FinalDerived : public Derived1, public Derived2 {};
      
      int main() {
          FinalDerived obj;
          obj.show();  // No ambiguity, Output: Base class method
          return 0;
      }`
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
  title:'Compile time - Operator overloading',
  description:'  Operator overloading allows redefining the behavior of operators for user-defined types.',
  example:
  `class Complex {
private:
    int real, imag;

public:
    Complex(int r, int i) : real(r), imag(i) {}

    // Operator Overloading for '+'
    Complex operator+(const Complex& obj) {
        return Complex(real + obj.real, imag + obj.imag);
    }

    void display() {
        cout << real << " + " << imag << "i" << endl;
    }
};

int main() {
    Complex c1(2, 3), c2(4, 5);
    Complex c3 = c1 + c2;  // Using overloaded '+' operator
    c3.display();          // Output: 6 + 8i
    return 0;
}`
},
{
  title:'Compile time - Function overloading',
  description:' Function overloading allows multiple functions with the same name but different parameters in the same scope.',
  example:
  `class Math {
public:
    int add(int a, int b) {
        return a + b;
    }
    double add(double a, double b) {
        return a + b;
    }
};

int main() {
    Math obj;
    cout << obj.add(2, 3) << endl;     // Output: 5
    cout << obj.add(2.5, 3.5) << endl; // Output: 6
    return 0;
}`
},
{
  title:'Run time - Method overriding',
  description:'   Method overriding allows a derived class to provide a specific implementation of a function that is already defined in the base class.',
  example:
  `class Animal {
public:
    virtual void makeSound() {
        cout << "Animal makes a sound" << endl;
    }
    
    // Virtual destructor to ensure proper cleanup of derived objects
    virtual ~Animal() {}
};

class Dog : public Animal {
public:
    void makeSound() override {
        cout << "Dog barks" << endl;
    }
};

int main() {
    Animal* animal = new Dog();
    animal->makeSound(); // Output: Dog barks

    delete animal; // Ensures proper cleanup
    return 0;
}`
},
{
  title:'Run time - Virtual fucntion',
  description:' Virtual functions enable runtime polymorphism by allowing derived classes to override base class methods dynamically.',
  example:
  `class Shape {
public:
    virtual void draw() {
        cout << "Drawing a shape" << endl;
    }

    // Virtual destructor to ensure proper cleanup of derived objects
    virtual ~Shape() {}
};

class Circle : public Shape {
public:
    void draw() override {
        cout << "Drawing a circle" << endl;
    }
};

int main() {
    Shape* shape = new Circle();
    shape->draw(); // Output: Drawing a circle

    delete shape; // Ensures proper cleanup
    return 0;
}`
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
    title:'Data hiding',
    description:' Data hiding is a principle of object-oriented programming that restricts access to the internal state of an object . It is achieved using access specifiers to protect data from unauthorized access and modifications.',
    example:
    `class Account {
private:
    double balance; // Private data member (Data Hiding)

public:
    // Constructor to initialize balance
    Account(double initialBalance) {
        if (initialBalance >= 0)
            balance = initialBalance;
        else
            balance = 0;
    }

    // Function to deposit money
    void deposit(double amount) {
        if (amount > 0) balance += amount;
    }

    // Function to withdraw money
    bool withdraw(double amount) {
        if (amount > 0 && balance >= amount) {
            balance -= amount;
            return true;
        }
        return false;
    }

    // Function to get current balance
    double getBalance() const {
        return balance; // Controlled access to private data
    }
};

int main() {
    Account acc(1000);  // Initialize account with $1000
    acc.deposit(500);   // Deposit $500
    acc.withdraw(300);  // Withdraw $300
    cout << "Balance: $" << acc.getBalance() << endl; // Expected output: Balance: $1200
    return 0;
}`
  },
  {
    title:'Getter and Setter',
    description:'Getter and setter functions allow controlled access to private members, ensuring encapsulation.',
    example:
    `class Person {
private:
    string name;
    int age;

public:
    // Constructor to initialize variables
    Person() : name(""), age(0) {}

    void setName(string n) { name = n; }
    string getName() { return name; }

    void setAge(int a) {
        if (a > 0) age = a;
    }
    int getAge() { return age; }
};

int main() {
    Person person;
    person.setName("John");
    person.setAge(25);
    
    cout << "Name: " << person.getName() << endl;
    cout << "Age: " << person.getAge() << endl;

    return 0;
}`
  },
  {
    title:'Access modifier',
    description:'A specific part of a programming language syntax used to facilitate the encapsulation of components',
    example:
    `class Student {
public:
    int rollNumber; // Public member

private:
    string name;
    int age;

protected:
    string course;

public:
    // Constructor to initialize student details
    Student(int roll, string studentName, int studentAge, string studentCourse) {
        rollNumber = roll;
        name = studentName;
        age = (studentAge > 0) ? studentAge : 0; // Prevent negative age
        course = studentCourse;
    }

    // Setter for name
    void setName(string newName) { name = newName; }

    // Getter for name
    string getName() { return name; }

    // Setter for age
    void setAge(int newAge) {
        if (newAge > 0) age = newAge;
    }

    // Getter for age
    int getAge() { return age; }

    // Setter for course (Protected)
    void setCourse(string newCourse) { course = newCourse; }

    // Getter for course
    string getCourse() { return course; }

    // Function to display student details
    void showStudentInfo() {
        cout << "Roll Number: " << rollNumber << endl;
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
        cout << "Course: " << course << endl;
    }
};

int main() {
    // Creating a student object
    Student student1(101, "Alice", 20, "Computer Science");

    // Modifying values using setters
    student1.setName("Bob");
    student1.setAge(22);
    student1.setCourse("Mathematics");

    // Display student details
    student1.showStudentInfo();

    // Accessing private members using getters
    cout << "Updated Name: " << student1.getName() << endl;
    cout << "Updated Age: " << student1.getAge() << endl;
    cout << "Updated Course: " << student1.getCourse() << endl;

    return 0;
}
`
  },
  {
    title:'Abstraction',
    description:' Abstraction is an OOP principle that hides implementation details and only exposes essential functionalities. It simplifies complex systems by providing a clear interface for interaction. In JavaScript, abstraction can be achieved using classes with methods that should be implemented by subclasses. ',
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
  {
    title:'Abstract class',
    description:'A class that cannot ne instantiated on its own but it is used as a base class for other classes',
    example:
    `class Shape {
public:
    virtual double area() = 0;  // Pure virtual function
    virtual double perimeter() = 0;  // Pure virtual function
    virtual void draw() = 0;  // Pure virtual function
    virtual ~Shape() {}  // Virtual destructor
};

class Circle : public Shape {
private:
    double radius;

public:
    Circle(double r) : radius(r) {}

    double area() override {
        return 3.14159 * radius * radius;
    }

    double perimeter() override {
        return 2 * 3.14159 * radius;
    }

    void draw() override {
        cout << "Drawing a circle" << endl;
    }
};

class Rectangle : public Shape {
private:
    double width, height;

public:
    Rectangle(double w, double h) : width(w), height(h) {}

    double area() override {
        return width * height;
    }

    double perimeter() override {
        return 2 * (width + height);
    }

    void draw() override {
        cout << "Drawing a rectangle" << endl;
    }
};

int main() {
    // Shape shape;  // Error: cannot instantiate abstract class

    Shape* circle = new Circle(5);
    Shape* rectangle = new Rectangle(4, 6);

    cout << "Circle area: " << circle->area() << endl;
    cout << "Rectangle perimeter: " << rectangle->perimeter() << endl;

    circle->draw();
    rectangle->draw();

    delete circle;
    delete rectangle;

    return 0;
}`
  },
  {
    title:'Interfaces',
    description:'Interfaces can be implemented using abstract classes with only pure virtual functions',
    example:
    `// Interface (Abstract Class)
class Vehicle {
public:
    virtual void start() = 0;  // Pure virtual function
    virtual ~Vehicle() {}      // Virtual destructor
};

// Concrete class implementing the interface
class Car : public Vehicle {
public:
    void start() override {
        cout << "Car is starting..." << endl;
    }
};

// Concrete class implementing the interface
class Bike : public Vehicle {
public:
    void start() override {
        cout << "Bike is starting..." << endl;
    }
};

int main() {
    Car car;
    Bike bike;

    car.start();  // Output: Car is starting...
    bike.start(); // Output: Bike is starting...

    return 0;
}`
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