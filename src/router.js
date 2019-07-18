import Vue from 'vue'
import Router from 'vue-router'
import Form from './components/Form.vue'
import uiConfig from '../ui'

Vue.use(Router)
console.dir(uiConfig)

export default new Router({
  routes: [{
    path: '/',
    name: 'patient',
    component: Form,
    props: uiConfig.forms.patient
  }, {
    path: '/patient',
    name: 'patient',
    component: Form,
    props: uiConfig.forms.patient
  }, {
    path: '/subscriber',
    name: 'subscriber',
    component: Form,
    props: uiConfig.forms.subscriber
  }, {
    path: '/procedure',
    name: 'procedure',
    component: Form,
    props: uiConfig.forms.procedure
  }]
})
