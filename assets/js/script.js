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
            logo: 'logo_style',
            info: 'Vue.js è un framework JavaScript open-source in configurazione Model view viewmodel per la creazione di interfacce utente e single-page applications. È stato creato da Evan You ed è gestito da lui stesso e i membri attivi del core team, provenienti da varie società come Netlify e Netguru.'
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