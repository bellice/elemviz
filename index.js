"use strict";





let app1 = new Vue({
    el: "#app-1",
    data: {
      message: "Hello Vue.js!"
    }
  })

  app1.message="J'ai changé le message";

  let app2 = new Vue({
    el:"#app-2",
    data: {
      message: `La page a été chargée : ${new Date().toLocaleString()}` 
    }
  })


  let app3 = new Vue({
    el:"#app-3",
    data:{
      seen:true
    }

  })


  let app4 = new Vue({
    el: "#app-4",
    data:{
      todos:[
      {text: "Apprendre Javascript"},
      {text: "Apprendre Vue"},
      {text: "Créer quelque chose de génial"}
    ]
    }
  })


  let app5 = new Vue({
    el: "#app-5",
    data: {
      message:"Hello Vue.js!"
    },
    methods:{
      reverseMessage: function(){
        this.message=this.message.split("").reverse().join("")
      }
    }
  
  })

  let app6 = new Vue({
    el: "#app-6",
    data: {
      message: "Hello Vue !"
    }
  })




  Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })

  let app7 = new Vue({
    el:"#app-7",
    data:{
      groceryList: [
        { id: 0, text: 'Légumes' },
        { id: 1, text: 'Fromage' },
        { id: 2, text: 'Tout ce que les humains sont supposés manger' }
      ]
    }
  })



  let app8 = new Vue({
    el:"#app-8",
    data: {
      message: "Bonjour"
    },
    computed:{
      reversedMessage: function(){
        return this.message.split("").reverse().join("")
      }
    }
  })


  