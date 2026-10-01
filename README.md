# 🌾 AgriMerchant

### Smart Local Farmers Marketplace

AgriMerchant is a responsive **frontend marketplace application** designed to connect customers with local farmers and vendors through a digital shopping experience.

The application demonstrates a multi-role marketplace workflow with **customer shopping, vendor product management, order handling, and an admin dashboard**, using browser-based storage for application data.

---

## 🚀 Key Features

### 👤 Customer

* User registration and login
* Browse available products
* Search and filter products
* Add products to cart
* Place orders
* View order history
* Responsive shopping interface

### 👨‍🌾 Vendor

* Vendor registration and login
* Vendor dashboard
* Add products
* Edit and delete products
* View customer orders
* Revenue tracking

### 🛠️ Admin

* Admin dashboard
* Manage users and vendors
* Monitor orders
* Manage products
* Delete users or products

---

## 🎨 UI / UX

* Responsive layout
* Grocery marketplace-style interface
* Dark mode toggle
* Toast notifications
* Interactive navigation
* Product cards and shopping interface
* Hover and interaction effects
* Mobile-friendly design

---

## 🛒 Sample Products

The application includes sample agricultural and grocery products such as:

* Mango
* Banana
* Tomato
* Onion
* Potato
* Carrot
* Spinach
* Apple
* Brinjal
* Cabbage

---

## 🏗️ Application Workflow

```text
                    ┌─────────────────────┐
                    │       Users         │
                    │ Customer / Vendor / │
                    │       Admin         │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   HTML / CSS / JS   │
                    │    Web Interface    │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   JavaScript Logic  │
                    │ Cart / Orders / UI  │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │    localStorage     │
                    │ Browser Data Store  │
                    └─────────────────────┘
```

---

## 🛠️ Tech Stack

| Technology   | Purpose                            |
| ------------ | ---------------------------------- |
| HTML5        | Page structure                     |
| CSS3         | Styling and responsive UI          |
| JavaScript   | Application logic and interactions |
| localStorage | Browser-based data persistence     |
| Git & GitHub | Version control                    |

---

## 📂 Project Structure

```text
AgriMerchant/
│
├── index.html
├── products.html
├── cart.html
├── login.html
├── register.html
├── vendor_dashboard.html
├── admin_dashboard.html
├── add_products.html
├── orders_vendor.html
├── styles.css
├── utils.js
├── .gitignore
├── LICENSE
└── README.md
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Akshitha363/AgriMerchant.git
cd AgriMerchant
```

### 2. Run the Application

This is a static frontend project and does not require a backend server.

You can run it using **VS Code Live Server**:

1. Open the project in VS Code.
2. Install the **Live Server** extension.
3. Open `index.html`.
4. Select **Open with Live Server**.

---

## 🔐 Demo Access

### Admin

```text
Email: admin@agrimerchant.com
Password: admin123
```

Customer and vendor accounts can be created through the registration interface.

> **Note:** This project uses browser-based storage and is intended as a frontend demonstration. The demo credentials should not be considered production authentication.

---

## 💾 Data Storage

AgriMerchant uses the browser's **localStorage** for client-side data persistence.

This allows the application to maintain information such as:

* User accounts
* Products
* Cart items
* Orders
* Application state

No external database is required to run the current version.

---

## 📸 Project Screenshots

Add only a few representative screenshots here rather than every page.

Recommended screenshots:

* Customer homepage / product listing
* Login or registration
* Shopping cart
* Vendor dashboard
* Admin dashboard

Store the images in a `screenshots/` directory if you decide to add them.

---

## 🌱 Future Enhancements

* Backend REST API
* Cloud database integration
* Secure server-side authentication
* Online payment integration
* Order delivery tracking
* Vendor analytics
* Mobile application
* AI-assisted price prediction

---

## 📚 Learning Outcomes

This project provided practical experience in:

* Frontend web development
* HTML5 and CSS3
* JavaScript application logic
* Responsive UI design
* DOM manipulation
* Browser localStorage
* Shopping cart workflows
* Multi-role application interfaces
* Product and order management
* Git and GitHub

---

## 👩‍💻 Developer

**Akshitha Gasikanti**

B.Tech Information Technology Student
Aspiring Software Engineer

GitHub: [Akshitha363](https://github.com/Akshitha363)

---

## 📜 License

This project is licensed under the **MIT License**.
