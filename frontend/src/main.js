import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import animateOnScroll from './directives/animateOnScroll'; // tambahkan ini
 
const app = createApp(App);
app.directive('animate-on-scroll', animateOnScroll); // tambahkan ini
app.use(router);
app.mount('#app');
