# Mini Shop — Full-Stack E-Commerce (React + Express)

A minimal full-stack e-commerce demo.

- **Frontend:** React (Vite) + React Router
- **Backend:** Node.js + Express (in-memory data, no database)

## Project Structure

```
.
├── backend/          # Express API
│   ├── server.js     # Routes + in-memory products array
│   └── package.json
└── frontend/         # React app (Vite)
    ├── src/
    │   ├── components/   # Navbar, ProductCard
    │   ├── context/      # CartContext (global cart state)
    │   ├── pages/        # ProductList, Cart
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── index.html
    └── package.json
```

## API Endpoints

| Method | Route            | Description          |
| ------ | ---------------- | -------------------- |
| GET    | `/api/products`  | Get all products     |
| POST   | `/api/products`  | Add a new product    |

`POST` body example:

```json
{ "name": "New Item", "price": 19.99, "image": "https://..." }
```

## Run Locally

You need two terminals — one for the backend, one for the frontend.

### 1. Start the backend (port 5000)

```bash
cd backend
npm install
npm run dev
```

The API will be available at `http://localhost:5000`.

### 2. Start the frontend (port 3000)

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

> The frontend calls the backend at `http://localhost:5000`. Make sure the
> backend is running first, otherwise the product list will show an error.

## Features

- Browse products fetched from the backend
- Add products to the cart
- Increase / decrease quantity in the cart
- Remove items from the cart
- See the running total price
