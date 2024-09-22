const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const items = [
  { id: 1, name: "Laptop", description: "A portable computer", price: 999.99, category: "Electronics" },
  { id: 2, name: "Smartphone", description: "A handheld mobile device", price: 699.99, category: "Electronics" },
  { id: 3, name: "Headphones", description: "Over-ear noise-cancelling headphones", price: 199.99, category: "Audio" },
  { id: 4, name: "Coffee Maker", description: "Brews coffee automatically", price: 79.99, category: "Home Appliances" },
  { id: 5, name: "Yoga Mat", description: "Non-slip mat for yoga exercises", price: 29.99, category: "Fitness" },
  { id: 6, name: "Book: The Great Gatsby", description: "A novel by F. Scott Fitzgerald", price: 10.99, category: "Books" },
];

app.get("/api/items", (req, res) => {
  res.json(items);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
