# Blog-Website
A full-stack Blog Website built with Node.js, Express, MySQL, and EJS. It includes user authentication, CRUD operations for posts, comments, dynamic server-side rendering, and a responsive UI. Demonstrates backend routing, database integration, and full-stack development skills.

Project Structure: 
/app.js — Main server file
/routes — Application routes for posts, users, and comments
/models — Database models
/views — EJS templates for pages
/public — Static assets (CSS, JS, images)
/config — Database configuration

Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/blog-website.git
   cd blog-website
2. Install dependencies:
   npm install
3. Set up MySQL database:
   Create a database (e.g., BlogWebDB)
   Update database credentials in /config/config.js
   Run SQL script to create tables (if provided) or let Sequelize sync models
4. Run the server:
   npm start
5. Install Nodemon for development:
   npm install -g nodemon
   nodemon app.js
