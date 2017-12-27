(function(){
  function SignUpCtrl($firebaseAuth, AuthenticateUsers){
  }

  angular
    .module('blocChat')
    .controller('SignUpCtrl', '$firebaseAuth', 'AuthenticateUsers', [SignUpCtrl])
})();
