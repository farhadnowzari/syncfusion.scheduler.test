import Vue from 'vue'
import App from './App.vue'
import { SchedulePlugin } from '@syncfusion/ej2-vue-schedule';

Vue.use(SchedulePlugin);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
