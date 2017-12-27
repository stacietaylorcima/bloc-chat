(function(){
  function  AuthenticateUsers($firebaseAuth){
    // firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    //   Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    });
  }

  angular
    .module('blocChat')
    .factory('AuthenticateUsers', '$firebaseAuth', [AuthenticateUsers]),
})();
