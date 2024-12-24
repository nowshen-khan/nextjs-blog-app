# Next.js Blog App

A feature-rich blog management system built using Next.js. This app supports role-based access (Admin, Author, Reader), blog moderation, user dashboards, and progress tracking.

## Features

### Authentication System

- User registration and login with email and password.
- Role-based access control (Admin, Author, Reader).
- Secure authentication using JSON Web Tokens (JWT).

### Blog Management

- **Authors:**
  - Create, edit, and delete blogs.
  - View blogs posted by themselves in their profile.
- **Readers:**
  - Read blogs and track progress.
  - Mark blogs as "Completed" and update the reading status in the database.
  - Follow authors to get updates on their blogs.

### Admin Panel

- Manage all blogs, users, and comments.
- Approve or delete blogs.
- Manage user roles (e.g., promote a reader to an author).
- Handle reported blogs or comments.

### Comment and Follow System

- Readers can leave comments on blogs.
- Option to follow authors for updates.

### User Dashboard

- **Readers:**
  - View the list of completed blogs.
  - See total reading progress.
- **Authors:**
  - View blog statistics (e.g., number of readers, total comments).
- **Admins:**
  - Access all data, including the number of users, blogs, and traffic.

## Technologies Used

- **Frontend:** Next.js, TailwindCSS / Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)

## Getting Started

### Prerequisites

- Node.js and npm installed on your system.
- MongoDB server running locally or a MongoDB Atlas connection.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nowshen-khan/nextjs-blog-app.git
   cd nextjs-blog-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to http://localhost:3000 to view the app.
