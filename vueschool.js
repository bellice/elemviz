// Vue.js Fundamental


let shoppingList1 = new Vue({
    el: "#shopping-list1",
    data: {
        header : "Vue est fantastique!"
    }
})

//  Vue.js Template Syntax And Expressions 

let shoppingList2 = new Vue({
    el : "#shopping-list2",
    data : {
        state : "default",
        header : "Liste de courses".toLocaleUpperCase(),
        newItem : "",
        items : [
            // "2 paquets de pâtes",
            // "3 sauces tomates",
            // "1 bouquet de basilic"
    ]
    }, 
    methods: {
        saveItem: function(){
            this.items.push(this.newItem);
            this.newItem = "";
        },
        changeState: function(newState){
            this.state = newState;
            this.newItem = "";
        }
    }
});
















// {{}}
// v-for
// v-on
