# Node.js Application

Welcome to my Node.js application! This project consists of several tasks demonstrating the use of Node.js for basic console output, HTTP servers, file handling, password generation, and email sending.

## Table of Contents

- [Introduction](#introduction)
- [Tasks](#tasks)
  - [Task 1: Hello World](#task-1-hello-world)
  - [Task 2: Simple HTTP Server](#task-2-simple-http-server)
  - [Task 3: File Handling](#task-3-file-handling)
  - [Task 4: Password Generator](#task-4-password-generator)
  - [Task 5: Email Sender](#task-5-email-sender)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This application serves as a hands-on introduction to Node.js, showcasing its capabilities for console applications, web servers, file operations, password generation, and sending emails.

## Tasks

### Task 1: Hello World

1. **File**: `hello-world.js`
2. **Description**: This script prints "HELLO WORLD" to the console.

   ```javascript
   // hello-world.js
   console.log('HELLO WORLD!');
   ```

### Task 2: Simple HTTP Server

1. **File**: `server.js`

2. **Description**: This script creates an HTTP server that listens on port 3000 and responds with an HTML message.

```javascript
// server.js
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello Node!!!!</h1>\n');
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
```

### Task 3: File Handling

1. **File**: `file-handler.js`

2. **Description**: This script creates a file named `welcome.txt` containing "Hello Node" and reads from `hello.txt`.

```javascript
// file-handler.js
const fs = require('fs');

// Create a file named "welcome.txt" containing "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('welcome.txt created successfully');

    // Read from "hello.txt"
    fs.readFile('hello.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('File content from "hello.txt":', data);
    });
});
```

### Task 4: Password Generator

1. **File**: `password-generator.js`

2. **Description**: This script generates a random password using the `generate-password` package.

```javascript
// password-generator.js
const generatePassword = require('generate-password'); // Import the package

function createRandomPassword() {
    const password = generatePassword.generate({
        length: 12, // Specify the length of the password
        numbers: true, // Include numbers
        symbols: true, // Include symbols
        uppercase: true, // Include uppercase letters
        lowercase: true // Include lowercase letters
    });

    console.log('Generated Password:', password); // Log the generated password
}

// Call the function to generate and display a random password
createRandomPassword();
```

**Installation**:

To install the `generate-password` package, run the following command:

```bash
npm install generate-password
```
---

### Installation

1. Clone the repository or create a new directory for your project.

2. Create each of the following files:
   - `hello-world.js`
   - `server.js`
   - `file-handler.js`
   - `password-generator.js`
   - `email-sender.js`

3. Install the required packages for password generation and email sending:

   ```bash
   npm install generate-password
   npm install nodemailer
   ```

---

### Running the Application

- To run the Hello World script:

   ```bash
   node hello-world.js
   ```

- To run the HTTP server:

   ```bash
   node server.js
   ```

- To create and read files:

    ```bash
    node file-handler.js
    ```

- To generate a random password:

    ```bash
    node password-generator.js
    ```


- To send an email:

    ```bash
    node email-sender.js
    ```

---

### Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request with your improvements or bug fixes.

### License

This project is licensed under the MIT License. See the LICENSE file for more details.

---


### Conclusion

This `README.md` file provides a comprehensive overview of your Node.js application, covering each task completed.

