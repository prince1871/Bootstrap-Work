# Blog API

This is a comprehensive README file for the Blog API project. This document provides an overview of the project, setup instructions, and details about the various endpoints and their usage.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [JWT Helpers](#jwt-helpers)
- [Pagination Validator](#pagination-validator)
- [Data Validator](#data-validator)
- [Require Sign-In](#require-sign-in)
- [Contributing](#contributing)
- [License](#license)

## Introduction
The Blog API is a RESTful web service that allows users to create, read, update, and delete blog posts. It is built using Node.js, Express, and MongoDB.

## Features
- User authentication and authorization
- CRUD operations for blog posts
- Commenting on blog posts
- Pagination and filtering of blog posts

## Installation
To set up the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/Yenneferoma/GProjects.git

2. Navigate to the project directory:
    ```bash
    cd blog-api
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Set up environment variables:
    Create a `.env` file in the root directory and add the following variables:
    ```
    PORT=your_port
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

5. Start the server:
    ```bash
    npm start
    ```

## Usage
Once the server is running, you can use tools like Postman or cURL to interact with the API. The base URL for the API is `http://localhost:your_port_number_here/blog-api`.

You can also use this [Postman collection](https://documenter.getpostman.com/view/38453573/2sAY52cyzX) to test the API endpoints.

## API Endpoints
Here are the main endpoints of the Blog API:

### Authentication
- **Register**: `POST /api/auth/register`
- **Login**: `POST /api/auth/login`

### Blog Posts
- **Create a blog post**: `POST /blogs/create`
- **Get all blog posts**: `GET /blogs/`
- **Get a single blog post**: `GET /blogs/:id`
- **Update a blog post**: `PUT /blogs/update/:id`
- **Delete a blog post**: `DELETE /blogs/delete/:id`

## Authentication
The Blog API uses JWT (JSON Web Tokens) for authentication. Users need to register and log in to receive a token, which must be included in the Authorization header of requests to protected routes.

## JWT Helpers
The following helper functions are used for handling JWTs:

- **Generate Token**: Generates a JWT for a given user.
    ```javascript
    const jwt = require('jsonwebtoken');

    function generateToken(user) {
        return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    }
    ```

- **Verify Token**: Middleware to verify the JWT in the Authorization header.
    ```javascript
    const jwt = require('jsonwebtoken');

    function verifyToken(req, res, next) {
        const token = req.header('Authorization');
        if (!token) return res.status(401).send('Access Denied');

        try {
            const verified = jwt.verify(token, process.env.JWT_SECRET);
            req.user = verified;
            next();
        } catch (err) {
            res.status(400).send('Invalid Token');
        }
    }
    ```

## Pagination Validator
The following helper function is used to validate pagination parameters:

```javascript
function paginationValidator(req, res, next) {
    const { page, limit } = req.query;
    if (page && isNaN(page)) return res.status(400).send('Invalid page number');
    if (limit && isNaN(limit)) return res.status(400).send('Invalid limit number');
    next();
}
```

## Data Validator
The following helper function is used to validate request data:

```javascript
function dataValidator(schema) {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);
        next();
    };
}
```

## Require Sign-In
The following middleware function is used to ensure the user is signed in:

```javascript
function requireSignIn(req, res, next) {
    if (!req.user) return res.status(401).send('Access Denied');
    next();
}
```

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.