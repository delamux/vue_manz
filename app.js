const app = new Vue({
    el: '#app',
    data: {
        title: 'VueJS 2!',
        slogan: true,
        users: [{
                id: 1,
                name: 'luis'
            },
            {
                id: 2,
                name: 'adan'
            }, {
                id: 3,
                name: 'noel'
            },
        ],
        number: 0,
    },
    methods: {
        add() {
            this.number++
        },
        less() {
            this.number--
        },
    }
});