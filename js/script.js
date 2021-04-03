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

  el: "#app",
  data: {

    activeIndex: 0,
    deleteIndex: 0,
    deleteChat: 0,
    filter: "",
    visibleEmoji: false,
    visibleMessage: true,
    visible:false,
    visibleDeleteBox: false,
    nameArray: [],
    newMessage: "",
    activeChat: {},
    activeChatIndex: 0,
    contacts: [
	
	{
		name: 'Emanuele',
		avatar: 'img/Emanuelee.png',
		visible: true,
		messages: [
			{
				date: '27/01/2021 09:15:34',
				text: 'Emanuele ma sabato abbiamo allenamenti?',
				status: 'sent'
			},
			{
				date: '27/01/2021 09:15:34',
				text: 'penso questo finesettimana salta',
				status: 'received'
			}
		],
	},
	{
		name: 'Massimo',
		avatar: 'img/Massimo.png',
		visible: true,
		messages: [
			{
				date: '27/01/2021 09:15:34',
				text: 'Massi ma dove stai?',
				status: 'sent'
			},
			{
				date: '27/01/2021 09:15:34',
				text: 'Sto in ritardo arrivo!!',
				status: 'received'
			},
			{
				date: '27/01/2021 09:15:35',
				text: 'come sempre',
				status: 'sent'
			}
		],
	},
	{
		name: 'Marco',
		avatar: 'img/Marco.png',
		visible: true,
		messages: [
			{
				date: '27/01/2021 09:15:34',
				text: 'Ciao Marioo',
				status: 'sent'
			},
			{
				date: '27/01/2021 09:15:38',
				text: 'Guarda che sono Marco, mi sa ti sei sbagliato!',
				status: 'received'
			},

		],
	},
  {
		name: 'Alice',
		avatar: 'img/Alice.png',
		visible: true,
		messages: [
			{
				date: '27/01/2021 09:15:34',
				text: 'Oi ma oggi facciamo qualcosa?',
				status: 'sent'
			},
			{
				date: '27/01/2021 09:15:36',
				text: 'Si, prima devo studiare però',
				status: 'received'
			},

		],
	},

],
    icons : [
  {
    name: "fas fa-smile",
    color: "grey"
  },
  {
    name: "fas fa-smile",
    color: "brown"
	},
	{
    name: "fas fa-smile",
    color: "grey"
	},
	{
    name: "fas fa-smile",
    color: "grey"
  },
]

  },
  // created: this.activeChat = "",
  methods: {
    showActiveChat: function(index) {
      this.activeChat = this.contacts[index];
      this.activeIndex = index
    },
    answerOk: function () {
      var receivedObj = {
        date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
        text: "ciaoo",
        status: "received"
      };

       this.activeChat.messages.push(receivedObj);


    },
    sentNewMessage: function() {
      var newObj = {
        date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
        text: this.newMessage,
        status: "sent"
      };


      this.activeChat.messages.push(newObj);
      this.newMessage = "";


      setTimeout(this.answerOk, 1000);
    },
    openEmoji: function() {

      if(this.visibleEmoji == false) {
        this.visibleEmoji = true
      } else{
        this.visibleEmoji = false
      };

    },
    filtterName: function () {

      for (var i = 0; i < this.contacts.length; i++) {
        if(this.filter == "") {
          this.contacts[i].visible = true
        } else if (this.contacts[i].name.toLowerCase().includes(this.filter.toLowerCase()) ) {
          this.contacts[i].visible = true
      } else {
          this.contacts[i].visible = false
      }


    }
  },
  showDeleteBox: function(index) {


    this.deleteIndex = index;
    this.visibleDeleteBox = true;


  },
  deleteMesssage: function(index) {
    this.visibleDeleteBox = false;
    this.deleteChat = index;

    delete this.contacts[this.activeChatIndex].messages[0]
    console.log(this.deleteIndex);
    console.log(index);
    console.log(this.contacts[index]);
    
      if (this.deleteChat == index) {
        this.visibleMessage = false
      } else {
        this.visibleMessage = true
      }


	},
	
  }
});
