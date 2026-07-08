Taj Royale — Restaurant Reservation System

A full-stack restaurant website and table reservation platform, built for Taj Royale, a fictional royal Indian fine-dining restaurant. Guests can explore a curated menu, learn how each dish is prepared, reserve a table through an interactive floor plan, and manage their bookings from a personal dashboard.

✨ Features

🍛 Menu & Dish Discovery


Elegant, animated dish grid with ratings, tags (Chef's Pick, Bestseller, Signature, New), and pricing
Click-through dish detail modal showing a full description of ingredients and preparation technique — designed to feel like a real fine-dining menu experience
Category filters (Tandoor Specials, Biryani & Rice, Curries & Kebabs, Sweets & Desserts)


📅 Table Reservation


Guided 4-step reservation flow: guest details → date/time/occasion/seating → live floor plan table selection → confirmation
Interactive floor plan with real-time table availability (indoor & outdoor zones), filtered by party size
Occasion tagging (birthday, anniversary, business meeting, etc.)
Form validation with inline error messages


👤 Authentication


Email & password sign in / sign up
Google OAuth login via @react-oauth/google
Auth-protected routes (dashboard & reservation require login)


🗂️ Guest Dashboard


Upcoming & past reservation history
Cancel upcoming reservations
Downloadable PDF reservation card — a custom-designed gold & black confirmation card generated client-side with jsPDF
Favorites, profile, and notification settings panels
Loyalty tier & points display


🎨 Design & UX


Fully animated with Framer Motion (scroll reveals, parallax hero, staggered grids, page transitions)
Dark, luxury gold-on-black theme with glassmorphism cards
Toast notifications (react-hot-toast) for feedback on every action
Fully responsive across mobile, tablet, and desktop



🛠️ Tech Stack

Frontend


React + TypeScript
TanStack Router — file-based routing
Framer Motion — animation
Tailwind CSS — styling
React Hook Form — form state & validation
Lucide React — icons
jsPDF — client-side PDF generation
react-hot-toast — notifications
@react-oauth/google — Google sign-in


Backend


Node.js + Express
MongoDB — data persistence
JWT-based authentication



📂 Project Structure

reserve-royale/
├── frontend/
│   ├── src/
│   │   ├── assets/              # Dish, gallery, and hero images
│   │   ├── components/
│   │   │   ├── reservation/     # Floor plan, step indicator
│   │   │   ├── site/            # Section headers, dish modal
│   │   │   └── ui/              # Shared UI primitives
│   │   ├── lib/
│   │   │   ├── api.ts           # API client
│   │   │   ├── auth-store.ts    # Auth/session state
│   │   │   ├── mock-data.ts     # Dishes, testimonials, tables, etc.
│   │   │   └── toast-helpers.tsx
│   │   ├── routes/               # File-based pages (home, menu, reservation, dashboard, login, etc.)
│   │   └── router.tsx
│   └── package.json
└── backend/
    ├── server.ts
    └── ...


🚀 Getting Started

Prerequisites


Node.js (v18+ recommended)
npm or yarn
A MongoDB instance (local or Atlas)


Installation

bash# Clone the repo
git clone https://github.com/Devanshagarwal001/Taj-royale-reservation-system.git
cd Taj-royale-reservation-system

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install

Environment Variables

Create a .env file in frontend/ and backend/ based on .env.example:

env# frontend/.env
VITE_API_URL=http://localhost:5000
VITE_GOOGLE_CLIENT_ID=your_google_oauth_client_id

# backend/.env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Running locally

bash# Start backend
cd backend
npm run dev

# Start frontend (in a separate terminal)
cd frontend
npm run dev

Visit http://localhost:8080 (or your configured port) in your browser.




🗺️ Roadmap


 Fix Google OAuth to issue backend-verified JWTs instead of a placeholder token
 Admin dashboard for managing reservations and menu items
 Email confirmation for bookings
 Payment integration for deposits
 Multi-language support



🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to check the issues page or open a pull request.


📄 License

This project is licensed under the MIT License — see the LICENSE file for details.


🙏 Acknowledgements

Built as a personal full-stack project to practice React, TypeScript, animation, and end-to-end reservation system design.
