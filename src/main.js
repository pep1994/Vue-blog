import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import router from './routes';

Vue.use(VueResource);
Vue.config.productionTip = false

Vue.directive('rainbow', {
  bind(el, binding, vnode) {
    console.log(vnode)
    console.log(binding)
    el.style.color = "#" + Math.random().toString().slice(2, 8);
  }
});

Vue.filter('to-uppercase', function(val) {
  return val.toUpperCase();
});

Vue.filter('slice', function(val) {
  return val.slice(0, 100) + '...';
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
