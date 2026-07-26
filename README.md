# Nexora — Redux Toolkit E-Commerce

A modern dark-themed e-commerce app built to practice **Redux Toolkit with a real-world shopping flow** instead of a basic CRUD project.

## Tech Stack

- React + Vite
- Redux Toolkit
- React Router
- Axios
- Tailwind CSS
- Lucide React
- EscuelaJS API

## Features

- Modern dark + subtle glassmorphism UI
- Home, Shop & Cart pages
- Products fetched using Axios
- 16-product limit
- Add products to cart
- Increase / decrease quantity
- Automatically remove when quantity reaches `0`
- Unique product count in navbar
- Dynamic subtotal, shipping, tax & total
- Reusable React components
- Centralized cart & product state with Redux Toolkit

## Project Structure

```text
src/
├── api/
├── components/
│   ├── cart/
│   ├── home/
│   └── shop/
├── pages/
├── redux/
│   ├── store.js
│   ├── productSlice.js
│   └── cartSlice.js
├── App.jsx
└── main.jsx
```

## Getting Started

```bash
git clone <your-repository-url>
cd nexora
npm install
npm run dev
```

## Main Redux Flow

```text
API → Axios → Product Slice → Redux Store
                              ↓
                         Shop / Cart
                              ↓
                       Cart Slice
                              ↓
                    Navbar + Order Summary
```

## Learning Focus

This project helped practice:

- Redux Toolkit & slices
- Global state management
- `useSelector` & `useDispatch`
- API integration with Axios
- React Router
- Reusable components
- Derived state
- Cart CRUD operations
- Responsive Tailwind UI

## Author

## Pratham Kave
