# Simple Expenses Tracking website

# How to build this for yourself :

# Firebase Side
1. Create a Firebase Project
2. Go to https://console.firebase.google.com
3. Click “Add project” → name it “Expense Tracker”
4. Once created, click “Web” (</>) to add a web app.
5. Register the app → you’ll get a config snippet like this:
   const firebaseConfig = {
    apiKey: "AIzaSyA....",
    authDomain: "expense-tracker.firebaseapp.com",
    projectId: "expense-tracker",
    storageBucket: "expense-tracker.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abcdef123456"
  };


# Project Folder 

Run this command 
  npm install firebase

Open firebase.js file in src folder and remove and paste this part with the details given by firebase

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MSG_SENDER_ID",
  appId: "YOUR_APP_ID",
};

# Building the React App

In the project folder, run
  npm run build



# Firebase Hosting

Creating a database :
1. Go to your Firebase console
2. Click "Build" → “Firestore Database” → “Create database”
3. Choose Start in test mode → click Enable
(we’ll secure it later)
This creates a Firestore database where all expenses will be stored.

# Installing Firebase CLI
Run
  npm install -g firebase-tools

Run
  firebase login

Inside Project Folder :
Run,
  firebase init


Select features → Use arrow keys and select “Hosting: Configure files for Firebase Hosting” → press Space → Enter

Select existing project → choose your Firebase project (the one you already created)

What do you want to use as your public directory? → build

Configure as a single-page app (rewrite all URLs to /index.html)? → y

Set up automatic builds/deploys with GitHub? →  n

Firebase will create a few config files (like firebase.json).

# Deploy your app
  firebase deploy

After a few seconds, you’ll get an output like:

  Project Console: https://console.firebase.google.com/project/your-project-id/overview
  Hosting URL: https://your-project-id.web.app

# If you make any code changes:

  npm run build
  firebase deploy

That’s it — it updates the hosted version.
