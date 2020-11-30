Vue.component('greeting',{
    props: ['greeting'],
    template: `<h3>{{ greeting }}</h3>`,
    data(){
        return {
            // greeting: 'Saludos desde un componente de Vue.js'
        }
    }
});