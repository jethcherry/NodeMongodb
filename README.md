# My Mongoose App

## Overview

This Node.js application uses MongoDB with Mongoose to manage product data through a RESTful API. It supports CRUD operations for product management.

## Prerequisites

- **Node.js**: Install from [nodejs.org](https://nodejs.org/).
- **npm**: Included with Node.js.
- **MongoDB**: Install locally or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/jethcherry/NodeMongodb.git
    cd my-mongoose-app
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

## Configuration

Create a `.env` file in the root directory with:

```plaintext
MONGO_URI=your_mongodb_connection_string

3.## API Endpoints
GET /api/products: Retrieve all products.
GET /api/products/:id: Retrieve a product by ID.
POST /api/products: Create a new product.
PUT /api/products/:id: Update a product by ID.
DELETE /api/products/:id: Delete a product by ID

## Testing

You can test the API endpoints using the following tools:

### REST Client (VS Code Extension)

- **Installation**: Search for "REST Client" in the [Visual Studio Code marketplace](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) and install it.
- **Usage**: Create a `.http` file in your project directory with HTTP request examples. For example:
  ```http
  GET http://localhost:3000/api/products

