const firebaseConfig = {
    apiKey: "AIzaSyBYiDut0bOiCXdu73RG6hlqyant2HVT6zI",
    authDomain: "fir-73078.firebaseapp.com",
    databaseURL: "https://fir-73078-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fir-73078",
    storageBucket: "fir-73078.appspot.com",
    messagingSenderId: "533536071702",
    appId: "1:533536071702:web:fc733d278310610661d537"
  };
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var gender = getElementVal("gender");
    var phonenumber = getElementVal("phonenumber");
    var emailid = getElementVal("emailid");
  
    saveMessages(name, gender, phonenumber, emailid);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, gender, phonenumber, emailid,) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      gender:gender,
      phonenumber:phonenumber,
      emailid: emailid
      
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };