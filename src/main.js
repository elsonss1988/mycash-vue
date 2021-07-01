import moment from 'moment'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


const app= createApp(App)
app.config.globalProperties.$filters={
    currency(value){
        const formatter = new Intl.NumberFormat('pt-BR',{
            style:'currency',
            currency:'BRL',
            minimumIntegerDigits:2
        }) 
        return formatter.format(value);
    },
    //https://momentjs.com/
    date(value){
        return moment(value).format('DD/MM/yyyy')
    }
}

app.use(store).use(router).mount('#app')
