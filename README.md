# Pinterest Clone (Backend Learning Project)

This project is a **Pinterest Clone** built mainly to **learn backend development and authentication**.  
The project is being developed step-by-step.

Currently, the **Pinterest-style header** is completed and **Register, Sign in, and Logout functionalities are implemented using backend authentication**.

---

## 🎯 Project Purpose

The main purpose of this project is to:

- Learn **backend development using Node.js & Express**
- Implement **authentication (Register, Sign in, Logout)**
- Understand how frontend buttons and forms connect to backend routes
- Practice real-world authentication flow
- Build a full-stack project incrementally

> UI is simple by design.  
> Backend logic and authentication are the primary focus.

---

## 🚧 Current Status

### ✅ Completed
- [x] Pinterest-style Header UI
- [x] Login Page UI
- [x] Signup Page UI
- [x] User Registration (backend)
- [x] User Sign in (backend)
- [x] User Logout (backend)
- [x] Authentication routes connected (`/register`, `/login`, `/logout`)
- [x] GitHub repository setup

### 🔄 In Progress / Coming Soon
- [ ] Password hashing improvements
- [ ] Session persistence & optimization
- [ ] Protected routes middleware
- [ ] Pinterest-style feed (pins)
- [ ] Create pin feature
- [ ] User profile page
- [ ] Authorization (roles/permissions)

> This checklist will be updated as new features are added.

---

## 🔐 Authentication (Implemented)

Authentication is implemented using backend routes:

- **Register**: User can create an account using the signup form
- **Sign in**: User can log in using registered credentials
- **Logout**: User session is destroyed securely
- Forms and buttons are connected to backend POST/GET routes
- Backend handles user validation and session management

Further improvements like stronger security and protected routes will be added.

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- Font Awesome

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Passport.js (Local Strategy)
- Express-session

---

## 📁 Project Structure (Evolving)

pinterest-clone/
│
├── bin/
├── node_modules/
│
├── public/
│ ├── images/
│ ├── javascripts/
│ └── stylesheets/
│ ├── login.css
│ ├── signup.css
│ └── style.css
│
├── routes/
│ ├── index.js
│ ├── users.js
│ └── post.js
│
├── views/
│ ├── error.ejs
│ ├── index.ejs
│ ├── login.ejs
│ └── signup.ejs
│
├── app.js
├── package.json
├── package-lock.json
└── README.md
