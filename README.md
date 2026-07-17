# 🏨 QuickStay - Hotel Booking Platform

A modern, fast, and feature-rich full-stack Hotel Booking application built with the MERN stack (MongoDB, Express, React, Node.js). 

It features secure authentication via **Clerk**, payments with **Stripe**, email notifications through **Nodemailer**, and media hosting using **Cloudinary**.

---

## ✨ Features

- **Guest User Flow:**
  - 🏠 Browse & search hotels and rooms.
  - ℹ️ Detailed room views with pricing, ratings, and descriptions.
  - 💳 Secure online booking and checkout powered by **Stripe**.
  - 🔐 Easy user sign-up and login powered by **Clerk**.
  - 📧 Confirmation emails for bookings.
  
- **Hotel Owner Dashboard:**
  - 📊 View metrics and booking analytics.
  - ➕ Create and list new hotel rooms with Cloudinary image upload.
  - 📋 Manage and view listed rooms.

---

## 🛠️ Technology Stack

| Frontend | Backend | Services & APIs |
| :--- | :--- | :--- |
| **React 19** | **Node.js** | **Clerk** (Authentication & Webhooks) |
| **Vite** | **Express 5** | **Stripe** (Payments & Webhooks) |
| **Tailwind CSS v4** | **Mongoose (MongoDB)** | **Cloudinary** (Image Hosting) |
| **React Router v7** | **Multer** (File uploads) | **Nodemailer / Brevo** (Email Notifications) |

---

## 📁 Project Structure

```text
hotelBookingProject/
├── client/          # React frontend (Vite, Tailwind CSS, React Router, Clerk)
└── server/          # Express backend (MongoDB, Mongoose, Stripe, Nodemailer)
```

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have **Node.js** and **npm** installed on your system.

### 2. Clone the Repository
```bash
git clone https://github.com/sambhav-ad/hotelBookingProject.git
cd hotelBookingProject
```

### 3. Setup Environment Variables

#### Client (`client/.env`)
Create a `.env` file in the `client` directory:
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BACKEND_URL=http://localhost:3000
VITE_CURRENCY=$
```

#### Server (`server/.env`)
Create a `.env` file in the `server` directory:
```env
MONGODB_URI=your_mongodb_connection_string
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
SENDER_EMAIL=your_sender_email
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

### 4. Install & Run Locally

#### Running the Backend
```bash
cd server
npm install
npm run server
```

#### Running the Frontend
```bash
cd ../client
npm install
npm run dev
```

---

## 🌐 Deployment

- **Frontend:** Deployed on **Vercel** (`client/vercel.json` configured).
- **Backend:** Deployed on **Vercel** (`server/vercel.json` configured).
