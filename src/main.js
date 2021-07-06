import Vue from 'vue'
import App from './App'
import router from './router/router'
Vue.config.productionTip = false

router.beforeEach((to,from,next)=>{
    if(to.meta.title){
        document.title = to.meta.title
    }
    next()
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

