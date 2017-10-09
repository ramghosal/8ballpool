
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBufoTjjlnhdpjUfGY_TRM7pqhE4ZNvir4",
    authDomain: "ballpool-d1979.firebaseapp.com",
    databaseURL: "https://ballpool-d1979.firebaseio.com",
    projectId: "ballpool-d1979",
    storageBucket: "ballpool-d1979.appspot.com",
    messagingSenderId: "116075324547"
  };
  firebase.initializeApp(config);

firebase.database().ref('/interest/-KrFs_izIIw-zjirT_2o').once('value').then(function(snapshot) {
    var tournament_key = snapshot.val().tournament_key;
    console.log(tournament_key);
});