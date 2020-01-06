
let firstVue = new Vue({
    el: '#row', 
    data: {
        name: 'world',
        isOk: true,
        url: 'http://google.com',
        html: '<a href="#">silka</a>',
        count: 0,
        inpuptValue: 'input value',
        isActive: true,
        people: [
            'misha',
            'masha',
            'dima'
        ]
    },
    methods: {
        seyHello(){
            return 'hello Vue'
        },
        riseCounter(num, event){
            this.count += num
            event.target.style.background = 'red'

            this.$refs.heading.style.color = 'blue'
        },
        onHover(event){
            event.target.style.color = 'red'
        },
        outHover(event){
            event.target.style.color = 'black'
        },
        enter(event){
            //if( event.keyCode === 13 ) alert( event.target.value )
            alert( event.target.value )
        }
    },
    watch: {
        count(){
            console.log( this.count )
        }
    }
})

new Vue({
    el: '#row2',
    data: {
        title: 'title 2'
    },
    methods: {
        click(){
            firstVue.name = 'this id fail'
        }
    }
})

new Vue({
    el: '#row3',
    template: '<h1>Hello</h1>'
})





//v-bind: = :
//v-on: = @