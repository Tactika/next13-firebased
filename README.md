# NEXT 13 App with Firestore & Auth (TypeScript)

## Pre-Requisites

- Create a Firebase App on Google [here](https://console.firebase.google.com/)
  - Add 'Web App' to your Firebase App
  - Add Authentication and Cloud Firestore
    - Within Authentication use the 'Email/Password' Authentication.

- Create a ```.env``` file in the base of your app and add the following after creating your app on Google Firebase

  ```js
  NEXT_PUBLIC_FIREBASE_API_KEY={your-api-key}
  NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN={your-auth-domain}
  NEXT_PUBLIC_FIREBASE_PROJECT_ID={your-project-id}
  NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET={your-storage-bucket}
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID={your-messaging-sender-id}
  NEXT_PUBLIC_FIREBASE_APP_ID=1:975253631495:web:{your-app-id}
  NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID={your-measurement-id}
  ```
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Available Pages

> Web Routes

```bash
    /       # Home/Index Page
    /signin # Sign-In Page
    /signup # Sign-Up Page
    /admin  # Admin Page *Sign-In Required to Access*
```

> Api Routes

```bash
    /api/hello  # Built in Hello World Api Path
```
