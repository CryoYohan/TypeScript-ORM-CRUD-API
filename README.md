# TypeScript-ORM-CRUD-API
Creating a CRUD API using TypeScript and TypeScript ORM for creating database from models.
Ypil, Cyril John T.										             3/8/25
BSIT-3B         									     FRI 4:30-9:30PM

TypeScript ORM CRUD API Documentation
Table of Contents
Introduction
Project Setup
Prerequisites
Installation
Configuration
Project Structure Overview
Detailed File Documentation
package.json
tsconfig.json
Database Setup (db.ts)
User Entity (user.model.ts)
User Interface (user.interface.ts)
User Service (user.service.ts)
User Controller (user.controller.ts)
User Routes (user.routes.ts)
Middleware (error-handler.ts, validate-request.ts)
Main Application (app.ts)
Running the Project
API Testing with Thunder Client
Installing Thunder Client
Sample API Requests

1. Introduction
This document provides a structured overview of the TypeScript ORM CRUD API project, detailing how to set up, configure, and test the API. It includes descriptions for each file and its functionality.
2. Project Setup
Prerequisites
Before proceeding, ensure the following are installed:
Node.js & npm
MySQL Database Server
Thunder Client (VS Code Extension)
Installation
Clone the repository and navigate into the project directory:
mkdir TypeScript-ORM-CRUD-API
cd TypeScript-ORM-CRUD-API
git clone <repo_link>

Install dependencies:
npm install

Set up environment variables in .env:
PORT=4000

Configuration
Modify tsconfig.json for TypeScript settings:
{
    "compilerOptions": {
        "target": "es2016",
        "module": "commonjs",
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true,
        "strict": true
    }
}

3. Project Structure Overview
The project follows a modular structure:
src/
├── _helpers/
│   ├── db.ts
├── _middlewares/
│   ├── error-handler.ts
│   ├── validate-request.ts
├── users/
│   ├── user.controller.ts
│   ├── user.interface.ts
│   ├── user.model.ts
│   ├── user.service.ts
│   ├── user.routes.ts
├── app.ts
├── package.json
└── tsconfig.json

4. Detailed File Documentation
package.json
Manages dependencies and scripts.
{
  "scripts": {
    "dev": "nodemon src/app.ts"
  }
}

Database Setup (db.ts)
Handles MySQL database connection using TypeORM.

User Model (user.model.ts)
Defines the User schema.

User Service (user.service.ts)
Handles business logic for CRUD operations.


User Controller (user.controller.ts)
Manages request handling.



User Routes (user.routes.ts)
Defines API endpoints.

Middleware (error-handler.ts)
Handles application-wide errors.

5. Running the Project
To start the project:
npm run dev

6. API Testing with Thunder Client
Installing Thunder Client
Open VS Code
Install "Thunder Client" from the Extensions Marketplace
Sample API Requests
Create User
Method: POST
 URL: http://localhost:4000/api/users
 Body (JSON):
{
    "title":"Mr.",
    "firstName": "John",
    "lastName": "Doe",
    "role": "Admin",
    "email": "john.doe@example.com",
    "password": "123456",
    "confirmPassword":"123456"
}


Get All Users
Method: GET
 URL: http://localhost:4000/api/users

Update User
Method: PUT
 URL: http://localhost:4000/api/users/{id}
 Body (JSON):
{
  "message": "User updated"
}

Delete User
Method: DELETE
 URL: http://localhost:4000/api/users/{id}


Conclusion
This guide provides a detailed breakdown of the TypeScript ORM CRUD API, including its setup, configuration, and API testing. Ensure that each step is followed correctly to have a fully functional API.
[Github Repository]
https://github.com/CryoYohan/TypeScript-ORM-CRUD-API.git




