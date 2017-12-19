(function(){
  function LoginCtrl($uibModal, $uibModalInstance, $cookies) {
    this.ok = function(username) {
      console.log(username);
      $uibModalInstance.close(this.login);
      // write and store the username in a cookie here. I think in this controller is where we will put the write cookie function, then we put the $cookieStore service in BlocChatCookies.js and call it from here? That's just based on an article I read.
    }
  };

  angular
    .module('blocChat')
    .controller('LoginCtrl', ['$uibModal', '$uibModalInstance', LoginCtrl])
})();
