import Vue from 'vue/dist/vue.min.js';
import App from './App';
import axios from 'axios';

axios.get('/api/v2/posts');

window.onload = function () {
  new Vue({
    template: '<App></App>',
    components: {
      App
    },
  }).$mount('#app');
}