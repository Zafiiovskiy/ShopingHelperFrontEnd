import Vue from 'vue';
import App from './App.vue';

import Vuelidate from 'vuelidate';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from './router'

Vue.use(Vuelidate);
Vue.use(BootstrapVue);
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')