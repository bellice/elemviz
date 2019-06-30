"use strict";





let app = new Vue({
    el: "#app",
    data: {
      message: "Hello Vue.js!"
    }
  })

  app.message="J'ai changé le message";

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
