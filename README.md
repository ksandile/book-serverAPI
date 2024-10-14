# Book Server API

Welcome to the Book Server API! This API is designed to provide book data for the Book App. It allows you to retrieve a list of books, and it must be running to display books in your application.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Running the Server](#running-the-server)
- [License](#license)

## Installation

To get started, clone this repository to your local machine using the following command:

```bash
git clone https://github.com/ksandile/book-serverAPI.git
```

Next, navigate to the project directory:

```bash
cd book-serverAPI
```

Install the required dependencies:

```bash
npm install
```

## Usage

Before you can use the Book App, make sure the Book Server API is running. The API will serve book data needed by your app.

### Running the Server

To start the server, use the following command:

```bash
node server.js
```

The server will start and listen for requests. You should see a message indicating that the server is running.

**Important:** If this server is not running, the books will not appear in your Book App.

## API Endpoints

The following API endpoints are available for use:

### Get All Books

- **Endpoint:** `/api/books`
- **Method:** `GET`
- **Description:** Retrieve a list of all books.

### Get a Book by ID

- **Endpoint:** `/api/books/:id`
- **Method:** `GET`
- **Description:** Retrieve a specific book by its ID.

### Add a New Book

- **Endpoint:** `/api/books`
- **Method:** `POST`
- **Description:** Add a new book to the database.
- **Request Body:**
  ```json
  {
    "title": "Book Title",
    "author": "Author Name",
    "description": "Description of the book",
    "publishedYear": 2021
  }
  ```

### Update a Book

- **Endpoint:** `/api/books/:id`
- **Method:** `PUT`
- **Description:** Update an existing book by its ID.
- **Request Body:**
  ```json
  {
    "title": "Updated Book Title",
    "author": "Updated Author Name",
    "description": "Updated description of the book",
    "publishedYear": 2022
  }
  ```

### Delete a Book

- **Endpoint:** `/api/books/:id`
- **Method:** `DELETE`
- **Description:** Delete a book from the database by its ID.
