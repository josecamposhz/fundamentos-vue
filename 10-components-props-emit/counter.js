Vue.component('counter', {
    template: `
    <div>
        <h3>{{ number }}</h3>
        <button class="btn btn-info" @click="setNumber(number - 1)">-</button>
        <button class="btn btn-info" @click="setNumber(number + 1)">+</button>
    </div>
    `,
    props: {
        number: Number
    },
    methods: {
        setNumber(newNumber) {
            // this.number = this.number + 1;
            this.$emit('counter', newNumber);
        }
    },
});