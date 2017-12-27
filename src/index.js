import Vue from 'vue/dist/vue.min.js';
import App from './App';

window.onload = function () {
  new Vue({
    template: '<App></App>',
    components: {
      App
    },
  }).$mount('#app');
}