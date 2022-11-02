// vue

//inizializzo l'app
const { createApp } = Vue;

createApp({

    //contenuto dell'app
    data(){
        return{
            message: 'Benvenuto Vue!',
            color: 'red'
        }
    },

    //metodi dell'app
    methods: {

    }
}).mount('#app')