const clockComponent = {
    name: 'clockComponent',
    template: '#html-clock',
    props: {
        theme: {
            dafault: 'red-lcd'
        }
    },
    data() {
        return {
            hours: '--',
            min: '--',
            sec: '--',
        }
    },
    mounted() {
        this.timer = setInterval(this.tick, 1000);
    },
    methods: {
        tick() {
            this.hours = new Date().getHours().toString().padStart(2, '0');
            this.min = new Date().getMinutes().toString().padStart(2, '0');
            this.sec = new Date().getSeconds().toString().padStart(2, '0');
        }
    }
}
Vue.component('html-clock', clockComponent);
const app = new Vue({
    el: '#app',
});