#  Cart Application

A fully functional, responsive e-commerce application built with **ReactJS** and **Vite**. This project utilizes the **Fake Store API** for product data and features a dynamic shopping cart with real-time calculations and routing.

## 🔗 Live Demo
**View the deployed application here:** [https://agent-693af0341c47dc--aquamarine-mooncake-70fd02.netlify.app/](https://agent-693af0341c47dc--aquamarine-mooncake-70fd02.netlify.app/)

## 🚀 Features

* **Product Feed:** Fetches data from an external API and displays products in a responsive grid layout.
* **Cart System:**
    * **Add to Cart:** Users can add items from the product list.
    * **Remove Item:** Remove items directly from the cart or toggle the button on the product list.
    * **Quantity Control:** Increase or decrease item quantity with real-time price updates.
* **Smart Calculations:**
    * Automatically calculates subtotal.
    * **Applies a fixed 10% discount** to the final total.
* **Routing:** seamless navigation between "Shop" and "Cart" views using `react-router-dom`.
* **Responsive UI:** Styled with **Tailwind CSS** for a mobile-first experience.

## 🛠️ Tech Stack

* **Frontend Library:** ReactJS (Vite)
* **Styling:** Tailwind CSS, PostCSS
* **Routing:** React Router DOM (v6)
* **Data Source:** [Fake Store API](https://fakestoreapi.com/)
* **Deployment:** Netlify

## 📂 Project Structure

```text
shopping-cart/
├── public/              
│   ├── _redirects       # Fix for Netlify routing (prevents 404s on refresh)
│   └── vite.svg
├── src/
│   ├── components/
│   │   └── Navbar.jsx   # Navigation bar with dynamic cart badge
│   ├── pages/
│   │   ├── Cart.jsx     # Cart logic, table, and summary calculation
│   │   └── ProductList.jsx # Main display grid for API products
│   ├── App.jsx          # Routes definition and Global State (Cart State)
│   ├── main.jsx         # Entry point
│   └── index.css        # Tailwind imports
├── index.html           # HTML entry point
├── package.json         # Dependencies
├── postcss.config.js    # CSS processing
├── tailwind.config.js   # Tailwind config
└── vite.config.js       # Vite build config
⚡ How to Run Locally
Clone the repository:

Bash

git clone [https://github.com/Velmuruganvaradharaj1122/Shopping-Cart-Application.git](https://github.com/Velmuruganvaradharaj1122/Shopping-Cart-Application.git)
cd shopping-cart
Install Dependencies:

Bash

npm install
Start the Server:

Bash

npm run dev
View App: Open http://localhost:5173 in your browser.

🚀 Deployment Config (Netlify)
If deploying to Netlify, use the following build settings:

Build Command: npm run build

Publish Directory: dist
