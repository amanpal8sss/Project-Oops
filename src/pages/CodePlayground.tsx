import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

const CodePlayground = () => {
  const [code, setCode] = useState(`// Try out OOP concepts here!
class Animal {
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
console.log(dog.speak());
console.log('Testing inheritance:', dog instanceof Animal);`);

  const [output, setOutput] = useState('');

  const runCode = () => {
    // Clear previous output
    setOutput('');
    
    // Create a custom console.log to capture output
    const logs = [];
    const customConsole = {
      log: (...args) => {
        logs.push(args.map(arg => {
          if (typeof arg === 'object') {
            return JSON.stringify(arg, null, 2);
          }
          return String(arg);
        }).join(' '));
      },
      error: (...args) => {
        logs.push(`Error: ${args.join(' ')}`);
      }
    };

    try {
      // Create a safe evaluation environment
      const evalCode = `
        try {
          ${code}
        } catch (error) {
          console.error(error.message);
        }
      `;

      // Execute the code with the custom console
      const originalConsole = window.console;
      window.console = customConsole;
      
      // Use Function constructor to create a new scope
      new Function('console', evalCode)(customConsole);
      
      // Restore original console
      window.console = originalConsole;

      // Display output
      setOutput(logs.join('\n'));
    } catch (error) {
      setOutput(`Runtime Error: ${error.message}`);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Code Playground</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-4 bg-gray-100 border-b flex justify-between items-center">
            <h2 className="text-lg font-semibold">Editor</h2>
            <button
              onClick={runCode}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Run Code
            </button>
          </div>
          <Editor
            height="500px"
            defaultLanguage="javascript"
            value={code}
            onChange={(value) => setCode(value || '')}
            theme="vs-light"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: 'on',
              roundedSelection: false,
              scrollBeyondLastLine: false,
              readOnly: false,
              automaticLayout: true,
            }}
          />
        </div>

        <div className="bg-white rounded-lg shadow-md">
          <div className="p-4 bg-gray-100 border-b">
            <h2 className="text-lg font-semibold">Output</h2>
          </div>
          <div className="p-4 font-mono text-sm h-[500px] overflow-auto bg-gray-50">
            {output ? (
              output.split('\n').map((line, index) => (
                <div key={index} className="py-1">
                  {line}
                </div>
              ))
            ) : (
              <div className="text-gray-500 italic">Run your code to see the output</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodePlayground;