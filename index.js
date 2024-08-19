// server.js
const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use('/categories', require('./routes/category'));
app.use('/subcategories', require('./routes/subcategory'));
app.use('/items', require('./routes/item'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
