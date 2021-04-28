Vue.component('greeting',{
    props: {
        greeting: {
            type: String,
            default: "Adios"
        }
    },
    template: `<h3>{{ greeting }}</h3>`,
    data(){
        return {
            // greeting: 'Saludos desde un componente de Vue.js'
        }
    }
});