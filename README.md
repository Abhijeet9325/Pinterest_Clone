📌 Pinterest Clone (Backend Learning Project)

This project is a Pinterest Clone built primarily to learn backend development and authentication concepts.
The application is being developed incrementally, with a strong focus on real-world backend workflows rather than UI perfection.

Currently, the project includes a Pinterest-style header, authentication system, profile handling, and post creation with image uploads.

🎯 Project Purpose

The main goals of this project are to:

Learn backend development using Node.js and Express

Implement authentication flows (Register, Login, Logout)

Understand how frontend forms & buttons interact with backend routes

Work with sessions, middleware, and protected routes

Handle image uploads and database relations

Build confidence in developing a real-world full-stack application

UI is intentionally kept simple.
Backend logic, authentication, and data flow are the primary focus.

🚧 Current Status
✅ Completed Features

Pinterest-style header UI

User registration (Signup)

User login (Signin)

User logout

Session-based authentication using Passport.js

Logged-in user details rendered dynamically on profile page

Profile image upload using Multer

Create post feature with image upload

Posts linked to authenticated users

Display user posts (pins) on profile/homepage

Protected routes using authentication middleware

GitHub repository setup with meaningful commits

🔄 In Progress / Coming Soon

Edit profile details

Delete post functionality

Improved authorization checks

Pinterest-style masonry feed

Save / Like pins

Better error handling & validation

UI refinements

Deployment (Render / Railway / similar)

This checklist will be updated as new features are added.

🔐 Authentication & Profile Management

User authentication implemented using Passport.js (Local Strategy)

Session-based login system

Logged-in user name and username are automatically shown on profile

Secure logout functionality

Profile image upload supported using Multer

Uploaded images are stored on the server and rendered dynamically

Routes are protected using authentication middleware

📌 Posts (Pins)

Authenticated users can create new posts

Each post includes:

Image upload

Title

Description

Posts are stored in MongoDB

Each post is associated with the logged-in user

User posts are populated and displayed dynamically

🛠️ Tech Stack
Frontend

HTML5

CSS3

EJS (Templating)

Font Awesome

Backend

Node.js

Express.js

MongoDB

Mongoose

Passport.js (Local Strategy)

Express-session

Multer (Image Uploads)

📁 Project Structure (Evolving)
pinterest-clone/
│
├── bin/
├── node_modules/
│
├── public/
│   ├── images/
│   │   └── uploads/
│   ├── javascripts/
│   └── stylesheets/
│       ├── login.css
│       ├── signup.css
│       └── style.css
│
├── routes/
│   ├── index.js
│   ├── users.js
│   └── post.js
│
├── views/
│   ├── error.ejs
│   ├── homepage.ejs
│   ├── login.ejs
│   └── signup.ejs
│
├── app.js
├── package.json
├── package-lock.json
└── README.md
