import admin  from 'firebase-admin';
const firebaseConfig = {
  apiKey: "AIzaSyDk-u1hlzlxjyFo29GFOhXXQpPkvl-4xUM",
  authDomain: "new-app-7bb2f.firebaseapp.com",
  projectId: "new-app-7bb2f",
  storageBucket: "new-app-7bb2f.appspot.com",
  messagingSenderId: "435694303601",
  appId: "1:435694303601:web:5867483aab4fc92561ded0",
  measurementId: "G-R1SMH9JDF4"
};

admin.initializeApp(firebaseConfig);
export const db = admin.firestore();
