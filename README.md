# Task Manager API

## Description
A Task Manager application built with Node.js, Express, and a simple HTML/CSS/JavaScript frontend using the MVC architecture.

## Features
- View all tasks
- View a task by ID
- Add a new task
- Update a task
- Delete a task
- Toggle completed status
- Filter tasks (All, Completed, Pending)

## Technologies
- Node.js
- Express.js
- HTML
- CSS
- JavaScript

## Project Structure

task-manager-api/
- backend/
  - config/
  - controllers/
  - data/
  - routes/
  - services/
  - index.js
- frontend/
  - index.html
  - style.css
  - app.js

## API Endpoints

- GET /api/tasks
- GET /api/tasks/:id
- POST /api/tasks
- PATCH /api/tasks/:id
- DELETE /api/tasks/:id

## Run the Project

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm run dev
```

Open:

```
frontend/index.html
```

in your browser.