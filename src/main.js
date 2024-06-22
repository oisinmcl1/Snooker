// src/main.js

import { createApp } from 'vue';
import App from './App.vue';
import { db, auth, storage } from './firebase'; // Import firebase configuration

// eslint-disable-next-line no-unused-vars
console.log(db, auth, storage);

const app = createApp(App);

app.mount('#app');
