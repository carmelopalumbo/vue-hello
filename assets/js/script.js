// vue

//inizializzo l'app
const { createApp } = Vue;

createApp({

    //contenuto dell'app
    data(){
        return{
            message: 'Benvenuto Vue!',
            myClass: 'title_class',
            image: '/assets/img/vuejs-wide.png',
            logo: 'logo_style'
        }
    },

    //metodi dell'app
    methods: {
        showInfo(){
            this.image = '';
        },

        showLogo(){
            this.image = '/assets/img/vuejs-wide.png';
        }
    }
}).mount('#app')