// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ1QyYbWm-KQEPXbv-m8VK8a9crWru9zs",
  authDomain: "goit-react-native-76a90.firebaseapp.com",
  projectId: "goit-react-native-76a90",
  storageBucket: "goit-react-native-76a90.appspot.com",
  messagingSenderId: "773884801386",
  appId: "1:773884801386:web:25adcb8203e8e4bbb0f513",
  measurementId: "G-2PJXXD3LX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);