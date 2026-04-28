# 🚀 LaunchKit — SaaS Product Store

A modern, fully responsive SaaS product marketplace built with React.js and Tailwind CSS. Browse products, manage your cart, and checkout — all with a clean, professional UI.

---

## 🛠 Technologies Used

- **React.js** — Component-based UI
- **Tailwind CSS** — Utility-first styling
- **DaisyUI** — Tailwind component library
- **React-Toastify** — Toast notifications
- **Vite** — Fast development build tool
- **JavaScript ES6+** — Modern JS features
- **JSON** — Product data storage

---

## ✨ Features

1. **Product Catalog** — 9 SaaS products in a responsive 3-column grid with tags (Popular, New, Best Seller), features list, pricing, and Buy Now button.
2. **Cart System** — Add/remove products, live cart count in navbar, running total, and one-click checkout that clears all items.
3. **Toast Notifications** — Real-time feedback using React-Toastify for add to cart, remove, and checkout actions.

---

## 📦 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build
```

---

## 📁 Folder Structure

```
launchkit/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Banner.jsx
│   │   ├── Stats.jsx
│   │   ├── MainToggle.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductsGrid.jsx
│   │   ├── CartItem.jsx
│   │   ├── CartSection.jsx
│   │   ├── StepsSection.jsx
│   │   ├── PricingSection.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── products.json
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

Made with ❤️ using React + Tailwind CSS
