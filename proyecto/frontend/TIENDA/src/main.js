import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//Comienza Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeL4heOrha9HOgnztO-8n9fnMwyGRER0E",
  authDomain: "programacionweb-6384d.firebaseapp.com",
  projectId: "programacionweb-6384d",
  storageBucket: "programacionweb-6384d.appspot.com",
  messagingSenderId: "342212235993",
  appId: "1:342212235993:web:68a3438cfbc6954a83a4c8"
};

// Initialize Firebase
initializeApp(firebaseConfig);
//Termina Firebase

const app = createApp(App)

app.use(router)

app.mount('#app')
