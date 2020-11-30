Vue.component('counter', {
    template: `
    <div>
        <h3>{{ number }}</h3>
        <button class="btn btn-info" @click="number--">-</button>
        <button class="btn btn-info" @click="number++">+</button>
    </div>
    `,
    data(){
        return {
            number: 0
        }
    }
});