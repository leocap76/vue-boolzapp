//  Milestone 1
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi)
// e dall’interlocutore (bianco) assegnando due classi CSS diverse
// Visualizzazione dinamica della lista contatti: tramite la direttiva v-for,
// visualizzare nome e immagine di ogni contatto
//
//  Milestone 2
// Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// Click sul contatto mostra la conversazione del contatto cliccato
//
//
// Consigli utili:
// Si possono trascurare le scrollbar verticali, sia nel pannello
// dei messaggi, che nella lista dei contatti
// I pulsanti e le icone possono non funzionare (a parte l’invio
//    del messaggio)
// Per gestire le date, può essere utile la libreria day.js
// La struttura dell’array dei contatti potrebbe avere questa forma:
var app = new Vue({

    el: '#root',
    data: {
      contacts: [
      	{
      		name: 'Marco Collalti',
      		avatar: 'Marco',
      		visible: true,
      		messages: [
      			{
      				date: '10/01/2020 15:30:55',
      				text: 'Hai portato a spasso il cane?',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 15:50:00',
      				text: 'Ricordati di dargli da mangiare',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 16:15:22',
      				text: 'Tutto fatto!',
      				status: 'received'
      			}
      		],
      	},
      	{
      		name: 'Alice De Angelis',
      		avatar: 'Alice',
      		visible: true,
          messages: [
      			{
      				date: '20/03/2020 16:30:00',
      				text: 'Ciao come stai?',
      				status: 'sent'
      			},
      			{
      				date: '20/03/2020 16:30:55',
      				text: 'Bene grazie! Stasera ci vediamo?',
      				status: 'received'
      			},
      			{
      				date: '20/03/2020 16:35:00',
      				text: 'Mi piacerebbe ma devo andare a fare la spesa.',
      				status: 'sent'
      			}
      		],
      	},
      	{
      		name: 'Emanuele Izzi',
      		avatar: 'Emanuele',
      		visible: true,
      		messages: [
      			{
      				date: '28/03/2020 10:10:40',
      				text: 'La Marianna va in campagna',
      				status: 'received'
      			},
      			{
      				date: '28/03/2020 10:20:10',
      				text: 'Sicuro di non aver sbagliato chat?',
      				status: 'sent'
      			},
      			{
      				date: '28/03/2020 16:15:22',
      				text: 'Ah scusa!',
      				status: 'received'
      			}
      		],
      	},
      	{
      		name: 'Massimo Favale',
      		avatar: 'Massimo',
      		visible: true,
      		messages: [
      			{
      				date: '10/01/2020 15:30:55',
      				text: 'Lo sai che ha aperto una nuova pizzeria?',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 15:50:00',
      				text: 'Si, ma preferirei andare al cinema',
      				status: 'received'
      			}
      		],
      	},
      ],
      activeContactIndex: 0,

      newMessage: '',

    },


    methods:{
      setActiveContactIndex: function() {
        this.activeContactIndex = newIndex;
      },
      addNewMessage: function() {
        var newObj = {
          date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
          text: this.newMessage,
          status: 'sent'
        };
        this.contacts[this.activeContactIndex].messages.push(newObj);
        this.newMessage = '';
      }
    }
});
