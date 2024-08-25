# My Mongoose App

This project is a simple Node.js application that uses MongoDB for data storage and Mongoose as an Object Data Modeling (ODM) library. The application provides RESTful API endpoints to create, read, update, and delete product data.

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [License](#license)

## Introduction

This application is designed to demonstrate the basics of building a Node.js API with MongoDB and Mongoose. The app includes several RESTful endpoints for managing products in a database.

## Prerequisites

Before setting up this project, ensure you have the following installed on your machine:

- **Node.js**: Download and install Node.js from [here](https://nodejs.org/).
- **npm**: Node Package Manager (npm) is included with Node.js.
- **MongoDB**: You can either install MongoDB locally or use a cloud service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

## Installation

To get started with this project, follow these steps:

1. **Clone the repository**:

    Clone this repository to your local machine using the following command:

    ```bash
    git clone https://github.com/yourusername/my-mongoose-app.git
    cd my-mongoose-app
    ```

2. **Install dependencies**:

    Install the necessary npm packages by running:

    ```bash
    npm install
    ```

## Environment Variables

To connect to MongoDB, you need to configure environment variables. Create a `.env` file in the root directory of your project and add the following:

```plaintext
MONGO_URI=your_mongodb_connection_string
PORT=3000
## Running the Application

Once you have configured your environment variables, you can start the application with the following command:

```bash
npm start

If everything is set up correctly, you should see output similar to:
Connected to Database!
Server is running on port 3000
## API Endpoints

The application provides several API endpoints for managing products. Below are the available endpoints:
1.
GET /api/products: Retrieve all products.
curl -X GET http://localhost:3000/api/products
2.
GET /api/products/ : Retrieve a single product by its ID.
curl -X GET http://localhost:3000/api/products/60c72b1f9b1e8a001d7c4c9a
3.
POST /api/products: Create a new product
curl -X POST -H  http://localhost:3000/api/products
"Content-Type: application/json" -d '
{
"name": "Product1",
"price": 100,
"quantity": 45
}
4.
PUT /api/products/
: Update an existing product by its ID.
curl -X PUT -H  http://localhost:3000/api/products/60c72b1f9b1e8a001d7c4c9a
 "Content-Type: application/json" -d '
{
"name": "Updated Product",
"price": 150
"quantity":54
}
5.
DELETE /api/products/
curl -X DELETE http://localhost:3000/api/products/60c72b1f9b1e8a001d7c4c9a
: Delete a product by its ID.





## Project Structure

\my-mongoose-app/
├── models/
│   └── product.model.js   # Mongoose schema and model for Product
├── routes/
│   └── product.route.js   # Express routes for Product API
├── node_modules/          # Installed npm packages
├── .env                   # Environment variables
├── package.json           # Project configuration and dependencies
├── index.js              # Main server file
└── README.md              # Project documentation

## Testing the APIs

You can test the APIs you've implemented using several tools. Below are some popular tools and instructions on how to use them:

### 1. REST Client (Visual Studio Code Extension)
The REST Client is a Visual Studio Code extension that allows you to send HTTP requests directly from your editor.

- **Installation**: Install the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension in Visual Studio Code.
- **Usage**:
  1. Create a new `.http` or `.rest` file in your project.
  2. Write your HTTP requests (e.g., `GET`, `POST`, `PUT`, `DELETE`) in this file.
  3. Send requests directly from the editor and view responses within VS Code.

### 2. Thunder Client (Visual Studio Code Extension)
Thunder Client is another Visual Studio Code extension known for its simple UI and ease of use.

- **Installation**: Install the [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) extension in Visual Studio Code.
- **Usage**:
  1. Open the Thunder Client panel within VS Code.
  2. Create new HTTP requests (e.g., `GET`, `POST`, `PUT`, `DELETE`).
  3. Organize requests into collections and send them directly from the editor.

### 3. Postman
Postman is a standalone application that provides a comprehensive interface for designing, testing, and documenting APIs.

- **Installation**: Download and install [Postman](https://www.postman.com/downloads/).
- **Usage**:
  1. Open Postman and create a new request.
  2. Choose the request type (`GET`, `POST`, `PUT`, `DELETE`), enter the API endpoint, and set any necessary headers or body parameters.
  3. Send the request and view the response.

### 4. Insomnia
Insomnia is a powerful and intuitive REST API client with GraphQL support.

- **Installation**: Download and install [Insomnia](https://insomnia.rest/download).
- **Usage**:
  1. Open Insomnia and create a new request.
  2. Choose the request type (`GET`, `POST`, `PUT`, `DELETE`), enter the API endpoint, and configure any required headers or body parameters.
  3. Send the request and view the response.

These tools will help you interact with the API endpoints you’ve created in your application, making it easy to perform operations like retrieving, creating, updating, and deleting products.


