Contact Management System
A feature-rich Contact Management System built with Next.js (TypeScript), MongoDB, and Material-UI (MUI). This system provides an intuitive interface to manage client or customer contacts with options to add, view, edit, and delete contact information.

Features
 - Add new contacts with essential details such as Name, Email, Phone Number, Company, and Job Title.
 - View all contacts in a paginated and sortable table.
 - Update existing contact information.
 - Delete contacts to keep the list clean and relevant.
 - Responsive and professional UI with Material-UI and Tailwind CSS for styling.


Tech Stack
 - Frontend: Next.js (TypeScript), Material-UI, Tailwind CSS.
 - Backend: Node.js API routes (RESTful API).
 - Database: MongoDB.
 - Styling: Material-UI components, Tailwind CSS.
 - Authentication: JWT for secure API interactions.


Folder Structure
 - The project follows the src-based folder structure in Next.js:

 ```
 src/
├── app/
|   ├── api
|   |    ├── contacts
|   |    |   ├── route.ts         # Backend CRUD logic
|   |    ├── users
|   |    |    ├── signin
|   |    |        ├── route.ts        #Backend Logout logic     
|   |    |    ├── signup
|   |    |        ├──route.ts        #Backend signup logic     
|   |    |    ├── logout
|   |    |        ├── route.ts     #Backend Logout logic      
│   ├── contacts/
│   │   ├── page.tsx          # Contacts listing page
│   ├── add/
│   │   ├── page.tsx            # Add new contact form page
|   ├── signin 
|   |   ├── page.tsx            # Signin Route page
|   ├── signup
|   |   ├── page.tsx           # Signup  Route  page
|   ├── dashboard
|   |    ├── page.tsx          # Dashboard Page 
|   ├──edit
|   |   ├── [id]
|   |      ├── page.tsx          # Edit contact page
├── components/
│   ├── ContactForm.tsx       # Reusable form component
│   ├── ContactsTable.tsx     # Table to display contact list
|   ├── Appbar.tsx            # Navbar 
|   ├── Auth.tsx              # All the signup/signin frontend code
|   ├── TypeCheck.ts          # Checking the types of input
├── dbConfig/
│   ├── dbConfig.ts            # MongoDB connection            
├── models/
│   ├── Form.ts                 # MongoDB schema for contacts
    ├── model.ts              # MongoDB schema for signup/signin
├── pages/api/
│   ├── contacts/
│   │   ├── route.ts          # API routes for CRUD operations
├── styles/
│   ├── globals.css           # Global styles (includes TailwindCSS)
│   ├── theme.ts              # Material-UI theme customization
.env                          # Environment variables

```


Getting Started
1. Prerequisites
 - NextJs
 - ReactJs
 - Typescript
 - Node.js (v16+)
 - MongoDB Database
 - Git (for version control)
2. Clone the Repository
  -  git clone https://github.com/your-username/contact-management.git
   - cd contact-management
3. Install Dependencies
  Install all required Node.js modules:
 - npm install
4. Setup Environment Variables
  Create a .env file in the root directory and add the following variables:
  - MONGO_URI=your_mongodb_connection_string
  - JWT_SECRET=your_jwt_secret_key
  - Domain: http://localhost:3000
5. Run the Development Server
Start the development server:
npm run dev


API Endpoints
1. POST /api/contacts
Description: Add a new contact.
Body Parameters:
firstName (string, required)
lastName (string, required)
email (string, required)
phoneNumber (string, required)
company (string, required)
jobTitle (string, required)
2. GET /api/contacts
Description: Retrieve all contacts.
3. PUT /api/contacts/
Description: Update a specific contact.
Body Parameters: Any of the contact fields.
4. DELETE /api/contacts/
Description: Delete a specific contact


Screenshots
1. Contact List Page
<img src="screenshots/Screenshot (1261).png" alt="Contact List Page" width="700"/>
<img src="screenshots/Screenshot (1260).png" alt="Contact List Page" width="700"/>
2. Signup /Signin Page
<img src="screenshots/Screenshot (1264).png" alt="Add Contact Form" width="700"/>
<img src="screenshots/Screenshot (1265).png" alt="Add Contact Form" width="700"/>