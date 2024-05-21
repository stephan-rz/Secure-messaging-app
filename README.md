# Secure Messaging Web App

Welcome to the Secure Messaging Web App repository! This project aims to provide a robust and secure platform for real-time communication with advanced security features and machine learning integration for spam detection.

**Note: Production URL Under Maintenance (Use locally)**

**Please use Google/ Github signin option because currently email provider only send emails to registered email in the provider until domain verification**

## Table of Contents

- [Secure Messaging Web App](#secure-messaging-web-app)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Contributors](#contributors)

## Features

- **User Authentication and Authorization**
  - Email Verification
  - Limiting Login Attempts
  - Brute Force Attack Prevention
  - JWTokens
  - Form Validation
  - API Rate Limiting

- **Security Measures**
  - Message Encryption
  - Google Recaptcha v3

- **Machine Learning Integration**
  - Real-time Spam Detection

- **Real-Time Communication**
  - Instant Messaging

## Tech Stack

- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma
- **Database**: MongoDB
- **Authentication**: NextAuth
- **Real-Time Communication**: Pusher
- **Machine Learning**: Integrated spam detection model

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (>= 18.x)
- MongoDB
- Pusher account for real-time communication

### Installation

1. **Clone the repo**
   ```sh
   git clone https://github.com/stephan-rz/Secure-messaging-app.git
   cd Secure-messaging-app
   ```

2. **Install dependencies**
   ```bash
   npm install
    ```

3. **Set up environment variables**
   
   Create a .env file in the root directory and add the following:

   ```bash
   DATABASE_URL="mongodb+srv://<username>:<password>@cluster0.mongodb.net/secure-messaging-app"

   NEXTAUTH_SECRET="<your_nextauth_secret>"
   AUTH_TRUST_HOST=true
   AUTH_URL="http://localhost:3000"

   NEXT_PUBLIC_PUSHER_APP_KEY="<your_pusher_app_key>"
   PUSHER_APP_ID="<your_pusher_app_id>"
   PUSHER_SECRET="<your_pusher_secret>"

   GITHUB_CLIENT_ID="<your_github_client_id>"
   GITHUB_CLIENT_SECRET="<your_github_client_secret>"

   NEXT_PUBLIC_SITE_URL="http://localhost:3000"

   GOOGLE_CLIENT_ID="<your_google_client_id>"
   GOOGLE_CLIENT_SECRET="<your_google_client_secret>"

   RESEND_API_KEY="<your_resend_api_key>"

   UPSTASH_REDIS_REST_URL="<your_upstash_redis_rest_url>"
   UPSTASH_REDIS_REST_TOKEN="<your_upstash_redis_rest_token>"

   ENCRYPTION_SECRET_KEY="<your_encryption_secret_key>"

   NEXT_PUBLIC_RECAPTCHA_KEY="<your_recaptcha_key>"
   RECAPTCHA_SECRET_KEY="<your_recaptcha_secret_key>"

   ML_MODEL_URL="http://localhost:3005"

    ```

4. **Run prisma generate** 
    ```bash
    npx prisma generate
    ```

5. **Build the web app and run** 
    ```bash
    npm run build 
    npm start
    ```

6. **Open your browser** 
   
    Visit http://localhost:3000 to see the app in action.


## Usage

Once the application is up and running, you can register as a new user, verify your email, and start sending secure messages in real-time. The application provides various security features to protect your data and ensure a smooth communication experience.

## Contributors

- **Student Name - D.S.C. Wijesuriya | Reg Number -  IT21155802**
- **Student Name - W.N. Dilsara | Reg Number -  IT21182600**

<a href="https://github.com/stephan-rz/Secure-messaging-app/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=stephan-rz/Secure-messaging-app" />
</a>
