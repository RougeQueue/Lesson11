import { createApp } from 'vue';
import App from './App.vue';
import VueRouter from "./router/index";

import "bootstrap/dist/css/bootstrap.min.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCboyZfjiV34aIilUzKPFARus60F6sRotM",

  authDomain: "vite-project-a5aad.firebaseapp.com",

  projectId: "vite-project-a5aad",

  storageBucket: "vite-project-a5aad.appspot.com",

  messagingSenderId: "771133858168",

  appId: "1:771133858168:web:7cb6e56ce159e85128688d"

};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

createApp(App).use(VueRouter).mount("#app");
