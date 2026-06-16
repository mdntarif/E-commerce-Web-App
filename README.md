# Mini Shop — Full-Stack E-Commerce (React + Express)

A minimal full-stack e-commerce demo.

- **Frontend:** React (Vite) + React Router
- **Backend:** Node.js + Express (in-memory data, no database)

## Project Structure

```
.
├── README.md
├── backend
│   ├── package-lock.json
│   ├── package.json
│   ├── server.js
│   └── vercel.json
├── frontend
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── src
│   │   ├── App.jsx
│   │   ├── components
│   │   │   ├── Navbar.jsx
│   │   │   └── ProductCard.jsx
│   │   ├── context
│   │   │   └── CartContext.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── pages
│   │       ├── Cart.jsx
│   │       └── ProductList.jsx
│   ├── vercel.json
│   └── vite.config.js
├── pnpm-lock.yaml
├── public
│   ├── apple-icon.png
│   ├── icon-dark-32x32.png
│   ├── icon-light-32x32.png
│   ├── icon.svg
│   ├── placeholder-logo.png
│   ├── placeholder-logo.svg
│   ├── placeholder-user.jpg
│   ├── placeholder.jpg
│   └── placeholder.svg
└── tree.txt
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
