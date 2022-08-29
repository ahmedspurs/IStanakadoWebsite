import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './style/index.css';
import './style/style.css';
import 'flowbite';


// Import loading stuff
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

// Import sweet alert stuff
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

createApp(App)
	.use(store)
	.use(router)
	.use(VueLoading)
	.use(VueSweetalert2)
	.mount('#app');
