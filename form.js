
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCHgrCBq8jAhJ__vMIkPvJyiS2tx4aq2nQ",
    authDomain: "settle4u-a7d08.firebaseapp.com",
    projectId: "settle4u-a7d08",
    storageBucket: "settle4u-a7d08.appspot.com",
    messagingSenderId: "683376569265",
    appId: "1:683376569265:web:7a43f319d2e016db46ab90",
    measurementId: "G-YGNVGXQ7K5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  