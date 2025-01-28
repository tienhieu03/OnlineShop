# OnlineShop

OnlineShop is a web application for an online shopping platform. It includes a frontend for customers and an admin panel for managing orders.

## Features

- User authentication
- Product browsing and searching
- Shopping cart management
- Order placement and payment processing
- Admin panel for order management

## Technologies Used

- Frontend: React, Tailwind CSS
- Backend: Node.js, Express
- Database: MongoDB
- Payment Integration: Stripe, Razorpay

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Setup Instructions

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/OnlineShop.git
   cd OnlineShop/backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add the following environment variables:

   ```env
   PORT=4000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the `frontend` directory:

   ```bash
   cd ../frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `frontend` directory and add the following environment variables:

   ```env
   VITE_BACKEND_URL=http://localhost:4000
   VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
   ```

4. Start the frontend development server:
   ```bash
   npm run dev
   ```

### Admin Panel Setup

1. Navigate to the `admin` directory:

   ```bash
   cd ../admin
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `admin` directory and add the following environment variables:

   ```env
   VITE_BACKEND_URL=http://localhost:4000
   ```

4. Start the admin panel development server:
   ```bash
   npm run dev
   ```

## Usage

- Access the frontend at `http://localhost:3000`
- Access the admin panel at `http://localhost:3001`

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License.
