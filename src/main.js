import Vue from 'vue';
// import Counter from './Counter.vue';
// import AppForm from './Form.vue';
import Repeater from './Repeater.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Repeater),
}).$mount('#app');
