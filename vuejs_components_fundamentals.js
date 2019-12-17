//#1 Introduction to components
Vue.component("click-counter1",{
    template: '<button @click="count++">{{count}}</button>',
    data(){
        return{
            count:0
        }
    }
})

new Vue({
    el: "#app1"
})



//#2 Components template
Vue.component("click-counter2",{
    template: "#click-counter-template",
    data(){
        return{
            count:0
        }
    }
})

new Vue({
    el: "#app2"
})




//#3 Reusable components with props
Vue.component("plan",{
    template: "#plan-template",
    props: {
        name:{
            type: String, 
            required: true
        },
    }
})

new Vue({
    el: "#app3",
    data: {
        plans:["Le testeur", "L'usurpateur", "Le clairvoyant", "Le druide"]
    }
})



//#4 Nested components
Vue.component("plan",{
    template: "#plan-template",
    props: {
        name:{
            type: String, 
            required: true
        },
    }
})

new Vue({
    el: "#app4",
    data: {
        plans:["Le testeur", "L'usurpateur", "Le clairvoyant", "Le druide"]
    }
})