var app = new Vue({
    el: '#root',
    data: {
        color: '',
        setup: '',
        punchline: '',
        visible: true,
    },
    methods: {
        changeColor() {
            this.genQuote()
            this.color = randomColor()
        },
        genQuote() {
            axios.get('https://official-joke-api.appspot.com/jokes/programming/random').then(response => {
                this.setup = response.data[0].setup
                this.punchline = response.data[0].punchline;
            })
        },
        switchJoke() {
            this.visible = !this.visible;
        }
    },
    created() {
        this.changeColor(),
        this.genQuote()
    }
})