var firebaseConfig = {
  apiKey: "AIzaSyCwe9y47T8u2BLNm63kXp8q9a3rk40zfZU",
  authDomain: "onlicery-2335d.firebaseapp.com",
  databaseURL: "https://onlicery-2335d.firebaseio.com",
  projectId: "onlicery-2335d",
  storageBucket: "onlicery-2335d.appspot.com",
  messagingSenderId: "410290512531",
  appId: "1:410290512531:web:a8788a0e5092d2d3b7a366"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function signUp() {
  debugger;
  var_FirstName = document.getElementById("Fname");
  var_LastName = document.getElementById("Lname");
  var_email = document.getElementById("email");
  var_password = document.getElementById("password");
  var_phone = document.getElementById("phone");
  var_city = document.getElementById("city");
  var_state = document.getElementById("state");
  var_PostalCode = document.getElementById("code");
  var_address = document.getElementById("address");
  firebase.database().ref("Customers").set({
    FirstName: _FirstName.value,
    LastName: _LastName.value,
    email: _email.value,
    password: _password.value,
    phone: _phone.value,
    city: _city.value,
    state: _state.value,
    PostalCode: _PostalCode.value,
    address: _address.value
  });
  const auth = firebase.auth();
  const promise = auth.createCustomersWithEmailAndPassword(_FirstName.value, _LastName.value, _email.value,
    _password.value, _phone.value, _city.value, _state.value, _PostalCode.value, _address.value);
  promise.catch(e => alert(e.message));
  alert("Registered Successfully");
} 