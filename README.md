# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# 🛒 E-Mart – React E-commerce Website

A modular and scalable **React + Vite e-commerce frontend** with category-based navigation, product detail pages, and cart state management using Context API.

---

## 🚀 Features

- 🧭 Multi-page navigation with React Router
- 🛍️ Category-based product browsing (AC, Mobiles, Furniture, etc.)
- 🔍 Individual product detail pages
- 🛒 Global cart management using Context API
- 📦 Organized product data (separate files per category)
- 📱 Responsive UI with reusable components

---

## 🏗️ Tech Stack

- **Frontend:** React 18
- **Build Tool:** Vite
- **Routing:** React Router DOM
- **State Management:** Context API
- **Language:** JavaScript (ES Modules)

---

## 🧠 Application Flow

### Routing
- Defined in `App.jsx`
- Handles navigation between:
  - Landing page
  - Category pages
  - Single product pages

### Components
- Reusable UI components for each category
- `Products.jsx` handles product rendering
- `Navbar.jsx` manages navigation

### Pages
- Each category has its own page
- Pages import category-specific data and components

### Single Product Views
- Dedicated components for individual product details
- Data filtered using product ID

### State Management
- Managed using Context API
- `CartContext.jsx` provides global cart state
- `UserCart.jsx` handles cart UI and logic

### Data Handling
- Static product data stored in `/data`
- Each category has a separate file
- `proData.js` aggregates product data

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ecommerce-website.git
cd ecommerce-website
