"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, BookOpen, Play, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Lesson {
  title: string;
  content: string;
  code: string;
}

interface Level {
  title: string;
  description: string;
  lessons: Lesson[];
}

export default function JavaScriptLearningApp() {
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [currentLessonIndex, setCurrentLessonIndex] = useState<{
    [key: number]: number;
  }>(() => {
    const initialState: { [key: number]: number } = {};
    for (let i = 0; i < 7; i++) {
      // Initialize for all 5 levels
      initialState[i] = 0;
    }
    return initialState;
  });

  const levels: Level[] = [
    {
      title: "Level 1: Basics",
      description: "JavaScript fundamentals and core concepts",
      lessons: [
        {
          title: "What is JavaScript?",
          content:
            "JavaScript is one of the core technologies of the web, alongside HTML and CSS. It is a programming language that lets you make web pages interactive. You can use it to create dynamic content like image sliders, forms that validate input, interactive maps, and even entire web apps. JavaScript code can run directly in the browser or on the server using environments like Node.js.",
          code: "// This is a comment\nconsole.log('Welcome to JavaScript!');",
        },
        {
          title: "Your First Program",
          content:
            "Writing your first JavaScript program is as simple as using the console.log() function. This function prints a message to the browser's developer console. It’s a great tool for testing and debugging your code. Open your browser, press F12 to open DevTools, go to the Console tab, and paste the code below to see it in action.",
          code: "console.log('Hello, World!');\nconsole.log('I am learning JavaScript!');",
        },
        {
          title: "JavaScript Syntax",
          content:
            "Like any language, JavaScript has a specific syntax. Statements usually end with a semicolon (;), though it's technically optional in many cases. JavaScript is case-sensitive, which means `myVariable` and `MyVariable` are different. Consistent formatting and correct spelling are important to avoid errors.",
          code: "// Correct syntax\nconsole.log('This works!');\n\n// Case-sensitive example\nlet myVariable = 'Hello';\nconsole.log(myVariable); // Correct\n// console.log(MyVariable); // Error: not defined",
        },
        {
          title: "Where Can JavaScript Run?",
          content:
            "JavaScript can run inside your web browser (like Chrome, Firefox, Edge) or on the server using environments like Node.js. For now, you’ll mostly run JavaScript in the browser. You can write it inside an HTML file using the <script> tag, or you can type it directly into the browser console.",
          code: "<!-- HTML + JavaScript example -->\n<!DOCTYPE html>\n<html>\n  <head><title>My First JS</title></head>\n  <body>\n    <script>\n      alert('Hello from HTML!');\n    </script>\n  </body>\n</html>",
        },
        {
          title: "JavaScript Comments",
          content:
            "Comments are notes in your code that are ignored by the computer. They help explain what your code does. Use `//` for single-line comments, or `/* ... */` for multi-line comments. Writing clear comments is good practice, especially when working in teams.",
          code: "// This is a single-line comment\nconsole.log('This will run');\n\n/*\n This is a multi-line comment\n It can span multiple lines\n*/\nconsole.log('Still running!');",
        },
      ],
    },

    {
      title: "Level 2: Variables and Data Types",
      description:
        "Learn how to store and work with different kinds of data in JavaScript.",
      lessons: [
        {
          title: "What Are Variables?",
          content:
            "Variables are like containers for data. You use them to store values such as text, numbers, or anything else your program needs. In JavaScript, you can create variables using `let`, `const`, or the older `var`. Use `let` when the value might change, and `const` when it should stay the same.",
          code: "let name = 'Alice';\nconst age = 25;\nvar isStudent = true;\n\nconsole.log(name, age, isStudent);",
        },
        {
          title: "let vs const vs var",
          content:
            "`let` and `const` were introduced in ES6 (2015) and are now preferred over `var`. Use `let` for variables that will change, and `const` for values that should not change. Avoid using `var` in modern JavaScript as it behaves differently in certain situations and can lead to bugs.",
          code: "// let - can be changed later\nlet score = 10;\nscore = 20;\n\n// const - cannot be changed\nconst pi = 3.14;\n// pi = 3.14159; // ❌ Error!\n\n// var - old way, avoid\nvar city = 'New York';",
        },
        {
          title: "Data Types in JavaScript",
          content:
            "JavaScript supports several basic data types:\n\n- String → text (e.g., 'hello')\n- Number → numbers (e.g., 42)\n- Boolean → true or false\n- Null → empty or non-existent value\n- Undefined → a variable that hasn't been given a value\n- Object → structured data (like a box of values)\n- Array → a list of values",
          code: "let name = 'Alice';         // String\nlet age = 30;                // Number\nlet isStudent = true;        // Boolean\nlet car = null;              // Null\nlet result;                  // Undefined\nlet user = { name: 'Bob' };  // Object\nlet scores = [95, 88, 76];   // Array",
        },
        {
          title: "Strings and Numbers",
          content:
            "Strings are sequences of characters wrapped in quotes (`'`, `\"`, or ``). Numbers can be integers or decimals. You can combine (or 'concatenate') strings using `+`. You can also do math with numbers using operators like `+`, `-`, `*`, and `/`.",
          code: "let greeting = 'Hello';\nlet name = 'Alice';\nconsole.log(greeting + ', ' + name + '!'); // Hello, Alice!\n\nlet x = 10;\nlet y = 5;\nconsole.log(x + y); // 15",
        },
        {
          title: "Booleans, Null, and Undefined",
          content:
            "Booleans are simple true/false values. `null` represents an intentional absence of value. `undefined` means a variable exists but hasn't been given a value. These are useful for checking if something is set or not.",
          code: "let isLoggedIn = false; // Boolean\nlet selectedItem = null;  // Null\nlet result;               // Undefined\n\nconsole.log(isLoggedIn, selectedItem, result);",
        },
        {
          title: "Objects and Arrays",
          content:
            "Objects let you group related data together using key-value pairs. Arrays hold multiple values in a list. Both are essential for organizing and managing data in real-world apps.",
          code: "// Object example\nlet user = {\n  name: 'Alice',\n  age: 25,\n  isStudent: true\n};\nconsole.log(user.name);\n\n// Array example\nlet colors = ['red', 'green', 'blue'];\nconsole.log(colors[0]); // red",
        },
      ],
    },

    {
      title: "Level 3: Operators & Logic",
      description:
        "Learn how to perform calculations and make decisions in your code.",
      lessons: [
        {
          title: "What Are Operators?",
          content:
            "Operators are symbols or words that perform operations on values. JavaScript includes different types of operators: arithmetic (math), assignment, comparison, and logical operators.",
          code: "let x = 10;\nlet y = 5;\n\nlet sum = x + y; // 15\nlet product = x * y; // 50\nconsole.log(sum, product);",
        },
        {
          title: "Arithmetic Operators",
          content:
            "Arithmetic operators are used to do math:\n\n- `+` Addition\n- `-` Subtraction\n- `*` Multiplication\n- `/` Division\n- `%` Modulo (remainder)\n- `**` Exponentiation (power)",
          code: "let a = 8;\nlet b = 3;\n\nconsole.log(a + b);  // 11\nconsole.log(a - b);  // 5\nconsole.log(a * b);  // 24\nconsole.log(a / b);  // 2.666...\nconsole.log(a % b);  // 2\nconsole.log(a ** b); // 512",
        },
        {
          title: "Assignment Operators",
          content:
            "Assignment operators set and update variable values:\n\n- `=` assigns a value\n- `+=` adds and assigns\n- `-=` subtracts and assigns\n- `*=` multiplies and assigns\n- `/=` divides and assigns",
          code: "let score = 10;\nscore += 5; // score = score + 5 → 15\nscore *= 2; // score = score * 2 → 30\nconsole.log(score);",
        },
        {
          title: "Comparison Operators",
          content:
            "Comparison operators check values and return a boolean (`true` or `false`):\n\n- `==` equal (loose)\n- `===` equal (strict)\n- `!=` not equal\n- `!==` strictly not equal\n- `>` greater than\n- `<` less than\n- `>=` greater or equal\n- `<=` less or equal",
          code: "let x = 10;\nconsole.log(x == '10');  // true (loose equality)\nconsole.log(x === '10'); // false (strict equality)\nconsole.log(x > 5);      // true\nconsole.log(x <= 10);    // true",
        },
        {
          title: "Logical Operators",
          content:
            "Logical operators combine multiple conditions:\n\n- `&&` AND → all conditions must be true\n- `||` OR → at least one must be true\n- `!` NOT → reverses a condition",
          code: "let isLoggedIn = true;\nlet isAdmin = false;\n\nconsole.log(isLoggedIn && isAdmin); // false\nconsole.log(isLoggedIn || isAdmin); // true\nconsole.log(!isAdmin);              // true",
        },
        {
          title: "Using Operators in Conditions",
          content:
            "Operators are often used in if-statements to make decisions in your code. Combine them to check for complex conditions.",
          code: "let age = 20;\n\nif (age >= 18 && age < 65) {\n  console.log('Adult');\n} else {\n  console.log('Minor or senior');\n}",
        },
      ],
    },

    {
      title: "Level 4: Functions",
      description: "Learn how to organize and reuse code using functions.",
      lessons: [
        {
          title: "What Is a Function?",
          content:
            "A function is a reusable block of code that performs a specific task. You define a function once and can call it whenever you need it. Functions help keep your code organized, readable, and efficient.",
          code: "// Define a function\nfunction greet() {\n  console.log('Hello!');\n}\n\n// Call the function\ngreet(); // Output: Hello!",
        },
        {
          title: "Function Parameters",
          content:
            "You can pass data into functions using parameters. These act like variables that get values when the function is called.",
          code: "function greetUser(name) {\n  console.log('Hello, ' + name + '!');\n}\n\ngreetUser('Alice'); // Hello, Alice!\ngreetUser('Bob');   // Hello, Bob!",
        },
        {
          title: "Return Values",
          content:
            "Functions can return values using the `return` keyword. This lets you store the result of a function in a variable or use it in an expression.",
          code: "function add(a, b) {\n  return a + b;\n}\n\nlet sum = add(5, 3);\nconsole.log(sum); // 8",
        },
        {
          title: "Arrow Functions",
          content:
            "Arrow functions are a shorter way to write functions in JavaScript. They're useful for simple tasks and are common in modern JavaScript.",
          code: "// Regular function\nfunction square(x) {\n  return x * x;\n}\n\n// Arrow function\nconst squareArrow = x => x * x;\n\nconsole.log(square(4));      // 16\nconsole.log(squareArrow(4)); // 16",
        },
        {
          title: "Function Scope",
          content:
            "Variables declared inside a function are only accessible within that function — this is called function scope. It helps keep code clean and avoids naming conflicts.",
          code: "function showMessage() {\n  let message = 'Hi there';\n  console.log(message);\n}\n\nshowMessage();\n// console.log(message); // ❌ Error: message is not defined",
        },
        {
          title: "Functions Calling Functions",
          content:
            "Functions can call other functions. This helps break complex problems into smaller, manageable parts.",
          code: "function add(a, b) {\n  return a + b;\n}\n\nfunction printSum(x, y) {\n  let result = add(x, y);\n  console.log('Sum:', result);\n}\n\nprintSum(5, 7); // Sum: 12",
        },
      ],
    },

    {
      title: "Level 5: Conditions & Control Flow",
      description:
        "Learn how to make your programs respond to different situations using conditional logic.",
      lessons: [
        {
          title: "What is Control Flow?",
          content:
            "Control flow is the order in which your code runs. By default, code runs from top to bottom. But using conditional statements, you can make your code run differently based on certain conditions — like making decisions or running loops.",
          code: "console.log('Start');\n// some condition logic here\nconsole.log('End');",
        },
        {
          title: "The if Statement",
          content:
            "`if` lets you run code only when a condition is true. You write the condition in parentheses and the code block in curly braces `{}`.",
          code: "let age = 18;\n\nif (age >= 18) {\n  console.log('You are an adult.');\n}",
        },
        {
          title: "if...else",
          content:
            "`else` provides an alternative block that runs if the condition is false. This allows your program to choose between two paths.",
          code: "let isRaining = true;\n\nif (isRaining) {\n  console.log('Take an umbrella.');\n} else {\n  console.log('Enjoy the sunshine!');\n}",
        },
        {
          title: "else if Chains",
          content:
            "You can check multiple conditions using `else if`. Only the first condition that evaluates to `true` will run — the rest are skipped.",
          code: "let score = 75;\n\nif (score >= 90) {\n  console.log('Grade: A');\n} else if (score >= 80) {\n  console.log('Grade: B');\n} else if (score >= 70) {\n  console.log('Grade: C');\n} else {\n  console.log('Grade: F');\n}",
        },
        {
          title: "Comparison & Logical Operators in Conditions",
          content:
            "You can use comparison (`>`, `<`, `===`, etc.) and logical (`&&`, `||`, `!`) operators in your conditions to create complex checks.",
          code: "let age = 20;\nlet hasID = true;\n\nif (age >= 18 && hasID) {\n  console.log('You may enter.');\n} else {\n  console.log('Access denied.');\n}",
        },
        {
          title: "The switch Statement",
          content:
            "`switch` is a cleaner way to handle multiple possible values of a variable. Each `case` checks for a specific match.",
          code: "let fruit = 'apple';\n\nswitch (fruit) {\n  case 'apple':\n    console.log('Apples are red.');\n    break;\n  case 'banana':\n    console.log('Bananas are yellow.');\n    break;\n  default:\n    console.log('Unknown fruit.');\n}",
        },
        {
          title: "Ternary Operator",
          content:
            "The ternary operator is a shorthand for simple `if...else` statements. It uses the syntax: `condition ? valueIfTrue : valueIfFalse`.",
          code: "let age = 16;\nlet message = age >= 18 ? 'Adult' : 'Minor';\nconsole.log(message); // Minor",
        },
      ],
    },
    {
      title: "Level 6: Loops",
      description:
        "Learn how to repeat actions in your code using different types of loops.",
      lessons: [
        {
          title: "What Is a Loop?",
          content:
            "A loop lets you run the same block of code multiple times. This is useful when you want to repeat something — like showing items from a list, or counting from 1 to 10. Loops save you from writing the same code over and over.",
          code: "// Without a loop\nconsole.log(1);\nconsole.log(2);\nconsole.log(3);\n\n// With a loop\nfor (let i = 1; i <= 3; i++) {\n  console.log(i);\n}",
        },
        {
          title: "The for Loop",
          content:
            "The `for` loop runs a block of code a specific number of times. It has 3 parts: initialization (`let i = 0`), condition (`i < 5`), and update (`i++`).",
          code: "for (let i = 0; i < 5; i++) {\n  console.log('Step', i);\n}",
        },
        {
          title: "The while Loop",
          content:
            "A `while` loop keeps running **as long as** its condition is true. It's good when you don’t know ahead of time how many times you'll loop.",
          code: "let count = 0;\n\nwhile (count < 3) {\n  console.log('Count is', count);\n  count++;\n}",
        },
        {
          title: "The do...while Loop",
          content:
            "`do...while` is like `while`, but it runs the code **at least once**, even if the condition is false the first time.",
          code: "let number = 5;\n\ndo {\n  console.log('Number is', number);\n  number--;\n} while (number > 0);",
        },
        {
          title: "Looping Through Arrays",
          content:
            "Loops are often used to go through arrays — lists of values. The `for` loop or the special `for...of` loop are perfect for this.",
          code: "let colors = ['red', 'green', 'blue'];\n\nfor (let i = 0; i < colors.length; i++) {\n  console.log(colors[i]);\n}\n\n// Cleaner version with for...of\nfor (let color of colors) {\n  console.log(color);\n}",
        },
        {
          title: "Break and Continue",
          content:
            "`break` stops the loop completely. `continue` skips the current loop step and moves to the next one. These are useful for controlling how the loop behaves.",
          code: "for (let i = 1; i <= 5; i++) {\n  if (i === 3) continue; // skip 3\n  if (i === 5) break;    // stop loop at 5\n  console.log(i);\n}\n// Output: 1, 2, 4",
        },
      ],
    },
    {
      title: "Level 7: Arrays & Array Methods",
      description:
        "Learn how to store and work with lists of data using arrays and useful built-in methods.",
      lessons: [
        {
          title: "What Is an Array?",
          content:
            "An array is a special variable that can hold multiple values. Each value in an array is called an element, and they are stored in order using numbered indexes (starting from 0).",
          code: "let fruits = ['apple', 'banana', 'cherry'];\nconsole.log(fruits[0]); // 'apple'\nconsole.log(fruits[2]); // 'cherry'",
        },
        {
          title: "Adding & Removing Items",
          content:
            "You can add or remove elements in an array using these methods:\n\n- `push()` adds to the end\n- `pop()` removes from the end\n- `unshift()` adds to the start\n- `shift()` removes from the start",
          code: "let colors = ['red', 'blue'];\ncolors.push('green');     // ['red', 'blue', 'green']\ncolors.pop();             // ['red', 'blue']\ncolors.unshift('yellow'); // ['yellow', 'red', 'blue']\ncolors.shift();           // ['red', 'blue']",
        },
        {
          title: "Looping Through Arrays",
          content:
            "Use loops to go through each item in an array. You can use a regular `for` loop or the cleaner `for...of` syntax.",
          code: "let numbers = [10, 20, 30];\n\nfor (let i = 0; i < numbers.length; i++) {\n  console.log(numbers[i]);\n}\n\nfor (let num of numbers) {\n  console.log(num);\n}",
        },
        {
          title: "Common Array Methods",
          content:
            "JavaScript arrays come with many helpful methods:\n\n- `includes()` checks if a value exists\n- `indexOf()` gives the position of a value\n- `join()` turns the array into a string\n- `slice()` copies part of an array",
          code: "let pets = ['dog', 'cat', 'bird'];\nconsole.log(pets.includes('cat'));   // true\nconsole.log(pets.indexOf('bird'));    // 2\nconsole.log(pets.join(', '));         // 'dog, cat, bird'\nconsole.log(pets.slice(1, 3));        // ['cat', 'bird']",
        },
        {
          title: "Modifying Arrays with splice()",
          content:
            "`splice()` lets you add, remove, or replace elements at any position in the array. It's very flexible but changes the original array.",
          code: "let items = ['a', 'b', 'c', 'd'];\nitems.splice(1, 2, 'x', 'y');\nconsole.log(items); // ['a', 'x', 'y', 'd']",
        },
        {
          title: "Array Length",
          content:
            "Use `.length` to get the number of elements in an array. It's helpful for loops and checks.",
          code: "let letters = ['a', 'b', 'c'];\nconsole.log(letters.length); // 3",
        },
      ],
    },
    {
      title: "Level 8: Objects & Properties",
      description:
        "Learn how to group related data and functionality using objects in JavaScript.",
      lessons: [
        {
          title: "What Is an Object?",
          content:
            "An object is a collection of data stored in key-value pairs. It's like a real-life object — for example, a 'car' has properties like `color`, `model`, and `year`.",
          code: "let car = {\n  brand: 'Toyota',\n  model: 'Corolla',\n  year: 2022\n};\n\nconsole.log(car);",
        },
        {
          title: "Accessing Properties",
          content:
            "You can access object values using dot `.` or bracket `[]` notation. Dot notation is simpler, while brackets are good for dynamic or special keys.",
          code: "let user = {\n  name: 'Alice',\n  age: 25\n};\n\nconsole.log(user.name);      // 'Alice'\nconsole.log(user['age']);    // 25",
        },
        {
          title: "Adding & Changing Properties",
          content:
            "You can add new properties or change existing ones by assigning values. JavaScript objects are flexible and can be updated any time.",
          code: "let person = {};\nperson.name = 'John';\nperson.age = 30;\nperson.age = 31; // updated\n\nconsole.log(person);",
        },
        {
          title: "Removing Properties",
          content:
            "Use the `delete` keyword to remove a property from an object.",
          code: "let book = {\n  title: '1984',\n  author: 'George Orwell'\n};\n\ndelete book.author;\nconsole.log(book); // { title: '1984' }",
        },
        {
          title: "Nested Objects",
          content:
            "Objects can contain other objects or arrays. You can access them by chaining properties.",
          code: "let user = {\n  name: 'Emma',\n  contact: {\n    email: 'emma@example.com',\n    phone: '123-4567'\n  }\n};\n\nconsole.log(user.contact.email);",
        },
        {
          title: "Objects with Functions (Methods)",
          content:
            "Functions inside objects are called **methods**. They can access other properties using the `this` keyword.",
          code: "let dog = {\n  name: 'Buddy',\n  bark: function() {\n    console.log(this.name + ' says Woof!');\n  }\n};\n\ndog.bark(); // Buddy says Woof!",
        },
        {
          title: "Looping Through Objects",
          content: "Use a `for...in` loop to go through each key in an object.",
          code: "let student = {\n  name: 'Liam',\n  grade: 'A',\n  age: 16\n};\n\nfor (let key in student) {\n  console.log(key + ':', student[key]);\n}",
        },
      ],
    },
    {
      title: "Level 9: DOM Manipulation",
      description:
        "Learn how to use JavaScript to access and change HTML elements in the browser.",
      lessons: [
        {
          title: "What Is the DOM?",
          content:
            "The DOM (Document Object Model) is a representation of your HTML page that JavaScript can access and change. You can use the DOM to read or change elements, attributes, styles, and more.",
          code: "// Example HTML:\n// <p id=\"greeting\">Hello</p>\n\n// JavaScript:\nlet greeting = document.getElementById('greeting');\nconsole.log(greeting.textContent); // Hello",
        },
        {
          title: "Selecting Elements",
          content:
            "You can grab HTML elements in different ways:\n- `getElementById()` for one element by ID\n- `getElementsByClassName()` or `querySelectorAll()` for lists\n- `querySelector()` for the first match (like CSS selectors)",
          code: "let title = document.querySelector('h1');\nlet items = document.querySelectorAll('.item');\nlet main = document.getElementById('main');",
        },
        {
          title: "Changing Text and HTML",
          content:
            "Use `textContent` or `innerHTML` to change what's inside an element. `textContent` is plain text, while `innerHTML` can include tags.",
          code: "let message = document.getElementById('message');\nmessage.textContent = 'Updated text!';\nmessage.innerHTML = '<strong>Bold text!</strong>';",
        },
        {
          title: "Changing Styles",
          content:
            "You can change an element’s style directly using `.style`. This is great for dynamic effects, like changing colors or hiding elements.",
          code: "let box = document.getElementById('box');\nbox.style.backgroundColor = 'lightblue';\nbox.style.display = 'none';",
        },
        {
          title: "Creating and Adding Elements",
          content:
            "You can create new HTML elements with `document.createElement()` and add them to the page using `appendChild()` or `append()`.",
          code: "let newItem = document.createElement('li');\nnewItem.textContent = 'New list item';\n\ndocument.querySelector('ul').appendChild(newItem);",
        },
        {
          title: "Removing Elements",
          content:
            "You can remove elements by calling `.remove()` on them or using `.removeChild()` on their parent.",
          code: "let item = document.getElementById('delete-me');\nitem.remove();",
        },
        {
          title: "Changing Attributes",
          content:
            "Use `getAttribute()`, `setAttribute()`, and `removeAttribute()` to work with HTML attributes like `href`, `src`, or `class`.",
          code: "let link = document.querySelector('a');\nlink.setAttribute('href', 'https://example.com');\nlink.setAttribute('target', '_blank');",
        },
      ],
    },
    {
      title: "Level 10: Events & Interaction",
      description:
        "Learn how to respond to user actions like clicks, typing, and more using JavaScript event listeners.",
      lessons: [
        {
          title: "What Is an Event?",
          content:
            "An event is something that happens in the browser — like a click, a key press, or a page load. You can make your code react to these events using event listeners.",
          code: "// Example HTML:\n// <button id=\"myBtn\">Click me</button>\n\n// JavaScript:\ndocument.getElementById('myBtn').addEventListener('click', function() {\n  alert('Button was clicked!');\n});",
        },
        {
          title: "addEventListener()",
          content:
            "The `addEventListener()` method lets you attach a function to run when a specific event happens on an element.",
          code: "let box = document.getElementById('box');\n\nbox.addEventListener('mouseover', function() {\n  box.style.backgroundColor = 'yellow';\n});",
        },
        {
          title: "Click Events",
          content:
            "Click events are triggered when the user clicks an element. Great for buttons, toggles, and interactive components.",
          code: "let btn = document.getElementById('toggle');\n\nbtn.addEventListener('click', function() {\n  console.log('You clicked the button!');\n});",
        },
        {
          title: "Input & Change Events",
          content:
            "You can detect when users type or change values in form fields using `input` or `change` events.",
          code: "// HTML: <input id=\"nameInput\" />\nlet input = document.getElementById('nameInput');\n\ninput.addEventListener('input', function() {\n  console.log('Current value:', input.value);\n});",
        },
        {
          title: "Keyboard Events",
          content:
            "Listen for `keydown`, `keyup`, or `keypress` events to respond when the user types keys.",
          code: "document.addEventListener('keydown', function(event) {\n  console.log('You pressed:', event.key);\n});",
        },
        {
          title: "Event Object",
          content:
            "Every event gives you access to an event object with useful information like the element that triggered the event, the mouse position, and more.",
          code: "document.addEventListener('click', function(event) {\n  console.log('Clicked element:', event.target);\n  console.log('X:', event.clientX, 'Y:', event.clientY);\n});",
        },
        {
          title: "Removing Event Listeners",
          content:
            "You can remove an event listener using `removeEventListener()`, but only if the function is named (not anonymous).",
          code: "function sayHello() {\n  alert('Hello!');\n}\n\nlet btn = document.getElementById('btn');\nbtn.addEventListener('click', sayHello);\n\n// Later\nbtn.removeEventListener('click', sayHello);",
        },
      ],
    },
    {
      title: "Level 11: Functions Deep Dive",
      description:
        "Master how functions work in JavaScript, including parameters, return values, scope, and arrow functions.",
      lessons: [
        {
          title: "What Is a Function?",
          content:
            "A function is a reusable block of code that performs a task. You define it once, then call it whenever you need it.",
          code: "function greet() {\n  console.log('Hello from a function!');\n}\n\ngreet(); // Call the function",
        },
        {
          title: "Parameters and Arguments",
          content:
            "Functions can accept inputs called **parameters**, and you pass **arguments** when calling the function.",
          code: "function greet(name) {\n  console.log('Hello, ' + name);\n}\n\ngreet('Alice');\ngreet('Bob');",
        },
        {
          title: "Return Values",
          content:
            "Functions can return a result using the `return` keyword. The returned value can be stored or used elsewhere.",
          code: "function add(a, b) {\n  return a + b;\n}\n\nlet result = add(5, 3);\nconsole.log(result); // 8",
        },
        {
          title: "Function Expressions",
          content:
            "Functions can also be stored in variables. This is called a function expression.",
          code: "let sayHi = function() {\n  console.log('Hi there!');\n};\n\nsayHi();",
        },
        {
          title: "Arrow Functions",
          content:
            "Arrow functions are a shorter way to write functions. Great for quick, simple tasks.",
          code: "let square = (x) => x * x;\nconsole.log(square(4)); // 16\n\nlet greet = (name) => {\n  console.log('Hello, ' + name);\n};",
        },
        {
          title: "Function Scope",
          content:
            "Variables declared inside a function are **local** to that function. They can’t be accessed from outside.",
          code: "function test() {\n  let message = 'Secret';\n  console.log(message);\n}\n\ntest();\n// console.log(message); // ❌ Error: not defined",
        },
        {
          title: "Nested Functions",
          content:
            "You can define one function inside another. Inner functions have access to the outer function’s variables.",
          code: "function outer() {\n  let name = 'JavaScript';\n\n  function inner() {\n    console.log('Hello from ' + name);\n  }\n\n  inner();\n}\n\nouter();",
        },
      ],
    },
    {
      title: "Level 12: ES6 Features",
      description:
        "Explore modern JavaScript features like let/const, template strings, destructuring, spread, and more.",
      lessons: [
        {
          title: "let and const",
          content:
            "`let` and `const` are modern ways to declare variables. Use `let` for variables that will change, and `const` for values that won’t.",
          code: "let score = 10;\nscore = 15; // ✅ allowed\n\nconst pi = 3.14;\n// pi = 3.1415; ❌ not allowed",
        },
        {
          title: "Template Literals",
          content:
            "Template literals (backticks ``) allow you to insert variables directly into strings using `${}`.",
          code: "let name = 'Alice';\nlet greeting = `Hello, ${name}!`;\nconsole.log(greeting); // Hello, Alice!",
        },
        {
          title: "Arrow Functions",
          content:
            "Arrow functions provide a concise way to write functions. They’re especially useful for callbacks and small functions.",
          code: "const add = (a, b) => a + b;\nconsole.log(add(2, 3)); // 5",
        },
        {
          title: "Destructuring",
          content:
            "Destructuring makes it easy to extract values from arrays or objects into variables.",
          code: "let user = { name: 'Bob', age: 30 };\nlet { name, age } = user;\nconsole.log(name); // 'Bob'\n\nlet colors = ['red', 'green'];\nlet [first, second] = colors;\nconsole.log(second); // 'green'",
        },
        {
          title: "Spread and Rest Operators",
          content:
            "`...` is a powerful operator. Spread (`...arr`) copies or expands elements. Rest (`...args`) gathers multiple values.",
          code: "// Spread:\nlet nums = [1, 2, 3];\nlet newNums = [...nums, 4];\n\n// Rest:\nfunction sum(...numbers) {\n  return numbers.reduce((a, b) => a + b);\n}\n\nconsole.log(sum(1, 2, 3)); // 6",
        },
        {
          title: "Default Parameters",
          content:
            "You can set default values for function parameters, so they have a value even if none is passed.",
          code: "function greet(name = 'Guest') {\n  console.log(`Hello, ${name}`);\n}\n\ngreet();        // Hello, Guest\ngreet('Anna');   // Hello, Anna",
        },
        {
          title: "Enhanced Object Literals",
          content:
            "You can write cleaner object code with shorthand property names and method definitions.",
          code: "let name = 'Liam';\nlet user = {\n  name,\n  greet() {\n    console.log(`Hi, I'm ${this.name}`);\n  }\n};\n\nuser.greet();",
        },
      ],
    },
    {
      title: "Level 13: Asynchronous JavaScript (Callbacks & Promises)",
      description:
        "Understand how JavaScript handles time-based and delayed tasks using callbacks and promises.",
      lessons: [
        {
          title: "What Is Asynchronous Code?",
          content:
            "Asynchronous code runs in the background and lets your app keep going without waiting. It's used for things like API calls, timers, and user interactions.",
          code: "console.log('Start');\n\nsetTimeout(() => {\n  console.log('This runs later');\n}, 2000);\n\nconsole.log('End');",
        },
        {
          title: "setTimeout and setInterval",
          content:
            "`setTimeout` runs code once after a delay. `setInterval` runs code repeatedly at set intervals.",
          code: "setTimeout(() => {\n  console.log('Run after 1 second');\n}, 1000);\n\nlet count = 0;\nlet interval = setInterval(() => {\n  count++;\n  console.log('Count:', count);\n  if (count === 5) clearInterval(interval);\n}, 1000);",
        },
        {
          title: "Callbacks",
          content:
            "A callback is a function passed as an argument to another function, often used for async tasks.",
          code: "function fetchData(callback) {\n  setTimeout(() => {\n    callback('Data loaded');\n  }, 1500);\n}\n\nfetchData((data) => {\n  console.log(data);\n});",
        },
        {
          title: "Callback Hell",
          content:
            "Using many nested callbacks can lead to messy, hard-to-read code — known as 'callback hell'.",
          code: "setTimeout(() => {\n  console.log('Step 1');\n  setTimeout(() => {\n    console.log('Step 2');\n    setTimeout(() => {\n      console.log('Step 3');\n    }, 1000);\n  }, 1000);\n}, 1000);",
        },
        {
          title: "What Are Promises?",
          content:
            "A Promise represents a value that may be available now, later, or never. It helps handle async code in a cleaner way.",
          code: "let promise = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    resolve('Success!');\n  }, 1000);\n});\n\npromise.then((msg) => {\n  console.log(msg);\n});",
        },
        {
          title: "Using .then() and .catch()",
          content:
            "You can use `.then()` to handle a successful result and `.catch()` to handle errors.",
          code: "fetch('https://api.example.com/data')\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error('Error:', error));",
        },
        {
          title: "Promise Chaining",
          content:
            "You can chain multiple `.then()` calls for sequential tasks, avoiding deeply nested callbacks.",
          code: "new Promise((resolve) => {\n  resolve(2);\n}).then((num) => {\n  return num * 2;\n}).then((result) => {\n  console.log('Result:', result); // 4\n});",
        },
      ],
    },
    {
      title: "Level 14: Async/Await",
      description:
        "Learn how to simplify asynchronous code with async and await, making it easier to read and write.",
      lessons: [
        {
          title: "What Is async/await?",
          content:
            "`async` and `await` are modern JavaScript keywords that make asynchronous code look and behave more like regular synchronous code. They are built on top of Promises.",
          code: "async function greet() {\n  return 'Hello!';\n}\n\ngreet().then(msg => console.log(msg)); // Hello!",
        },
        {
          title: "Using await with Promises",
          content:
            "`await` pauses the function until a Promise resolves. You can only use it inside an `async` function.",
          code: "function delay(ms) {\n  return new Promise(resolve => setTimeout(resolve, ms));\n}\n\nasync function sayHi() {\n  console.log('Waiting...');\n  await delay(1000);\n  console.log('Hi after 1 second');\n}\n\nsayHi();",
        },
        {
          title: "Fetching Data with async/await",
          content:
            "You can use `await` to get data from APIs in a clean and readable way.",
          code: "async function loadData() {\n  try {\n    const response = await fetch('https://api.example.com/data');\n    const data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error('Error fetching data:', error);\n  }\n}\n\nloadData();",
        },
        {
          title: "Try/Catch for Error Handling",
          content:
            "Use `try`/`catch` to handle errors when using `await`, just like regular error handling in synchronous code.",
          code: "async function getUser() {\n  try {\n    const res = await fetch('https://api.example.com/user');\n    const user = await res.json();\n    console.log(user);\n  } catch (err) {\n    console.error('Failed to load user:', err);\n  }\n}\n\ngetUser();",
        },
        {
          title: "Parallel Await (Promise.all)",
          content:
            "If you want to run multiple async tasks in parallel, use `Promise.all()` instead of waiting one by one.",
          code: "async function load() {\n  const [user, posts] = await Promise.all([\n    fetch('/api/user').then(res => res.json()),\n    fetch('/api/posts').then(res => res.json())\n  ]);\n\n  console.log(user, posts);\n}\n\nload();",
        },
        {
          title: "Common Mistakes",
          content:
            "- You can’t use `await` outside of an `async` function.\n- Forgetting `await` means the code won't wait.\n- Handle errors to avoid app crashes.",
          code: "// ❌ Invalid:\n// await fetch('https://...'); // SyntaxError if outside an async function\n\n// ✅ Valid inside async:\nasync function getData() {\n  const res = await fetch('https://...');\n}",
        },
      ],
    },
    {
      title: "Level 15: Working with APIs",
      description:
        "Learn how to send and receive data from APIs using fetch, and understand how to handle responses and errors.",
      lessons: [
        {
          title: "What Is an API?",
          content:
            "An API (Application Programming Interface) allows your app to talk to another service, like a weather API, a news API, or your own backend server. APIs send and receive data, usually in JSON format.",
          code: "// Example of an API URL:\n// https://api.example.com/weather?city=London",
        },
        {
          title: "The fetch() Function",
          content:
            "`fetch()` is used to make HTTP requests. It returns a Promise that resolves to a `Response` object.",
          code: "fetch('https://api.example.com/data')\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error('Error:', error));",
        },
        {
          title: "GET Requests",
          content:
            "GET requests are used to fetch data from an API. You usually don’t need to send extra data in the body.",
          code: "fetch('https://jsonplaceholder.typicode.com/posts/1')\n  .then(res => res.json())\n  .then(post => console.log(post));",
        },
        {
          title: "POST Requests",
          content:
            "POST requests are used to send data to an API, usually to create something (like a user or comment). You must include headers and a JSON body.",
          code: "fetch('https://jsonplaceholder.typicode.com/posts', {\n  method: 'POST',\n  headers: {\n    'Content-Type': 'application/json'\n  },\n  body: JSON.stringify({\n    title: 'Hello',\n    body: 'This is a post.',\n    userId: 1\n  })\n})\n.then(res => res.json())\n.then(data => console.log(data));",
        },
        {
          title: "Handling Errors",
          content:
            "Always check for errors when working with APIs. Use `.catch()` or try/catch if using async/await.",
          code: "async function getData() {\n  try {\n    const res = await fetch('https://wrong-url.com');\n    if (!res.ok) throw new Error('Network response was not ok');\n    const data = await res.json();\n    console.log(data);\n  } catch (err) {\n    console.error('Fetch failed:', err);\n  }\n}\n\ngetData();",
        },
        {
          title: "API Status Codes",
          content:
            "HTTP responses come with status codes. For example:\n- `200`: Success\n- `404`: Not Found\n- `500`: Server Error\n\nYou can check `response.status` to handle them.",
          code: "fetch('/some-api')\n  .then(res => {\n    if (res.status === 404) {\n      throw new Error('Not found');\n    }\n    return res.json();\n  })\n  .then(data => console.log(data))\n  .catch(err => console.error(err));",
        },
        {
          title: "Displaying API Data",
          content:
            "Once you fetch data, you can use JavaScript to show it on your webpage using DOM manipulation.",
          code: "async function showUser() {\n  const res = await fetch('https://jsonplaceholder.typicode.com/users/1');\n  const user = await res.json();\n  document.getElementById('output').textContent = `Name: ${user.name}`;\n}\n\nshowUser();\n\n// HTML: <div id=\"output\"></div>",
        },
      ],
    },
    {
      title: "Level 16: DOM Projects",
      description:
        "Build real-world mini-projects using HTML, CSS, JavaScript, DOM manipulation, events, and APIs.",
      lessons: [
        {
          title: "Project 1: Click Counter",
          content:
            "Build a simple app that counts how many times a button is clicked.",
          code: "// HTML:\n// <button id=\"countBtn\">Click me</button>\n// <p>You clicked <span id=\"count\">0</span> times.</p>\n\nlet count = 0;\nconst btn = document.getElementById('countBtn');\nconst display = document.getElementById('count');\n\nbtn.addEventListener('click', () => {\n  count++;\n  display.textContent = count;\n});",
        },
        {
          title: "Project 2: Light/Dark Mode Toggle",
          content:
            "Use JavaScript to let users toggle between light and dark themes.",
          code: "// HTML:\n// <button id=\"toggleTheme\">Toggle Theme</button>\n// <body id=\"body\">\n\nconst button = document.getElementById('toggleTheme');\nconst body = document.body;\n\nbutton.addEventListener('click', () => {\n  body.classList.toggle('dark-mode');\n});\n\n/* CSS:\n.dark-mode {\n  background: #111;\n  color: #fff;\n} */",
        },
        {
          title: "Project 3: Random Quote Generator",
          content:
            "Fetch a random quote from an API and display it on the page.",
          code: "// HTML:\n// <button id=\"getQuote\">New Quote</button>\n// <p id=\"quote\"></p>\n\nasync function getQuote() {\n  const res = await fetch('https://api.quotable.io/random');\n  const data = await res.json();\n  document.getElementById('quote').textContent = data.content;\n}\n\ndocument.getElementById('getQuote').addEventListener('click', getQuote);",
        },
        {
          title: "Project 4: Todo List",
          content:
            "Create a simple task manager where users can add, complete, and delete tasks.",
          code: "// HTML:\n// <input id=\"taskInput\" placeholder=\"Add task\" />\n// <button id=\"addTask\">Add</button>\n// <ul id=\"taskList\"></ul>\n\nconst input = document.getElementById('taskInput');\nconst addBtn = document.getElementById('addTask');\nconst taskList = document.getElementById('taskList');\n\naddBtn.addEventListener('click', () => {\n  const text = input.value.trim();\n  if (text) {\n    const li = document.createElement('li');\n    li.textContent = text;\n    li.addEventListener('click', () => li.classList.toggle('done'));\n    taskList.appendChild(li);\n    input.value = '';\n  }\n});\n\n/* CSS:\n.done {\n  text-decoration: line-through;\n} */",
        },
        {
          title: "Project 5: Live Character Counter",
          content:
            "Build an input field that shows how many characters the user has typed in real time.",
          code: "// HTML:\n// <textarea id=\"message\" maxlength=\"100\"></textarea>\n// <p id=\"charCount\">0 / 100</p>\n\nconst textarea = document.getElementById('message');\nconst counter = document.getElementById('charCount');\n\ntextarea.addEventListener('input', () => {\n  const length = textarea.value.length;\n  counter.textContent = `${length} / 100`;\n});",
        },
        {
          title: "Project 6: Tip Calculator",
          content:
            "Create a small app that calculates the tip amount based on bill and tip percentage.",
          code: '// HTML:\n// <input id="bill" type="number" placeholder="Bill Amount" />\n// <input id="tip" type="number" placeholder="Tip %" />\n// <button id="calcTip">Calculate</button>\n// <p id="result"></p>\n\nconst bill = document.getElementById(\'bill\');\nconst tip = document.getElementById(\'tip\');\nconst result = document.getElementById(\'result\');\nconst button = document.getElementById(\'calcTip\');\n\nbutton.addEventListener(\'click\', () => {\n  const billAmt = parseFloat(bill.value);\n  const tipPercent = parseFloat(tip.value);\n  if (!isNaN(billAmt) && !isNaN(tipPercent)) {\n    const tipAmt = (billAmt * tipPercent) / 100;\n    result.textContent = `Tip: $${tipAmt.toFixed(2)}`;\n  }\n});',
        },
      ],
    },
    {
      title: "Level 17: Local Storage and Persistence",
      description:
        "Learn how to store and retrieve data in the browser using localStorage for persistence.",
      lessons: [
        {
          title: "What Is Local Storage?",
          content:
            "`localStorage` is a built-in web API that lets you store key-value pairs in the browser. Data stored here stays even after the browser is closed, until it's manually cleared.",
          code: "// Set an item\nlocalStorage.setItem('username', 'Alice');\n\n// Get an item\nlet user = localStorage.getItem('username');\nconsole.log(user); // 'Alice'",
        },
        {
          title: "Storing Simple Values",
          content:
            "You can store strings directly. Numbers or booleans will be converted to strings automatically.",
          code: "localStorage.setItem('age', 25);\nconsole.log(localStorage.getItem('age')); // '25'\n\n// Booleans become strings too\nlocalStorage.setItem('loggedIn', true);\nconsole.log(localStorage.getItem('loggedIn')); // 'true'",
        },
        {
          title: "Removing and Clearing Data",
          content:
            "Use `removeItem()` to delete one entry and `clear()` to delete all data.",
          code: "localStorage.removeItem('username');\nlocalStorage.clear(); // Removes all keys",
        },
        {
          title: "Storing Objects (JSON)",
          content:
            "`localStorage` can only store strings. To store objects or arrays, use `JSON.stringify()` and `JSON.parse()`.",
          code: "const user = { name: 'Alice', age: 30 };\nlocalStorage.setItem('user', JSON.stringify(user));\n\nconst data = JSON.parse(localStorage.getItem('user'));\nconsole.log(data.name); // 'Alice'",
        },
        {
          title: "Practical Example: Remember a Theme",
          content:
            "Store the user's selected theme so it stays after refresh or returning later.",
          code: "// Save theme\nlocalStorage.setItem('theme', 'dark');\n\n// Load theme\nconst savedTheme = localStorage.getItem('theme');\nif (savedTheme === 'dark') {\n  document.body.classList.add('dark');\n}",
        },
        {
          title: "Example: Save Tasks in Todo App",
          content:
            "You can persist a todo list using localStorage by saving the array of tasks as a JSON string.",
          code: "// Save todos\nconst todos = ['Buy milk', 'Call mom'];\nlocalStorage.setItem('todos', JSON.stringify(todos));\n\n// Load todos\nconst stored = JSON.parse(localStorage.getItem('todos'));\nconsole.log(stored); // ['Buy milk', 'Call mom']",
        },
        {
          title: "Tips for Using localStorage",
          content:
            "- Always use `try/catch` when using `JSON.parse()`.\n- Store only necessary data.\n- Don’t store sensitive info like passwords.\n- Data is shared across tabs from the same origin.",
          code: "try {\n  const settings = JSON.parse(localStorage.getItem('settings'));\n  if (settings) console.log(settings);\n} catch (err) {\n  console.error('Invalid JSON in storage');\n}",
        },
      ],
    },
    {
      title: "Level 18: ES6+ (Modern JavaScript Features)",
      description:
        "Explore powerful modern JavaScript features introduced in ES6 and beyond: arrow functions, destructuring, spread/rest, template literals, and more.",
      lessons: [
        {
          title: "Arrow Functions",
          content:
            "Arrow functions provide a shorter syntax for writing functions. They also don't have their own `this` context.",
          code: "// Traditional function\nfunction greet(name) {\n  return 'Hello, ' + name;\n}\n\n// Arrow function\nconst greet = name => `Hello, ${name}`;\n\nconsole.log(greet('Alice'));",
        },
        {
          title: "Template Literals",
          content:
            "Template literals use backticks (`` ` ``) and allow you to embed variables directly into strings.",
          code: "const name = 'Bob';\nconst age = 25;\n\nconsole.log(`Name: ${name}, Age: ${age}`);",
        },
        {
          title: "Destructuring",
          content:
            "Destructuring lets you extract values from arrays or objects into variables more easily.",
          code: "// Array destructuring\nconst [x, y] = [10, 20];\nconsole.log(x); // 10\n\n// Object destructuring\nconst user = { name: 'Alice', age: 30 };\nconst { name, age } = user;\nconsole.log(name); // 'Alice'",
        },
        {
          title: "Spread Operator (`...`)",
          content:
            "The spread operator allows you to copy or combine arrays and objects.",
          code: "const nums = [1, 2, 3];\nconst moreNums = [...nums, 4, 5];\nconsole.log(moreNums); // [1, 2, 3, 4, 5]\n\nconst user = { name: 'Jane' };\nconst updated = { ...user, age: 22 };\nconsole.log(updated);",
        },
        {
          title: "Rest Parameters",
          content:
            "Use rest parameters to accept any number of arguments in a function.",
          code: "function sum(...numbers) {\n  return numbers.reduce((a, b) => a + b, 0);\n}\n\nconsole.log(sum(1, 2, 3)); // 6",
        },
        {
          title: "Default Parameters",
          content:
            "You can set default values for function parameters in case no value is passed.",
          code: "function greet(name = 'Guest') {\n  console.log(`Hello, ${name}`);\n}\n\ngreet(); // Hello, Guest\ngreet('Emma'); // Hello, Emma",
        },
        {
          title: "Enhanced Object Literals",
          content:
            "You can simplify object creation if variable names match property names.",
          code: "const name = 'Leo';\nconst age = 29;\nconst user = { name, age };\nconsole.log(user); // { name: 'Leo', age: 29 }",
        },
        {
          title: "Short-circuiting with || and ??",
          content:
            "`||` returns the first truthy value. `??` returns the first defined (non-null/undefined) value.",
          code: "const username = '';\nconsole.log(username || 'Anonymous'); // 'Anonymous'\n\nconst setting = null;\nconsole.log(setting ?? 'Default'); // 'Default'",
        },
      ],
    },
    {
      title: "Level 19: JavaScript Modules (import/export)",
      description:
        "Learn how to split your code into separate files using ES6 module syntax: import and export.",
      lessons: [
        {
          title: "What Are Modules?",
          content:
            'Modules allow you to split your JavaScript code into separate files. This improves readability, reuse, and maintainability. Modules must be loaded with `type="module"` in your HTML.',
          code: '<!-- index.html -->\n<script type="module" src="main.js"></script>',
        },
        {
          title: "Exporting Functions and Variables",
          content:
            "You can export anything from a module using `export`. You can export multiple items.",
          code: "// utils.js\nexport const PI = 3.14159;\nexport function add(a, b) {\n  return a + b;\n}",
        },
        {
          title: "Importing from Modules",
          content:
            "Use `import` to bring exported items into another file. The path must be relative and end in `.js`.",
          code: "// main.js\nimport { PI, add } from './utils.js';\n\nconsole.log(add(2, 3)); // 5\nconsole.log(PI);",
        },
        {
          title: "Default Exports",
          content:
            "You can mark one value in a module as the default export. It can be imported without curly braces.",
          code: "// math.js\nexport default function multiply(a, b) {\n  return a * b;\n}\n\n// main.js\nimport multiply from './math.js';\nconsole.log(multiply(4, 5)); // 20",
        },
        {
          title: "Renaming Imports/Exports",
          content: "You can rename exports or imports using `as`.",
          code: "// helpers.js\nexport function log(msg) {\n  console.log('[LOG]:', msg);\n}\n\n// main.js\nimport { log as print } from './helpers.js';\nprint('Hello!');",
        },
        {
          title: "Organizing Code with Modules",
          content:
            "Use modules to separate concerns in your project. Example: `math.js` for calculations, `ui.js` for DOM, and `main.js` to glue everything together.",
          code: "// folder structure:\n// - main.js\n// - math.js\n// - ui.js\n\n// Each file handles one part of the app and is easy to test and maintain.",
        },
        {
          title: "Note: Modules are Strict by Default",
          content:
            "Modules automatically run in strict mode. That means safer and cleaner code (e.g., no undeclared variables).",
          code: "// This will throw an error in a module:\nx = 10; // ❌ ReferenceError",
        },
        {
          title: "Running Modules Locally (CORS Tip)",
          content:
            "Most browsers block module scripts if loaded from local files. Run a local server (like `live-server`, `vite`, or VS Code’s Live Server extension) to test them properly.",
          code: "// In terminal:\n// npx live-server\n// OR\n// npm create vite",
        },
      ],
    },
    {
      title: "Level 20: Asynchronous JavaScript (Promises & async/await)",
      description:
        "Learn how to manage time delays, API calls, and asynchronous code in JavaScript using Promises and async/await.",
      lessons: [
        {
          title: "What Is Asynchronous Code?",
          content:
            "Asynchronous code allows JavaScript to perform long-running tasks (like fetching data) *without freezing the page*. It lets your app stay responsive.",
          code: "console.log('1');\nsetTimeout(() => console.log('2'), 1000);\nconsole.log('3');\n// Output: 1, 3, (after 1 sec) 2",
        },
        {
          title: "Callbacks",
          content:
            "A callback is a function passed into another function to be called later. This was the old way to handle async code.",
          code: "function loadData(callback) {\n  setTimeout(() => {\n    callback('Data loaded');\n  }, 1000);\n}\n\nloadData(msg => console.log(msg));",
        },
        {
          title: "What Are Promises?",
          content:
            "Promises are objects representing a value that will be available in the future. They have `.then()` and `.catch()` methods.",
          code: "const promise = new Promise((resolve, reject) => {\n  setTimeout(() => resolve('Success!'), 1000);\n});\n\npromise.then(result => console.log(result));",
        },
        {
          title: "Chaining Promises",
          content:
            "You can chain `.then()` calls to handle sequences of async steps.",
          code: "fetch('https://api.quotable.io/random')\n  .then(res => res.json())\n  .then(data => console.log(data.content))\n  .catch(err => console.error(err));",
        },
        {
          title: "Async/Await Syntax",
          content:
            "`async/await` is a cleaner way to work with Promises. It makes your code look synchronous while still being async.",
          code: "async function getQuote() {\n  try {\n    const res = await fetch('https://api.quotable.io/random');\n    const data = await res.json();\n    console.log(data.content);\n  } catch (err) {\n    console.error('Error:', err);\n  }\n}\n\ngetQuote();",
        },
        {
          title: "Promise.all",
          content:
            "`Promise.all` runs multiple Promises in parallel and waits until *all* are done. Useful when fetching multiple things.",
          code: "const p1 = fetch('/data1.json');\nconst p2 = fetch('/data2.json');\n\nPromise.all([p1, p2])\n  .then(responses => Promise.all(responses.map(r => r.json())))\n  .then(data => console.log(data));",
        },
        {
          title: "Simulating Delay with Promises",
          content:
            "You can create your own delay using `setTimeout` inside a Promise.",
          code: "function wait(ms) {\n  return new Promise(resolve => setTimeout(resolve, ms));\n}\n\nasync function start() {\n  console.log('Wait...');\n  await wait(2000);\n  console.log('2 seconds later');\n}\n\nstart();",
        },
      ],
    },
    {
      title: "Level 21: Error Handling and Debugging",
      description:
        "Learn how to find, catch, and handle errors gracefully in JavaScript using try/catch, throwing errors, and debugging tools.",
      lessons: [
        {
          title: "Common JavaScript Errors",
          content:
            "Errors occur when something unexpected happens, like calling a function that doesn't exist or accessing a variable that isn't defined.",
          code: "// ReferenceError: x is not defined\n// console.log(x);\n\n// TypeError: undefined is not a function\n// let num = 5;\n// num();",
        },
        {
          title: "Using try/catch",
          content:
            "Wrap risky code inside `try` to catch errors in `catch` block and prevent your app from crashing.",
          code: "try {\n  let result = riskyFunction();\n  console.log(result);\n} catch (error) {\n  console.error('Caught an error:', error.message);\n}",
        },
        {
          title: "Throwing Your Own Errors",
          content:
            "You can create and throw custom errors with `throw` to handle invalid input or unexpected conditions.",
          code: "function divide(a, b) {\n  if (b === 0) {\n    throw new Error('Cannot divide by zero');\n  }\n  return a / b;\n}\n\ntry {\n  console.log(divide(10, 0));\n} catch (e) {\n  console.error(e.message);\n}",
        },
        {
          title: "Debugging with console",
          content:
            "Use `console.log()`, `console.error()`, and `console.table()` to inspect values and errors.",
          code: "const user = { name: 'Alice', age: 25 };\nconsole.log('User:', user);\nconsole.table([user]);",
        },
        {
          title: "Using debugger Statement",
          content:
            "Insert `debugger;` in your code to pause execution and inspect variables in browser developer tools.",
          code: "function add(a, b) {\n  debugger; // Code execution pauses here\n  return a + b;\n}\nadd(2, 3);",
        },
        {
          title: "Common Debugging Tips",
          content:
            "- Read error messages carefully.\n- Use browser DevTools (Sources tab) to set breakpoints.\n- Step through code line-by-line.\n- Check variable values and call stack.\n- Use `console.trace()` to see the call path.",
          code: "// Example of console.trace()\nfunction a() { b(); }\nfunction b() { console.trace(); }\na();",
        },
        {
          title: "Handling Async Errors",
          content:
            "Use try/catch inside async functions and `.catch()` on Promises to handle errors properly.",
          code: "async function fetchData() {\n  try {\n    const res = await fetch('bad-url');\n    const data = await res.json();\n  } catch (error) {\n    console.error('Fetch failed:', error);\n  }\n}\n\nfetchData();",
        },
      ],
    },
    {
      title: "Level 22: Working with the DOM (Document Object Model)",
      description:
        "Learn how to access and manipulate webpage elements using JavaScript to create interactive user experiences.",
      lessons: [
        {
          title: "What Is the DOM?",
          content:
            "The DOM is a tree-like structure representing the HTML elements on a page. JavaScript can read and change these elements to update the page dynamically.",
          code: "// The DOM represents HTML elements\n// Example: <div id='myDiv'>Hello</div>",
        },
        {
          title: "Selecting Elements",
          content:
            "Use methods like `getElementById`, `querySelector`, and `querySelectorAll` to select HTML elements.",
          code: "const myDiv = document.getElementById('myDiv');\nconst firstBtn = document.querySelector('button');\nconst allItems = document.querySelectorAll('.item');",
        },
        {
          title: "Changing Content and Attributes",
          content:
            "Modify the text inside elements or change their attributes like `src` or `href`.",
          code: "myDiv.textContent = 'New content!';\n\nconst link = document.querySelector('a');\nlink.href = 'https://example.com';",
        },
        {
          title: "Changing Styles",
          content: "You can change CSS styles directly from JavaScript.",
          code: "myDiv.style.color = 'blue';\nmyDiv.style.fontSize = '20px';",
        },
        {
          title: "Creating and Adding Elements",
          content: "Create new elements and add them to the page dynamically.",
          code: "const newP = document.createElement('p');\nnewP.textContent = 'I am new here!';\ndocument.body.appendChild(newP);",
        },
        {
          title: "Removing Elements",
          content:
            "Remove elements from the DOM with `.remove()` or `.removeChild()`.",
          code: "newP.remove();\n// or\nconst parent = document.getElementById('parent');\nconst child = document.getElementById('child');\nparent.removeChild(child);",
        },
        {
          title: "Event Listeners",
          content:
            "Respond to user actions like clicks or keypresses using event listeners.",
          code: "const button = document.querySelector('button');\nbutton.addEventListener('click', () => {\n  alert('Button clicked!');\n});",
        },
        {
          title: "Event Object",
          content:
            "Event handlers receive an event object with info like the target element and mouse position.",
          code: "button.addEventListener('click', event => {\n  console.log('Clicked element:', event.target);\n});",
        },
        {
          title: "Preventing Default Actions",
          content:
            "Use `event.preventDefault()` to stop default browser actions like link navigation or form submission.",
          code: "const link = document.querySelector('a');\nlink.addEventListener('click', event => {\n  event.preventDefault();\n  alert('Link click prevented');\n});",
        },
        {
          title: "Practice: Toggle Dark Mode",
          content:
            "Add a button that toggles a 'dark-mode' class on the body to switch themes.",
          code: "const toggleBtn = document.getElementById('toggle-dark');\ntoggleBtn.addEventListener('click', () => {\n  document.body.classList.toggle('dark-mode');\n});",
        },
      ],
    },
    {
      title: "Level 23: Event Delegation and Advanced DOM Events",
      description:
        "Master efficient event handling using event delegation, bubbling, capturing, and other advanced DOM event concepts.",
      lessons: [
        {
          title: "Event Bubbling and Capturing",
          content:
            "When an event happens on an element, it first goes down (capturing phase) and then bubbles up (bubbling phase) through ancestor elements.",
          code: "element.addEventListener('click', () => console.log('Captured'), true); // Capturing\n\nelement.addEventListener('click', () => console.log('Bubbled'), false); // Bubbling",
        },
        {
          title: "What Is Event Delegation?",
          content:
            "Instead of adding event listeners to many child elements, add one listener on a common parent to handle events for its children.",
          code: "const list = document.getElementById('list');\nlist.addEventListener('click', event => {\n  if (event.target && event.target.matches('li.item')) {\n    console.log('Clicked:', event.target.textContent);\n  }\n});",
        },
        {
          title: "Benefits of Event Delegation",
          content:
            "- Improves performance by reducing number of listeners.\n- Works for dynamically added elements.\n- Simplifies code.",
          code: "// Instead of multiple listeners on <li>, use one on parent <ul>",
        },
        {
          title: "Stopping Event Propagation",
          content:
            "Use `event.stopPropagation()` to prevent an event from bubbling or capturing further.",
          code: "button.addEventListener('click', event => {\n  event.stopPropagation();\n  console.log('Button clicked, event won’t bubble');\n});",
        },
        {
          title: "Once Option for Event Listeners",
          content:
            "Add event listeners that automatically remove themselves after firing once.",
          code: "button.addEventListener('click', () => console.log('Clicked once!'), { once: true });",
        },
        {
          title: "Passive Event Listeners",
          content:
            "Use `{ passive: true }` to tell the browser the listener won’t call `preventDefault()`, improving scroll performance.",
          code: "window.addEventListener('scroll', () => {\n  console.log('scrolling');\n}, { passive: true });",
        },
        {
          title: "Debouncing Events",
          content:
            "Debouncing limits how often a function runs during rapid events like scrolling or typing.",
          code: "function debounce(fn, delay) {\n  let timeoutId;\n  return function(...args) {\n    clearTimeout(timeoutId);\n    timeoutId = setTimeout(() => fn.apply(this, args), delay);\n  };\n}\n\nwindow.addEventListener('resize', debounce(() => {\n  console.log('Resized!');\n}, 300));",
        },
        {
          title: "Throttling Events",
          content:
            "Throttling ensures a function runs at most once every specified time interval.",
          code: "function throttle(fn, limit) {\n  let lastCall = 0;\n  return function(...args) {\n    const now = Date.now();\n    if (now - lastCall >= limit) {\n      lastCall = now;\n      fn.apply(this, args);\n    }\n  };\n}\n\nwindow.addEventListener('scroll', throttle(() => {\n  console.log('Throttled scroll');\n}, 1000));",
        },
      ],
    },
    {
      title: "Level 24: Working with Forms and Validation",
      description:
        "Learn to handle form inputs, validate user data, and give feedback using JavaScript to create smooth user experiences.",
      lessons: [
        {
          title: "Selecting Form Elements",
          content:
            "Use JavaScript to select forms and their input elements to read and modify user data.",
          code: "const form = document.querySelector('form');\nconst usernameInput = document.getElementById('username');",
        },
        {
          title: "Reading Input Values",
          content:
            "Get the current value from an input using `.value` property.",
          code: "console.log(usernameInput.value);",
        },
        {
          title: "Listening to Form Submit",
          content:
            "Use the `submit` event to intercept form submission and run custom code.",
          code: "form.addEventListener('submit', event => {\n  event.preventDefault(); // Stop actual submission\n  console.log('Form submitted');\n});",
        },
        {
          title: "Basic Validation Example",
          content:
            "Check if inputs meet criteria before submitting, e.g., required fields, minimum length.",
          code: "form.addEventListener('submit', event => {\n  event.preventDefault();\n  const username = usernameInput.value.trim();\n  if (username.length < 3) {\n    alert('Username must be at least 3 characters');\n  } else {\n    console.log('Form is valid');\n  }\n});",
        },
        {
          title: "Using Constraint Validation API",
          content:
            "HTML5 inputs support built-in validation properties like `required`, `minlength`, and `.checkValidity()`.",
          code: "<input id=\"email\" type=\"email\" required>\n\nconst emailInput = document.getElementById('email');\nif (!emailInput.checkValidity()) {\n  alert('Please enter a valid email');\n}",
        },
        {
          title: "Showing Custom Error Messages",
          content:
            "You can show your own error messages by setting `setCustomValidity` on inputs.",
          code: "emailInput.addEventListener('input', () => {\n  if (!emailInput.validity.valid) {\n    emailInput.setCustomValidity('Enter a proper email address');\n  } else {\n    emailInput.setCustomValidity('');\n  }\n});",
        },
        {
          title: "Disabling Submit Button Until Valid",
          content:
            "Enable or disable the submit button based on form validity to prevent invalid submissions.",
          code: "form.addEventListener('input', () => {\n  submitBtn.disabled = !form.checkValidity();\n});",
        },
        {
          title: "Handling Multiple Inputs",
          content:
            "Validate multiple inputs and show errors next to each input for better UX.",
          code: "function validateForm() {\n  let valid = true;\n  if (usernameInput.value.trim() === '') {\n    showError(usernameInput, 'Username is required');\n    valid = false;\n  }\n  // ...other validations\n  return valid;\n}\n\nfunction showError(input, message) {\n  const error = input.nextElementSibling;\n  error.textContent = message;\n  input.classList.add('error');\n}",
        },
        {
          title: "Preventing Multiple Submissions",
          content:
            "Disable submit button or show loading state to prevent users from submitting multiple times.",
          code: "form.addEventListener('submit', event => {\n  event.preventDefault();\n  submitBtn.disabled = true;\n  submitBtn.textContent = 'Submitting...';\n  // simulate async submit\n  setTimeout(() => {\n    alert('Form submitted!');\n    submitBtn.disabled = false;\n    submitBtn.textContent = 'Submit';\n  }, 2000);\n});",
        },
      ],
    },
    {
      title: "Level 25: Working with Local Storage and Session Storage",
      description:
        "Learn how to save, retrieve, and manage data in the browser using Local Storage and Session Storage for better user experiences.",
      lessons: [
        {
          title: "What Are Web Storage APIs?",
          content:
            "Local Storage and Session Storage let you store key-value data directly in the browser without server communication.",
          code: "// Both use key-value pairs like an object\n// localStorage and sessionStorage",
        },
        {
          title: "Local Storage vs Session Storage",
          content:
            "- Local Storage persists even after closing the browser.\n- Session Storage clears when the tab or window is closed.",
          code: "// Example:\nlocalStorage.setItem('name', 'Alice');\nsessionStorage.setItem('name', 'Bob');",
        },
        {
          title: "Saving Data to Storage",
          content:
            "Use `.setItem(key, value)` to save data. Values must be strings.",
          code: "localStorage.setItem('theme', 'dark');",
        },
        {
          title: "Reading Data from Storage",
          content:
            "Retrieve stored data with `.getItem(key)`. Returns `null` if not found.",
          code: "const theme = localStorage.getItem('theme');\nconsole.log(theme); // 'dark'",
        },
        {
          title: "Removing Data",
          content:
            "Use `.removeItem(key)` to delete specific data or `.clear()` to clear all storage.",
          code: "localStorage.removeItem('theme');\n// or\nlocalStorage.clear();",
        },
        {
          title: "Storing Complex Data (Objects/Arrays)",
          content:
            "Use `JSON.stringify()` to convert objects/arrays to strings, and `JSON.parse()` to read them back.",
          code: "const user = { name: 'Alice', age: 25 };\nlocalStorage.setItem('user', JSON.stringify(user));\n\nconst savedUser = JSON.parse(localStorage.getItem('user'));\nconsole.log(savedUser.name); // 'Alice'",
        },
        {
          title: "Example: Saving User Preferences",
          content: "Save user-selected theme and load it on page load.",
          code: "function saveTheme(theme) {\n  localStorage.setItem('theme', theme);\n}\n\nfunction loadTheme() {\n  const theme = localStorage.getItem('theme');\n  if (theme) {\n    document.body.className = theme;\n  }\n}\n\nloadTheme();",
        },
        {
          title: "Session Storage Use Case",
          content:
            "Store temporary data like form inputs that should clear on tab close.",
          code: "sessionStorage.setItem('draft', 'My unsaved form text');\nconst draft = sessionStorage.getItem('draft');",
        },
        {
          title: "Limitations and Considerations",
          content:
            "- Storage size is limited (usually ~5MB).\n- Data is stored as strings.\n- Sensitive data should NOT be stored here.\n- Storage is synchronous and can affect performance if abused.",
          code: "// Avoid storing passwords or large data in storage.",
        },
      ],
    },
    {
      title: "Level 26: Introduction to JavaScript Modules",
      description:
        "Learn how to split your JavaScript code into modules using import/export for better organization and maintainability.",
      lessons: [
        {
          title: "What Are JavaScript Modules?",
          content:
            "Modules allow you to split your code into separate files and share code between them using imports and exports.",
          code: "// Module file: math.js\nexport function add(a, b) {\n  return a + b;\n}\n\nexport const PI = 3.14159;",
        },
        {
          title: "Exporting from Modules",
          content:
            "Use `export` to expose functions, variables, or classes from a module file.",
          code: "// Export named items\nexport function greet() { console.log('Hello'); }\nexport const version = '1.0';",
        },
        {
          title: "Default Exports",
          content:
            "Modules can export a default value which can be imported with any name.",
          code: "// default export\nexport default function() { console.log('Default export'); }",
        },
        {
          title: "Importing Modules",
          content:
            "Use `import` to bring code from modules into your current file.",
          code: "import { add, PI } from './math.js';\nconsole.log(add(2, 3));\nconsole.log(PI);",
        },
        {
          title: "Importing Default Exports",
          content: "Import default exports with any name you choose.",
          code: "import greet from './greet.js';\ngreet();",
        },
        {
          title: "Import All as an Object",
          content: "Import everything from a module as a namespace object.",
          code: "import * as math from './math.js';\nconsole.log(math.add(5, 7));\nconsole.log(math.PI);",
        },
        {
          title: "Using Modules in Browsers",
          content:
            'Use `<script type="module">` in HTML to enable modules in browsers.',
          code: '<script type="module" src="main.js"></script>',
        },
        {
          title: "Modules and Scope",
          content:
            "Code inside modules runs in strict mode and has its own scope (variables are not global).",
          code: "// Variables declared here won't pollute global scope\nlet secret = 'hidden';",
        },
        {
          title: "Advantages of Modules",
          content:
            "- Better code organization\n- Reusability\n- Avoid global namespace pollution\n- Lazy loading support",
          code: "// No code needed here",
        },
      ],
    },
    {
      title: "Level 27: Asynchronous JavaScript with Async/Await",
      description:
        "Master asynchronous programming in JavaScript using async/await for cleaner and more readable code.",
      lessons: [
        {
          title: "What Is Asynchronous Code?",
          content:
            "Asynchronous code lets JavaScript perform tasks like fetching data without blocking the rest of the program.",
          code: "// Example: setTimeout runs after delay without blocking\nconsole.log('Start');\nsetTimeout(() => console.log('Async task done'), 1000);\nconsole.log('End');",
        },
        {
          title: "Promises Refresher",
          content:
            "Promises represent future values. You use `.then()` and `.catch()` to handle resolved or rejected promises.",
          code: "fetch('https://api.example.com/data')\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error(error));",
        },
        {
          title: "Introducing async Functions",
          content:
            "Declare functions with `async` to use `await` inside them and work with promises more intuitively.",
          code: "async function fetchData() {\n  const response = await fetch('https://api.example.com/data');\n  const data = await response.json();\n  console.log(data);\n}",
        },
        {
          title: "Using await",
          content:
            "`await` pauses the async function until the promise resolves, then returns the result.",
          code: "async function getNumber() {\n  const result = await Promise.resolve(42);\n  console.log(result); // 42\n}",
        },
        {
          title: "Handling Errors with try/catch",
          content:
            "Use try/catch blocks inside async functions to catch errors from awaited promises.",
          code: "async function fetchData() {\n  try {\n    const response = await fetch('https://api.example.com/data');\n    if (!response.ok) throw new Error('Network error');\n    const data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error('Fetch failed:', error);\n  }\n}",
        },
        {
          title: "Running Promises in Parallel",
          content:
            "Use `Promise.all()` to run multiple async tasks simultaneously.",
          code: "async function loadAll() {\n  const [users, posts] = await Promise.all([\n    fetch('/users').then(res => res.json()),\n    fetch('/posts').then(res => res.json())\n  ]);\n  console.log(users, posts);\n}",
        },
        {
          title: "Async/Await vs .then()",
          content:
            "Async/await offers cleaner, more readable code compared to chaining `.then()` calls.",
          code: "// .then() chaining\nfetch('/data')\n  .then(res => res.json())\n  .then(data => console.log(data));\n\n// Async/await\nasync function getData() {\n  const res = await fetch('/data');\n  const data = await res.json();\n  console.log(data);\n}",
        },
        {
          title: "Practice: Fetch and Display Data",
          content:
            "Write an async function that fetches user data and logs the names.",
          code: "async function showUsers() {\n  const response = await fetch('https://jsonplaceholder.typicode.com/users');\n  const users = await response.json();\n  users.forEach(user => console.log(user.name));\n}\n\nshowUsers();",
        },
      ],
    },
    {
      title: "Level 28: JavaScript Error Handling and Debugging",
      description:
        "Learn how to handle errors gracefully and debug your JavaScript code to find and fix issues efficiently.",
      lessons: [
        {
          title: "Types of Errors in JavaScript",
          content:
            "Common errors include SyntaxError, ReferenceError, TypeError, and RangeError.",
          code: "// Example of ReferenceError\n// console.log(notDefinedVariable); // ReferenceError",
        },
        {
          title: "Using try...catch to Handle Errors",
          content:
            "Wrap code that might throw errors in a `try` block, and handle errors in the `catch` block.",
          code: "try {\n  const result = riskyOperation();\n  console.log(result);\n} catch (error) {\n  console.error('Error caught:', error.message);\n}",
        },
        {
          title: "The finally Block",
          content:
            "`finally` runs code after try/catch regardless of success or failure, useful for cleanup.",
          code: "try {\n  // code\n} catch (e) {\n  // handle error\n} finally {\n  console.log('Always runs');\n}",
        },
        {
          title: "Throwing Custom Errors",
          content: "You can create and throw your own errors with `throw`.",
          code: "function checkAge(age) {\n  if (age < 18) {\n    throw new Error('Must be 18 or older');\n  }\n  return true;\n}\n\ntry {\n  checkAge(15);\n} catch(e) {\n  console.error(e.message);\n}",
        },
        {
          title: "Using console for Debugging",
          content:
            "Use `console.log()`, `console.error()`, `console.warn()`, and `console.table()` to inspect values and flow.",
          code: "console.log('Debug info:', someVariable);\nconsole.error('This is an error');",
        },
        {
          title: "Debugger Statement",
          content:
            "Use `debugger;` in your code to pause execution and open dev tools for step-by-step debugging.",
          code: "function test() {\n  let a = 1;\n  debugger; // Execution pauses here if dev tools open\n  let b = 2;\n  return a + b;\n}",
        },
        {
          title: "Using Browser DevTools",
          content:
            "Learn to set breakpoints, watch variables, step through code, and inspect the call stack in browser dev tools.",
          code: "// No code needed here, just use dev tools",
        },
        {
          title: "Common Debugging Tips",
          content:
            "- Check error messages carefully\n- Use small test cases\n- Comment out suspicious code\n- Test assumptions with logs\n- Use linter tools for syntax errors",
          code: "// No code needed here",
        },
      ],
    },
    {
      title: "Level 29: Working with JavaScript Dates and Times",
      description:
        "Learn how to create, manipulate, and format dates and times using JavaScript’s Date object.",
      lessons: [
        {
          title: "Creating Date Objects",
          content:
            "Create a date object representing the current date/time or a specific date.",
          code: "const now = new Date();\nconst specificDate = new Date('2025-06-04T12:00:00');",
        },
        {
          title: "Getting Date Components",
          content:
            "Extract parts of a date like year, month, day, hours, minutes, and seconds.",
          code: "const year = now.getFullYear();\nconst month = now.getMonth() + 1; // Months are 0-indexed\nconst day = now.getDate();",
        },
        {
          title: "Setting Date Components",
          content: "Modify parts of a date object using setters.",
          code: "now.setFullYear(2024);\nnow.setMonth(11); // December\nnow.setDate(25);",
        },
        {
          title: "Working with Timestamps",
          content:
            "Get the number of milliseconds since Jan 1, 1970 using `getTime()` and create dates from timestamps.",
          code: "const timestamp = now.getTime();\nconst dateFromTimestamp = new Date(timestamp);",
        },
        {
          title: "Formatting Dates to Strings",
          content:
            "Convert dates to readable strings using methods like `toLocaleDateString()` and `toISOString()`.",
          code: "console.log(now.toLocaleDateString());\nconsole.log(now.toISOString());",
        },
        {
          title: "Comparing Dates",
          content: "Compare two dates by comparing their timestamps.",
          code: "const date1 = new Date('2024-01-01');\nconst date2 = new Date('2025-01-01');\nconsole.log(date1 < date2); // true",
        },
        {
          title: "Date Arithmetic",
          content:
            "Add or subtract days, hours, or other units by manipulating timestamps.",
          code: "const oneDay = 24 * 60 * 60 * 1000; // milliseconds in one day\nconst tomorrow = new Date(now.getTime() + oneDay);",
        },
        {
          title: "Using Libraries for Advanced Date Handling",
          content:
            "For complex operations, use libraries like Luxon, date-fns, or Moment.js.",
          code: "// Example with date-fns\n// import { format, addDays } from 'date-fns';\n// console.log(format(new Date(), 'yyyy-MM-dd'));",
        },
      ],
    },
    {
      title: "Level 30: Introduction to JavaScript Design Patterns",
      description:
        "Explore popular JavaScript design patterns to organize your code better and solve common problems efficiently.",
      lessons: [
        {
          title: "What Are Design Patterns?",
          content:
            "Design patterns are proven solutions to common programming problems that help write clean and reusable code.",
          code: "// No specific code here, just concepts",
        },
        {
          title: "Module Pattern",
          content:
            "Encapsulates code and exposes only public parts, helping to avoid global variables.",
          code: "const counterModule = (function() {\n  let count = 0;\n  return {\n    increment: function() { count++; },\n    getCount: function() { return count; }\n  };\n})();\n\ncounterModule.increment();\nconsole.log(counterModule.getCount());",
        },
        {
          title: "Singleton Pattern",
          content:
            "Ensures a class has only one instance and provides a global point of access to it.",
          code: "const Singleton = (function() {\n  let instance;\n  function createInstance() {\n    return { name: 'Singleton Instance' };\n  }\n  return {\n    getInstance: function() {\n      if (!instance) {\n        instance = createInstance();\n      }\n      return instance;\n    }\n  };\n})();\n\nconst obj1 = Singleton.getInstance();\nconst obj2 = Singleton.getInstance();\nconsole.log(obj1 === obj2); // true",
        },
        {
          title: "Observer Pattern",
          content:
            "Allows an object (subject) to notify other objects (observers) about changes.",
          code: "class Subject {\n  constructor() {\n    this.observers = [];\n  }\n  subscribe(observer) {\n    this.observers.push(observer);\n  }\n  notify(data) {\n    this.observers.forEach(obs => obs.update(data));\n  }\n}\n\nclass Observer {\n  update(data) {\n    console.log('Observer received:', data);\n  }\n}\n\nconst subject = new Subject();\nconst observer = new Observer();\nsubject.subscribe(observer);\nsubject.notify('Hello Observers!');",
        },
        {
          title: "Factory Pattern",
          content:
            "Creates objects without exposing the creation logic to the client and refers to the newly created objects using a common interface.",
          code: "function CarFactory(type) {\n  if (type === 'sedan') {\n    return { type: 'Sedan', wheels: 4 };\n  } else if (type === 'truck') {\n    return { type: 'Truck', wheels: 6 };\n  }\n}\n\nconst sedan = CarFactory('sedan');\nconsole.log(sedan.type);",
        },
        {
          title: "Advantages of Using Patterns",
          content:
            "- Improves code readability and maintainability\n- Provides tested, reliable solutions\n- Encourages best practices\n- Facilitates collaboration",
          code: "// No code needed",
        },
      ],
    },
    {
      title: "Level 31: Advanced JavaScript Topics",
      description:
        "Explore advanced JavaScript features like closures, currying, memoization, generators, and proxies.",
      lessons: [
        {
          title: "Closures",
          content:
            "A closure is a function that remembers its outer variables even when the outer function has finished executing.",
          code: "function outer() {\n  let count = 0;\n  return function inner() {\n    count++;\n    return count;\n  };\n}\nconst counter = outer();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2",
        },
        {
          title: "Currying",
          content:
            "Transform a function with multiple arguments into a sequence of functions each taking one argument.",
          code: "function curry(fn) {\n  return function curried(...args) {\n    if (args.length >= fn.length) {\n      return fn.apply(this, args);\n    } else {\n      return function(...args2) {\n        return curried.apply(this, args.concat(args2));\n      };\n    }\n  };\n}\n\nfunction add(a, b) {\n  return a + b;\n}\n\nconst curriedAdd = curry(add);\nconsole.log(curriedAdd(2)(3)); // 5",
        },
        {
          title: "Memoization",
          content: "Optimize expensive function calls by caching results.",
          code: "function memoize(fn) {\n  const cache = {};\n  return function(...args) {\n    const key = JSON.stringify(args);\n    if (cache[key]) {\n      return cache[key];\n    }\n    const result = fn(...args);\n    cache[key] = result;\n    return result;\n  };\n}\n\nfunction slowFib(n) {\n  if (n <= 1) return n;\n  return slowFib(n - 1) + slowFib(n - 2);\n}\n\nconst fastFib = memoize(slowFib);\nconsole.log(fastFib(40)); // much faster than slowFib",
        },
        {
          title: "Generators",
          content:
            "Functions that can pause and resume execution, useful for implementing iterators.",
          code: "function* generator() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\n\nconst gen = generator();\nconsole.log(gen.next().value); // 1\nconsole.log(gen.next().value); // 2\nconsole.log(gen.next().value); // 3",
        },
        {
          title: "Proxies",
          content:
            "Objects that wrap another object to intercept and redefine fundamental operations.",
          code: "const target = {};\nconst proxy = new Proxy(target, {\n  get: function(obj, prop) {\n    console.log(`Getting ${prop}`);\n    return obj[prop];\n  },\n  set: function(obj, prop, value) {\n    console.log(`Setting ${prop} to ${value}`);\n    obj[prop] = value;\n    return true;\n  }\n});\n\nproxy.name = 'Proxy Example';\nconsole.log(proxy.name);",
        },
      ],
    },
    {
      title: "Level 32: Building a JavaScript Project from Scratch",
      description:
        "Learn how to plan, organize, and build a complete JavaScript project with best practices.",
      lessons: [
        {
          title: "Choosing a Project Idea",
          content:
            "Pick a small, achievable project that matches your current skill level, like a to-do list or a simple calculator.",
          code: "// Example project: To-Do List App\n// Features: Add, delete, mark tasks as done",
        },
        {
          title: "Planning Your Project",
          content:
            "Break down the project into smaller tasks: UI layout, data management, event handling.",
          code: "// Plan: \n// 1. Create HTML layout\n// 2. Write JavaScript for adding tasks\n// 3. Implement delete functionality\n// 4. Save tasks to localStorage",
        },
        {
          title: "Setting Up Your Files",
          content:
            "Create separate files: index.html, styles.css, script.js. Link them correctly.",
          code: '<!DOCTYPE html>\n<html>\n<head>\n  <link rel="stylesheet" href="styles.css">\n</head>\n<body>\n  <script src="script.js"></script>\n</body>\n</html>',
        },
        {
          title: "Writing HTML Structure",
          content:
            "Build a simple interface with input fields, buttons, and a list to display tasks.",
          code: '<input type="text" id="taskInput" placeholder="New task...">\n<button id="addTaskBtn">Add Task</button>\n<ul id="taskList"></ul>',
        },
        {
          title: "Handling User Input",
          content:
            "Add event listeners to capture input and add new tasks to the list.",
          code: "document.getElementById('addTaskBtn').addEventListener('click', () => {\n  const taskInput = document.getElementById('taskInput');\n  const taskText = taskInput.value.trim();\n  if (taskText) {\n    addTask(taskText);\n    taskInput.value = '';\n  }\n});",
        },
        {
          title: "Adding Tasks Dynamically",
          content:
            "Create DOM elements to display tasks and add them to the list.",
          code: "function addTask(text) {\n  const li = document.createElement('li');\n  li.textContent = text;\n  document.getElementById('taskList').appendChild(li);\n}",
        },
        {
          title: "Deleting Tasks",
          content:
            "Add a delete button to each task and handle its click event.",
          code: "function addTask(text) {\n  const li = document.createElement('li');\n  li.textContent = text;\n\n  const deleteBtn = document.createElement('button');\n  deleteBtn.textContent = 'Delete';\n  deleteBtn.addEventListener('click', () => li.remove());\n\n  li.appendChild(deleteBtn);\n  document.getElementById('taskList').appendChild(li);\n}",
        },
        {
          title: "Persisting Tasks with localStorage",
          content:
            "Save tasks in the browser so they remain after page reloads.",
          code: "function saveTasks() {\n  const tasks = [];\n  document.querySelectorAll('#taskList li').forEach(li => {\n    tasks.push(li.firstChild.textContent);\n  });\n  localStorage.setItem('tasks', JSON.stringify(tasks));\n}\n\nfunction loadTasks() {\n  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];\n  tasks.forEach(addTask);\n}\n\nwindow.onload = loadTasks;\n\n// Call saveTasks() after adding or deleting tasks",
        },
        {
          title: "Testing and Debugging",
          content:
            "Test your app thoroughly and fix bugs using console logs and debugger tools.",
          code: "// Use console.log() to check variables\n// Use debugger; to pause execution",
        },
        {
          title: "Next Steps and Improvements",
          content:
            "Consider adding features like editing tasks, task priorities, or using frameworks/libraries.",
          code: "// Ideas for improvement\n// - Edit task text\n// - Mark tasks as completed\n// - Use React or Vue for UI",
        },
      ],
    },
    {
      title: "Level 33: JavaScript Performance Optimization",
      description:
        "Learn how to write performant JavaScript code and optimize your web applications for speed.",
      lessons: [
        {
          title: "Understanding Performance Bottlenecks",
          content:
            "Performance bottlenecks occur when parts of your code take longer to execute, slowing down the app.",
          code: "// Use browser profiling tools to identify slow code segments",
        },
        {
          title: "Efficient Loops and Iteration",
          content:
            "Use efficient loop constructs and avoid unnecessary computations inside loops.",
          code: "const arr = [1,2,3,4,5];\n// Prefer for loops for performance\nfor(let i=0; i < arr.length; i++) {\n  console.log(arr[i]);\n}",
        },
        {
          title: "Avoiding Memory Leaks",
          content:
            "Keep track of references and avoid creating unnecessary global variables to prevent memory leaks.",
          code: "// Remove event listeners when not needed\n// Nullify unused objects",
        },
        {
          title: "Debouncing and Throttling",
          content:
            "Control how often functions run to improve performance in event-heavy scenarios like scrolling or resizing.",
          code: "function debounce(fn, delay) {\n  let timer;\n  return function(...args) {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn.apply(this, args), delay);\n  };\n}\n\nwindow.addEventListener('resize', debounce(() => {\n  console.log('Resized');\n}, 200));",
        },
        {
          title: "Minimizing DOM Manipulations",
          content:
            "Batch DOM updates and avoid layout thrashing by minimizing direct DOM access.",
          code: "const fragment = document.createDocumentFragment();\nfor(let i=0; i<100; i++) {\n  const li = document.createElement('li');\n  li.textContent = `Item ${i}`;\n  fragment.appendChild(li);\n}\ndocument.getElementById('list').appendChild(fragment);",
        },
        {
          title: "Using Web Workers",
          content:
            "Offload heavy computations to background threads using Web Workers to keep UI responsive.",
          code: "// Create a worker.js file with heavy task\n// In main.js:\nconst worker = new Worker('worker.js');\nworker.postMessage('start');\nworker.onmessage = (e) => console.log('Result:', e.data);",
        },
        {
          title: "Optimizing JavaScript Bundles",
          content:
            "Use tree shaking, code splitting, and minification to reduce your JavaScript bundle size.",
          code: "// Use tools like Webpack or Rollup with appropriate plugins",
        },
        {
          title: "Lazy Loading",
          content:
            "Load JavaScript code or resources only when needed to improve initial load time.",
          code: "button.addEventListener('click', async () => {\n  const module = await import('./module.js');\n  module.doSomething();\n});",
        },
      ],
    },
    {
      title: "Level 34: JavaScript Security Best Practices",
      description:
        "Learn essential security techniques to protect your JavaScript applications from attacks and vulnerabilities.",
      lessons: [
        {
          title: "Understanding Common Threats",
          content:
            "Familiarize yourself with common security threats like Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), and Injection attacks.",
          code: "// No code, conceptual understanding",
        },
        {
          title: "Sanitize User Input",
          content:
            "Always sanitize and validate input from users to prevent malicious code injection.",
          code: "function sanitize(input) {\n  const div = document.createElement('div');\n  div.textContent = input;\n  return div.innerHTML;\n}\nconst safeInput = sanitize(userInput);",
        },
        {
          title: "Use Content Security Policy (CSP)",
          content:
            "Implement CSP headers to restrict sources from which scripts can be loaded, preventing XSS.",
          code: "// Example HTTP header:\n// Content-Security-Policy: default-src 'self'; script-src 'self';",
        },
        {
          title: "Avoid eval() and Similar Functions",
          content:
            "Never use eval(), new Function(), or similar functions that execute strings as code, as they can open doors to injection attacks.",
          code: "// Avoid this:\neval(userInput); // Dangerous",
        },
        {
          title: "Use HTTPS",
          content:
            "Always serve your JavaScript and web pages over HTTPS to secure data transmission.",
          code: "// Configure HTTPS on your server",
        },
        {
          title: "Secure Authentication and Authorization",
          content:
            "Handle tokens securely, avoid exposing sensitive data in client-side code, and validate permissions on the server.",
          code: "// Use HTTP-only cookies for tokens\n// Do not store sensitive data in localStorage",
        },
        {
          title: "Protect Against CSRF",
          content:
            "Implement CSRF tokens to ensure requests are genuine and intended.",
          code: "// Server generates token; client sends it back with requests\n// Validate on server",
        },
        {
          title: "Keep Dependencies Updated",
          content:
            "Regularly update libraries and frameworks to patch known vulnerabilities.",
          code: "// Use npm audit and other tools",
        },
      ],
    },
    {
      title: "Level 35: JavaScript Testing and Debugging",
      description:
        "Learn how to write tests and debug your JavaScript code to ensure reliability and fix issues quickly.",
      lessons: [
        {
          title: "Why Testing Matters",
          content:
            "Testing helps catch bugs early, ensures code works as expected, and makes maintenance easier.",
          code: "// No code, conceptual explanation",
        },
        {
          title: "Types of Testing",
          content:
            "Understand unit testing, integration testing, and end-to-end testing.",
          code: "// Unit test: testing individual functions\n// Integration test: testing combined parts\n// E2E test: testing full app flow",
        },
        {
          title: "Writing Unit Tests with Jest",
          content:
            "Jest is a popular JavaScript testing framework for writing and running tests.",
          code: "function sum(a, b) {\n  return a + b;\n}\n\n// Jest test example\n\ntest('adds 1 + 2 to equal 3', () => {\n  expect(sum(1, 2)).toBe(3);\n});",
        },
        {
          title: "Debugging with Browser DevTools",
          content:
            "Use browser developer tools to set breakpoints, step through code, and inspect variables.",
          code: "// Open DevTools (F12 or Ctrl+Shift+I)\n// Use 'Sources' tab to debug",
        },
        {
          title: "Using console.log() Effectively",
          content:
            "Insert console.log() statements to trace values and program flow.",
          code: "console.log('Value of x:', x);",
        },
        {
          title: "Handling Errors Gracefully",
          content:
            "Use try-catch blocks to manage errors and provide meaningful feedback.",
          code: "try {\n  riskyFunction();\n} catch (error) {\n  console.error('Error caught:', error);\n}",
        },
        {
          title: "Automated Testing and Continuous Integration",
          content:
            "Set up automated tests to run on every code change using CI tools like GitHub Actions or Travis CI.",
          code: "// Configure CI workflows to run tests automatically",
        },
        {
          title: "Debugging Async Code",
          content:
            "Use async/await and debugging tools to manage and debug asynchronous JavaScript.",
          code: "async function fetchData() {\n  try {\n    const response = await fetch('api/data');\n    const data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error('Fetch error:', error);\n  }\n}",
        },
      ],
    },
    {
      title: "Level 36: Modern JavaScript Frameworks",
      description:
        "Get introduced to modern JavaScript frameworks to build powerful, scalable web applications.",
      lessons: [
        {
          title: "What Are JavaScript Frameworks?",
          content:
            "Frameworks provide structure and tools to build complex web apps more efficiently by managing UI, state, and routing.",
          code: "// Examples: React, Vue, Angular",
        },
        {
          title: "Introduction to React",
          content:
            "React is a popular library for building UI components using declarative syntax and state management.",
          code: "import React from 'react';\n\nfunction App() {\n  const [count, setCount] = React.useState(0);\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>Click me</button>\n    </div>\n  );\n}\n\nexport default App;",
        },
        {
          title: "Introduction to Vue",
          content:
            "Vue is a progressive framework that is easy to integrate and offers reactive data binding and components.",
          code: "<template>\n  <div>\n    <p>{{ message }}</p>\n    <button @click=\"count++\">Clicked {{ count }} times</button>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      message: 'Hello Vue!',\n      count: 0\n    };\n  }\n};\n</script>",
        },
        {
          title: "Introduction to Angular",
          content:
            "Angular is a full-featured framework providing powerful tools for building large-scale applications.",
          code: "// Example Angular component\nimport { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-root',\n  template: `\n    <h1>{{title}}</h1>\n    <button (click)=\"increment()\">Clicked {{count}} times</button>\n  `,\n})\nexport class AppComponent {\n  title = 'Angular App';\n  count = 0;\n  increment() {\n    this.count++;\n  }\n}",
        },
        {
          title: "Choosing the Right Framework",
          content:
            "Consider project size, team skills, community support, and ecosystem when picking a framework.",
          code: "// React: Flexible UI library\n// Vue: Easy to learn and integrate\n// Angular: Complete framework",
        },
        {
          title: "Getting Started with Frameworks",
          content:
            "Use official CLI tools and tutorials to scaffold projects and learn the basics.",
          code: "// React: create-react-app\n// Vue: vue-cli\n// Angular: angular-cli",
        },
        {
          title: "Next Steps",
          content:
            "Explore routing, state management (Redux, Vuex, NgRx), and component lifecycle to build real-world apps.",
          code: "// Learn about React Router, Vue Router, Angular Router",
        },
      ],
    },
    {
      title: "Level 37: Progressive Web Apps (PWA)",
      description:
        "Learn how to build fast, reliable, and engaging web apps that work offline and feel like native apps.",
      lessons: [
        {
          title: "What is a PWA?",
          content:
            "A Progressive Web App is a web application that uses modern web capabilities to deliver an app-like experience to users.",
          code: "// PWAs work offline, load fast, and can be installed on devices",
        },
        {
          title: "Key Features of PWAs",
          content:
            "PWAs are reliable, fast, and engaging thanks to service workers, caching, and web app manifests.",
          code: "// Service Workers enable offline support\n// Web App Manifest allows installation",
        },
        {
          title: "Creating a Web App Manifest",
          content:
            "The manifest.json file defines your app’s name, icons, theme, and how it should behave when installed.",
          code: '{\n  "name": "My PWA",\n  "short_name": "PWA",\n  "start_url": ".",\n  "display": "standalone",\n  "background_color": "#ffffff",\n  "theme_color": "#317EFB",\n  "icons": [\n    {\n      "src": "icon-192.png",\n      "sizes": "192x192",\n      "type": "image/png"\n    },\n    {\n      "src": "icon-512.png",\n      "sizes": "512x512",\n      "type": "image/png"\n    }\n  ]\n}',
        },
        {
          title: "Registering a Service Worker",
          content:
            "Service workers run in the background, intercept network requests, and cache resources for offline use.",
          code: "if ('serviceWorker' in navigator) {\n  window.addEventListener('load', () => {\n    navigator.serviceWorker.register('/service-worker.js')\n      .then(registration => {\n        console.log('ServiceWorker registered:', registration);\n      })\n      .catch(error => {\n        console.error('ServiceWorker registration failed:', error);\n      });\n  });\n}",
        },
        {
          title: "Basic Service Worker Script",
          content:
            "A simple service worker caches essential files during installation and serves cached content when offline.",
          code: "const CACHE_NAME = 'pwa-cache-v1';\nconst urlsToCache = [\n  '/',\n  '/index.html',\n  '/styles.css',\n  '/script.js'\n];\n\nself.addEventListener('install', event => {\n  event.waitUntil(\n    caches.open(CACHE_NAME)\n      .then(cache => cache.addAll(urlsToCache))\n  );\n});\n\nself.addEventListener('fetch', event => {\n  event.respondWith(\n    caches.match(event.request)\n      .then(response => response || fetch(event.request))\n  );\n});",
        },
        {
          title: "Testing Your PWA",
          content:
            "Use Chrome DevTools Application panel to audit your PWA and check offline functionality.",
          code: "// Run Lighthouse audits for PWA compliance",
        },
        {
          title: "Deploying PWAs",
          content:
            "Host your PWA on HTTPS-enabled servers for security and installability.",
          code: "// Use platforms like Netlify, Vercel, or your own HTTPS server",
        },
        {
          title: "Next Steps",
          content:
            "Explore advanced features like push notifications, background sync, and app shortcuts.",
          code: "// Use Push API and Background Sync API",
        },
      ],
    },
  ];

  const getCurrentLessonIndex = (levelIndex: number) => {
    return currentLessonIndex[levelIndex] ?? 0;
  };

  const setCurrentLessonIndexForLevel = (
    levelIndex: number,
    lessonIndex: number
  ) => {
    setCurrentLessonIndex((prev) => ({
      ...prev,
      [levelIndex]: lessonIndex,
    }));
  };

  const goToPreviousLevel = () => {
    setCurrentLevelIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  const goToNextLevel = () => {
    setCurrentLevelIndex((prevIndex) =>
      prevIndex < levels.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const goToLevel = (index: number) => {
    setCurrentLevelIndex(index);
  };

  const goToPreviousLesson = (levelIndex: number) => {
    const currentLesson = getCurrentLessonIndex(levelIndex);
    if (currentLesson > 0) {
      setCurrentLessonIndexForLevel(levelIndex, currentLesson - 1);
    }
  };

  const goToNextLesson = (levelIndex: number) => {
    const currentLesson = getCurrentLessonIndex(levelIndex);
    const maxLessons = levels[levelIndex].lessons.length;
    if (currentLesson < maxLessons - 1) {
      setCurrentLessonIndexForLevel(levelIndex, currentLesson + 1);
    }
  };

  const goToLesson = (levelIndex: number, lessonIndex: number) => {
    setCurrentLessonIndexForLevel(levelIndex, lessonIndex);
  };
  const [isLevelMenuOpen, setIsLevelMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header with Level Menu */}
      <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          {/* Top row: title and toggle button */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-8 w-8 text-purple-400" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                JS From Zero to Hero
              </h1>
            </div>

            {/* Menu Toggle Button - visible on all screen sizes */}
            <button
              onClick={() => setIsLevelMenuOpen((prev) => !prev)}
              className="p-2 rounded bg-gray-700 hover:bg-gray-600"
            >
              <Menu className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Collapsible Level Navigation Menu - hidden by default */}
          {isLevelMenuOpen && (
            <nav className="flex flex-wrap gap-2 transition-all duration-300">
              {levels.map((level, index) => (
                <Button
                  key={index}
                  variant={currentLevelIndex === index ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    goToLevel(index);
                    setIsLevelMenuOpen(false); // optional: close after selection
                  }}
                  className={`
              ${
                currentLevelIndex === index
                  ? "bg-purple-600 hover:bg-purple-700 text-white"
                  : "bg-gray-700 border-gray-600 hover:bg-gray-600 text-gray-300"
              }
              transition-all duration-200
            `}
                >
                  Level {index + 1}
                </Button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-2 sm:px-4 pt-6 sm:pt-8">
        <div className="w-full max-w-6xl overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentLevelIndex * 100}%)` }}
          >
            {levels.map((level, levelIndex) => (
              <div
                key={levelIndex}
                className="w-full flex-shrink-0 px-2 sm:px-4"
              >
                <Card className="bg-gray-800 border-gray-700 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl sm:text-3xl text-blue-400 mb-2">
                      {level.title}
                    </CardTitle>
                    <p className="text-gray-300 text-base sm:text-lg">
                      {level.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Lesson Dots */}
                    <div className="flex justify-center gap-2 mb-4">
                      {level.lessons.map((_, lessonIndex) => (
                        <button
                          key={lessonIndex}
                          onClick={() => goToLesson(levelIndex, lessonIndex)}
                          className={`w-3 h-3 rounded-full transition-all duration-200 ${
                            getCurrentLessonIndex(levelIndex) === lessonIndex
                              ? "bg-purple-400 scale-125"
                              : "bg-gray-600 hover:bg-gray-500"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Lesson Content */}
                    <div className="overflow-hidden">
                      <div
                        className="flex transition-transform duration-300 ease-in-out"
                        style={{
                          transform: `translateX(-${
                            getCurrentLessonIndex(levelIndex) * 100
                          }%)`,
                        }}
                      >
                        {level.lessons.map((lesson, lessonIndex) => (
                          <div
                            key={lessonIndex}
                            className="w-full flex-shrink-0 space-y-4"
                          >
                            <div className="text-center mb-4">
                              <h3 className="text-lg sm:text-xl font-semibold text-yellow-400 mb-2">
                                {lesson.title}
                              </h3>
                              <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                                <Play className="h-4 w-4" />
                                <span>
                                  Lesson {lessonIndex + 1} of{" "}
                                  {level.lessons.length}
                                </span>
                              </div>
                            </div>

                            <p className="text-gray-300 text-base leading-relaxed mb-6">
                              {lesson.content}
                            </p>

                            <div className="bg-gray-950 p-4 sm:p-6 rounded-lg border border-gray-800 overflow-auto">
                              <div className="flex items-center gap-2 mb-3">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="text-gray-400 text-sm ml-2">
                                  JavaScript
                                </span>
                              </div>
                              <pre className="font-mono text-green-400 whitespace-pre-wrap text-sm">
                                <code>{lesson.code}</code>
                              </pre>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Lesson Nav Buttons */}
                    <div className="flex justify-between items-center pt-4 gap-2 flex-wrap sm:flex-nowrap">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => goToPreviousLesson(levelIndex)}
                        disabled={getCurrentLessonIndex(levelIndex) === 0}
                        className="bg-gray-700 border-gray-600 hover:bg-gray-600 text-gray-300"
                      >
                        <ChevronLeft className="h-4 w-4 mr-1" />
                        Previous Lesson
                      </Button>

                      <div className="text-sm text-gray-400 text-center w-full sm:w-auto">
                        {getCurrentLessonIndex(levelIndex) + 1} /{" "}
                        {level.lessons.length}
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => goToNextLesson(levelIndex)}
                        disabled={
                          getCurrentLessonIndex(levelIndex) ===
                          level.lessons.length - 1
                        }
                        className="bg-gray-700 border-gray-600 hover:bg-gray-600 text-gray-300"
                      >
                        Next Lesson
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>

                  <CardFooter className="flex justify-between items-center">
                    <div className="text-sm text-gray-400">
                      Level {levelIndex + 1} of {levels.length}
                    </div>
                    <div className="flex gap-1">
                      {levels.map((_, dotIndex) => (
                        <div
                          key={dotIndex}
                          className={`w-2 h-2 rounded-full ${
                            dotIndex === currentLevelIndex
                              ? "bg-purple-400"
                              : "bg-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Level Navigation */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 w-full px-2 sm:px-0 max-w-4xl">
          <Button
            variant="outline"
            onClick={goToPreviousLevel}
            disabled={currentLevelIndex === 0}
            className="bg-gray-800 border-gray-700 hover:bg-gray-700 px-6 py-2 w-full sm:w-auto"
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous Level
          </Button>
          <Button
            variant="outline"
            onClick={goToNextLevel}
            disabled={currentLevelIndex === levels.length - 1}
            className="bg-gray-800 border-gray-700 hover:bg-gray-700 px-6 py-2 w-full sm:w-auto"
          >
            Next Level
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </main>
    </div>
  );
}
