# Rental Car System Backend

This repository contains the backend code for a Rental Car System. It provides RESTful API endpoints for user management, car listing, and rental operations. The technologies used include Node.js, Express.js, MongoDB, and various middleware and libraries.

## Technologies Used

- Node.js: A JavaScript runtime for building server-side applications.
- Express.js: A web application framework for Node.js.
- MongoDB: A NoSQL database for storing user and car information.
- JWT (JSON Web Tokens): Used for user authentication and authorization.
- Bcrypt: A library for hashing passwords before storing them in the database.
- Multer: Middleware for handling file uploads (used for car photos).
- Cloudinary: Cloud storage for storing car photos.
- Swagger-jsdoc and Swagger-ui-express: Used for API documentation.
- SendGrid: Used for sending verification and notification emails.
- Cors: Middleware for handling Cross-Origin Resource Sharing.
- Dotenv: Used for loading environment variables from a .env file.
- Joi: A library for data validation.
- Morgan: Middleware for logging HTTP requests.
- UUID: Used for generating unique identifiers.

## Installation

#### 1. Clone the repository:

`git clone https://github.com/your-username/rental-car-backend.git`

#### 2. Install dependencies:

`cd rental-car-backend`

`npm install`

#### 3. Set up environment variables:
Create a .env file in the root directory and add the following:

```json
PORT=3000
MONGODB_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
SENDGRID_API_KEY=your-sendgrid-api-key
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
```

#### 4. Start the server:

`npm start`

## API Documentation

API documentation is available using Swagger UI. Access it by visiting https://renta-car-ukraine-api.onrender.com/api-docs in your browser.

## API Endpoints

### User Management

#### 1. Register a new user

Endpoint: POST `/users/register`

Description: Register a new user with a unique username, email, and password.

Request Body:
```json
{
  "userName": "exampleUser",
  "email": "user@gmail.com",
  "password": "password123"
}
```
Response (Example):
```json
{
  "user": {
    "userName": "exampleUser",
    "email": "user@gmail.com",
    "verify": false
  },
  "verificationToken": "65b909e3a48da347ac46dcb2",
  "token": "jsonwebtokenstring"
}
```

#### 2. User authorization

Endpoint: POST `/users/login`

Description: Authenticate and login a user using their email and password.

Request Body:
```json
{
  "email": "user@gmail.com",
  "password": "password123"
}
```
Response (Example):
```json
{
  "user": {
    "userName": "exampleUser",
    "email": "user@gmail.com",
    "verify": false,
    "admin": false,
    "favoriteCars": ["id1", "id2"]
  },
  "token": "jsonwebtokenstring"
}
```
#### 3. Get information about the current user

Endpoint: GET `/users/current`

Description: Get information about the currently authenticated user.

Response (Example):
```json
{
  "user": {
    "userName": "exampleUser",
    "email": "user@gmail.com",
    "verify": false,
    "admin": false,
    "favoriteCars": ["id1", "id2"]
  }
}
```

### Car Management

#### 4. Get all cars

Endpoint: GET `/cars/all`

Description: Retrieve information about all available rental cars.

Response (Example):
```json
[
  {
    "_id": "65b909e3a48da347ac46dcb2",
    "year": 2023,
    "make": "PEUGEOT",
    "model": "E-3008",
    "type": "Electric Car",
    "img": "https://res.cloudinary.com/dlnbfj7kd/image/upload/v1706625505/cars/hy0jof4h4nl2fk6fdthz.png",
    "description": "Meet the New PEUGEOT E-3008, which opens a new level of development...",
    "fuelConsumption": "Dual Motor 326 л.с., 509 Нм",
    "engineSize": "Electric",
    "accessories": ["PEUGEOT Panoramic i-Cockpit", "Block of touch buttons i-Toggles"],
    "functionalities": ["21-inch HD panel", "i-Cockpit®"],
    "rentalPrice": "$100",
    "rentalCompany": "Peugeot Service",
    "address": "400 Horodozka str, Lviv, Ukraine",
    "rentalConditions": "Minimum age: 26\r\nValid driver's license\r\nSecurity deposit required",
    "mileage": 100
  }
]

```

#### 5. Add a new rental car

Endpoint: POST `/cars`

Description: Add a new rental car to the system.

Request Body:
```json
{
  "year": 2023,
  "make": "PEUGEOT",
  "model": "E-3008",
  "type": "Electric Car",
  "img": "https://res.cloudinary.com/dlnbfj7kd/image/upload/v1706625505/cars/hy0jof4h4nl2fk6fdthz.png",
  "description": "Meet the New PEUGEOT E-3008, which opens a new level of development...",
  "fuelConsumption": "Dual Motor 326 л.с., 509 Нм",
  "engineSize": "Electric",
  "accessories": ["PEUGEOT Panoramic i-Cockpit", "Block of touch buttons i-Toggles"],
  "functionalities": ["21-inch HD panel", "i-Cockpit®"],
  "rentalPrice": "$100",
  "rentalCompany": "Peugeot Service",
  "address": "400 Horodozka str, Lviv, Ukraine",
  "rentalConditions": "Minimum age: 26\r\nValid driver's license\r\nSecurity deposit required",
  "mileage": 100
}
```

Response (Example):
```json
{
  "_id": "65b909e3a48da347ac46dcb2",
  "year": 2023,
  "make": "PEUGEOT",
  "model": "E-3008",
  "type": "Electric Car",
  "img": "https://res.cloudinary.com/dlnbfj7kd/image/upload/v1706625505/cars/hy0jof4h4nl2fk6fdthz.png",
  "description": "Meet the New PEUGEOT E-3008, which opens a new level of development...",
  "fuelConsumption": "Dual Motor 326 л.с., 509 Нм",
  "engineSize": "Electric",
  "accessories": ["PEUGEOT Panoramic i-Cockpit", "Block of touch buttons i-Toggles"],
  "functionalities": ["21-inch HD panel", "i-Cockpit®"],
  "rentalPrice": "$100",
  "rentalCompany": "Peugeot Service",
  "address": "400 Horodozka str, Lviv, Ukraine",
  "rentalConditions": "Minimum age: 26\r\nValid driver's license\r\nSecurity deposit required",
  "mileage": 100
}
```

#### 6. Update a rental car

Endpoint: PATCH `/cars/{id}`

Description: Update information about a specific rental car.

Request Params: `{id}` - ID of the rental car to update

Request Body:
```json
{
  "year": 2023,
  "make": "PEUGEOT",
  "model": "E-3008",
  "type": "Electric Car",
  "img": "https://res.cloudinary.com/dlnbfj7kd/image/upload/v1706625505/cars/hy0jof4h4nl2fk6fdthz.png",
  "description": "Meet the New PEUGEOT E-3008, which opens a new level of development...",
  "fuelConsumption": "Dual Motor 326 л.с., 509 Нм",
  "engineSize": "Electric",
  "accessories": ["PEUGEOT Panoramic i-Cockpit", "Block of touch buttons i-Toggles"],
  "functionalities": ["21-inch HD panel", "i-Cockpit®"],
  "rentalPrice": "$100",
  "rentalCompany": "Peugeot Service",
  "address": "400 Horodozka str, Lviv, Ukraine",
  "rentalConditions": "Minimum age: 26\r\nValid driver's license\r\nSecurity deposit required",
  "mileage": 500
}
```

Response (Example):
```json
{
  "_id": "65b909e3a48da347ac46dcb2",
  "year": 2023,
  "make": "PEUGEOT",
  "model": "E-3008",
  "type": "Electric Car",
  "img": "https://res.cloudinary.com/dlnbfj7kd/image/upload/v1706625505/cars/hy0jof4h4nl2fk6fdthz.png",
  "description": "Meet the New PEUGEOT E-3008, which opens a new level of development...",
  "fuelConsumption": "Dual Motor 326 л.с., 509 Нм",
  "engineSize": "Electric",
  "accessories": ["PEUGEOT Panoramic i-Cockpit", "Block of touch buttons i-Toggles"],
  "functionalities": ["21-inch HD panel", "i-Cockpit®"],
  "rentalPrice": "$100",
  "rentalCompany": "Peugeot Service",
  "address": "400 Horodozka str, Lviv, Ukraine",
  "rentalConditions": "Minimum age: 26\r\nValid driver's license\r\nSecurity deposit required",
  "mileage": 500
}
```

#### 7. Delete a rental car

Endpoint: DELETE `/cars/{id}`

Description: Delete a specific rental car from the system.

Request Params: {id} - ID of the rental car to delete

Response: Status Code 204 - Cars deleted


