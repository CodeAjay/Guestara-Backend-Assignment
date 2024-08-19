# Menu Management Backend

A Node.js backend for managing menu categories, subcategories, and items. Uses Express.js and MongoDB.

## Installation

1. **Clone the repo:**
   ```bash
   git clone [https://github.com/your-username/menu-management-backend.git](https://github.com/CodeAjay/Guestara-Backend-Assignment.git)
   cd guestara-backend-assignment
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment variables:**
   Create a `.env` file:
     ```bash
     PORT=5000
     MONGODB_URI= your mongodb details
     ```
5. **Start the server:**
   ```bash
   npm start
   ```

## API Endpoints

- **Categories**
  - `POST /categories`
  - `GET /categories`
  - `GET /categories/:id`
  - `PUT /categories/:id`

- **Subcategories**
  - `POST /subcategories/:categoryId`
  - `GET /subcategories`
  - `PUT /subcategories/:id`

- **Items**
  - `POST /items`
  - `GET /items`
  - `GET /items/search?name=Espresso`
  - `PUT /items/:id`

## Documentation

- **Loom Video:** [[Loom Video Link](https://loom.com/your-video-link)](https://www.loom.com/share/87ca0bac8fe74e39ba2350bd965959b4?sid=f39ccca8-b9d8-489c-87a2-09ddfb1d2a53)

## Short Answers

- **Database:** MongoDB for flexibility and scalability.
- **Learnings:** API structuring, Mongoose relationships.
- **Challenges:** Designing scalable schemas.
- **Improvements:** Add authentication.

## License

MIT License.

This version is straightforward and covers all the essential details without any unnecessary information.
