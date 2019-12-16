"use strick";

// #1 Vue.js Fundamental
let shoppingList1 = new Vue({
    el: "#shopping-list1",
    data: {
        msg: "Vue est fantastique !"
    }
})

shoppingList1.$data.msg = "Directement depuis la console"


// #2 Vue.js Template Syntax And Expressions 
let shoppingList2 = new Vue({
    el: "#shopping-list2",
    data: {
        msg: "Vue est prêt"
    }
})


// #3 List Rendering
let shoppingList3 = new Vue({
    el: "#shopping-list3",
    data: {
        msg: "Liste des programmes",
        items: [
            "France Services",
            "Territoire d'industrie",
            "Action coeur de ville",
            "France numérique",
            "Petites centralités"
        ]
    }
})

shoppingList3.$data.items.push("Contrats de ruralité");
shoppingList3.$data.items.pop();


// #4 User Inputs & Vue Devtools
let shoppingList4 = new Vue({
    el: "#shopping-list4",
    data: {
        msg: "Liste des programmes",
        newItem: "",
        items: [
            "France Services",
            "Territoire d'industrie",
            "Action coeur de ville",
            "France numérique",
            "Petites centralités"
        ]
    }
})

shoppingList4.$data.newItem = "Contrat de transition écologique"


// #5 User Events
let shoppingList5 = new Vue({
    el: "#shopping-list5",
    data: {
        msg: "Liste des programmes",
        newItem: "",
        items: [
            "France Services",
            "Territoire d'industrie",
            "Action coeur de ville",
            "France numérique",
            "Petites centralités"
        ]
    }
})

console.log(shoppingList5.$data.items)
shoppingList5.$data.newItem = "Nouveau programme"
shoppingList5.$data.items.push(shoppingList5.$data.newItem)

/*
Sur la console avec Vue.js dev.tools

$vm0.items
$vm0.newItem= "Nouveau programme par le dev"
$vm0.items.push("$vm0.newItem")
*/


// #6 Vue Methods
let shoppingList6 = new Vue({
    el: "#shopping-list6",
    data: {
        msg: "Liste des programmes",
        newItem: "",
        items: [
            "France Services",
            "Territoire d'industrie",
            "Action coeur de ville",
            "France numérique",
            "Petites centralités"
        ]
    },
    methods: {
        saveItem: function(){
            this.items.push(this.newItem);
            this.newItem = "";
        }
    }
})

/*
Sur la console avec Vue.js dev.tools

$vm0.saveItem
*/



// #7 Conditional Rendering
let shoppingList7 = new Vue({
    el: "#shopping-list7",
    data: {
        state: "default",
        msg: "Liste des programmes",
        newItem: "",
        items: [
            //"France Services",
            //"Territoire d'industrie",
            //"Action coeur de ville",
            //"France numérique",
            //"Petites centralités"
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
})



// #8 Attribute Bindings
let shoppingList8 = new Vue({
    el: "#shopping-list8",
    data: {
        state: "default",
        msg: "Liste des programmes",
        newItem: "",
        items: [
            "France Services",
            "Territoire d'industrie",
            "Action coeur de ville",
            "France numérique",
            "Petites centralités"
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
})

// #9 Dynamic Classes
let shoppingList9 = new Vue({
    el: "#shopping-list9",
    data: {
        state: "default",
        msg: "Liste des programmes",
        newItem: "",
        items: [
            {
                label: "France Services",
                service: false,
                hightPriority: true,
            },
            {
                label: "Territoire d'industrie",
                service: true,
                hightPriority: false,
            },
            {
                label: "Action coeur de ville",
                service: true,
                hightPriority: false,
            },
            {
                label: "France numérique",
                service: false,
                hightPriority: true,
            },
            {
                label: "Petites centralités",
                service: false,
                hightPriority: false,
            },
        ]
    },
    methods: {
        saveItem: function(){
            this.items.push({
                label: this.newItem,
                service: false,
            },);
            this.newItem = "";
        },
        changeState: function(newState){
            this.state = newState;
            this.newItem = "";
        },
        toggleService: function(item){
            item.service = !item.service;
        }
    }
})




// #10 Computed Properties
let shoppingList10 = new Vue({
    el: "#shopping-list10",
    data: {
        state: "default",
        msg: "Liste des programmes",
        newItem: "",
        items: [
            {
                label: "France Services",
                service: false,
                hightPriority: true,
            },
            {
                label: "Territoire d'industrie",
                service: true,
                hightPriority: false,
            },
            {
                label: "Action coeur de ville",
                service: true,
                hightPriority: false,
            },
            {
                label: "France numérique",
                service: false,
                hightPriority: true,
            },
            {
                label: "Petites centralités",
                service: false,
                hightPriority: false,
            },
        ]
    },
    computed: {
        reversedItems(){
            return this.items.slice(0).reverse();
        }
    },
    methods: {
        saveItem: function(){
            this.items.push({
                label: this.newItem,
                service: false,
            },);
            this.newItem = "";
        },
        changeState: function(newState){
            this.state = newState;
            this.newItem = "";
        },
        toggleService: function(item){
            item.service = !item.service;
        }
    }
})
