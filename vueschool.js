let shoppingList = new Vue({
    el : "#shopping-list",
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
