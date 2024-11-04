# My Express Web Application

This is a simple web application built with Express.js that contains three pages: Home, Our Services, and Contact Us. The application includes a navigation bar and is styled with CSS. It is accessible only during working hours (Monday to Friday, from 9 AM to 5 PM).

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [License](#license)

---

## Features

- Home Page
- Our Services Page
- Contact Us Page
- Navigation bar linking all pages
- Simple CSS styling
- Middleware to restrict access during non-working hours

---

## Installation

To set up this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Yenneferoma/GProjects.git
   ```

2. **Navigate to the project directory:**

    ```bash
    cd your-repo-name
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Create a .env file for environment variables (optional):**
    ```plaintext
    PORT=put_your_port_here
    ```
---


## Usage

To start the server, you have a few options:

1. **Using Node.js:**  
   Open your terminal and run the following command:

   ```bash
   node server.js
   ```

2. **Using Nodemon (for automatic server restarts on file changes):**
    If you have nodemon installed, run:
    
    ```bash
    nodemon server.js
    ```


3. **Using npm scripts:**

    If you have a dev script defined in your package.json, you can start the server with:
    
    ```bash
    npm run dev
    ```
---

## Accessing the Application

Once the server is running, you can access the web application in your browser by navigating to:

    
    http://localhost:(put_port_number_here)

---


## Routes

- **Home Page:** `GET /`
- **Our Services Page:** `GET /services`
- **Contact Us Page:** `GET /contact`


## Folder Structure

```plaintext
web-app/
│
├── src/
│   ├── views/
│   │   ├── home.ejs
│   │   ├── services.ejs
│   │   └── contact.ejs
│   └── ...
├── public/
│   ├── styles.css
│   └── ...
├── .env
├── package.json
├── server.js
├── app.js
└── README.md
```
---


## Technologies Used

- **Node.js:** JavaScript runtime for server-side programming.
- **Express.js:** Web framework for building web applications.
- **EJS:** Templating engine for rendering HTML views.
- **CSS:** Stylesheet language for designing web pages.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.




