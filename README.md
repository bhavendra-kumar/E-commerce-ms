E-Commerce Application (MERN Stack)
This is a mentor-guided project to build a full-fledged E-commerce application using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The application includes features such as user authentication, product management, order handling, and secure payment processing.

Tech Stack
Frontend
React.js
Tailwind CSS
Axios (for API calls)
React Router (for navigation)
Context API (for global state management)
Backend
Node.js
Express.js
MongoDB (Mongoose for database handling)
Multer (for file uploads)
JWT (JSON Web Tokens for authentication)
bcrypt (for password hashing)
Project Milestones
Milestone 1: Project Overview
Understood the MERN project structure and key functionalities.
Explored core e-commerce features:
User Authentication (Login & Registration)
Product Management (Add, update, and retrieve products)
Order Handling (Manage customer orders)
Discussed REST API structure and MongoDB schema design.
Set up the GitHub repository and planned the project workflow.
Milestone 2: Frontend & Backend Setup
Organized frontend and backend into separate directories.
Frontend:
Created a React app and configured Tailwind CSS.
Built the login page with user authentication.
Backend:
Set up a Node.js server using Express.
Connected the backend to MongoDB.
The first user-facing feature (Login Page) is complete.
Milestone 3: Backend Development & Database Connection
Implemented a structured backend with routes, controllers, models, and middleware.
Configured the Node.js server to handle API requests.
Connected MongoDB for efficient data storage.
Added basic error handling to improve debugging and user experience.
Milestone 4: User Management & File Uploads
Introduced user management in the backend.
Created a user model using MongoDB schemas.
Implemented a user controller to handle user-related requests.
Configured Multer for file uploads, allowing users to upload images.
Updated the project repository with these features and documented them in the README.
Milestone 5: Creating the Signup Page
Built the signup page where users can register with:
Full name
Email
Password
Implemented form validation:
Proper email format
Strong password validation
Matching password confirmation
Signup page includes proper validation for clean and valid data submission.
Next Steps: Connecting frontend with backend for authentication.
Milestone 6: Connecting Frontend with Backend & User Sessions
Integrated signup and login pages with backend APIs using Axios.
Implemented JWT-based authentication to securely store and manage user sessions.
Used localStorage and Context API to maintain login state across sessions.
Created protected routes to restrict unauthorized access.
Implemented role-based access control (e.g., Admin vs. Regular Users).
Improved UI with loading indicators and error messages.
Milestone 7: User Login API with Secure Authentication
Created a login API endpoint (POST /api/auth/login).
Retrieved user data from the database based on the provided email.
Validated user credentials:
Used bcrypt to compare entered password with the stored hashed password.
If the password matches, authentication is successful.
If not, an error message is returned.
Implemented JWT token generation for secure authentication.
Tested the API using Postman and Thunder Client.
Updated the project repository and documentation.
Milestone 8: Product Cards and Homepage Layout
Designed and built a reusable product card component that accepts product details via props.
Learned how to dynamically display product cards by passing an array of product details and mapping through them to render each card.
Created a responsive homepage layout using Tailwind CSS grid to display multiple cards efficiently across different screen sizes.
Created the Card Component:
I designed a reusable React component called ProductCard. This component accepts props like product name, image, and price, and displays them in a structured card format. I also added hover effects to make the cards interactive.

Designed the Homepage Layout:
I used Tailwind CSS to create a responsive grid layout for the homepage. The layout adapts to different screen sizes, with one column on mobile, two columns on tablet, and four columns on larger screens. This ensures a clean and organized display of products.

Displayed Dynamic Product Cards:
I created an array called productDetails containing mock product data such as name, image, description, and price. Using JavaScript's map() function, I iterated over the array to dynamically generate a card for each product.

UI Enhancements:
I ensured that the cards had consistent spacing, aligned content, and were visually appealing. The homepage now displays a neat grid of products, making it easy for users to browse through them.

