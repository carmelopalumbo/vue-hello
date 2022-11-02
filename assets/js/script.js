// vue

//inizializzo l'app
const { createApp } = Vue;

createApp({

    //contenuto dell'app
    data(){
        return{
            message: 'Benvenuto Vue!'
        }
    },

    //metodi dell'app
    methods: {

    }
}).mount('#app')