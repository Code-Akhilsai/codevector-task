# CodeVector Backend Task

A backend application built using Node.js, Express.js, and MongoDB to efficiently browse and paginate through a dataset of 200,000 products.

## Features

* Cursor-based pagination
* Category filtering
* Fast product retrieval using MongoDB indexes
* Handles large datasets efficiently
* REST API endpoints
* Seed script for generating 200,000 products

## Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Render (Deployment)

## API Endpoints

### Get Products

```http
GET /api/v1/products
```

Returns the first 20 newest products.

### Get Next Page

```http
GET /api/v1/products?cursor=<cursor>
```

Returns the next 20 products after the provided cursor.

### Filter By Category

```http
GET /api/v1/products?category=Electronics
```

Returns products belonging to a specific category.

### Filter By Category With Pagination

```http
GET /api/v1/products?category=Electronics&cursor=<cursor>
```

Returns the next page of category-filtered products.

## Database Indexes

```js
productSchema.index({ createdAt: -1 });
productSchema.index({ category: 1, createdAt: -1 });
```

These indexes improve pagination and category filtering performance.

## Installation

```bash
git clone https://github.com/Code-Akhilsai/codevector-task.git
cd codevector-task

npm install
```

Create a `.env` file:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

Run the project:

```bash
npm run dev
```

## Seed Database

```bash
node src/seed/seedProducts.js
```

Generates and inserts 200,000 products into MongoDB.

## Deployment

Backend deployed on Render.

## Design Decisions

* Used cursor pagination instead of skip/limit to avoid duplicate or missing records when data changes.
* Added MongoDB indexes for efficient querying on large datasets.
* Implemented category-based filtering along with pagination.

## Future Improvements

* Use a compound cursor (`createdAt + _id`) for production-grade pagination.
* Add automated tests.
* Add frontend UI for product browsing.
