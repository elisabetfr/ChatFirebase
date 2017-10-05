var message = document.getElementById('mensaje'),
  send = document.getElementById('send'),
  interface = document.getElementById('pantalla');


  // Initialize Firebase
 var config = {
    apiKey: "AIzaSyBhRD0GyBZlOFM03UefViNzrTUQ63GUfvg",
    authDomain: "miprimerproyecto-679a1.firebaseapp.com",
    databaseURL: "https://miprimerproyecto-679a1.firebaseio.com",
    projectId: "miprimerproyecto-679a1",
    storageBucket: "miprimerproyecto-679a1.appspot.com",
    messagingSenderId: "874708276587"
  };
  firebase.initializeApp(config);

var storageRef;

//firebase.database().ref('mensaje').set("Hello world!");

// Creamos un nuevo registro dentro del array de mensajes

var ref = firebase.database().ref('mensaje')

ref.on('value', function(snapshot){

    snapshot.forEach(function(item){
      item = item.val();
      console.log(item.mensaje);

      var li = document.createElement('li'),
      ulChat = document.getElementById('ulChat');

      li.innerHTML= item.mensaje; //El mensaje le añade contenido al li
      ulChat.appendChild(li); 

    });

});

send.addEventListener("click", function (e) {
  e.preventDefault();

  var newChildRef = ref.push();
  newChildRef.set({mensaje: message.value});

  message.value = "";

  
});