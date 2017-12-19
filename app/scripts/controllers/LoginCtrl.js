(function(){
  function LoginCtrl($uibModal, $uibModalInstance, $cookies) {
    this.ok = function(username) {
      console.log(username);
      $uibModalInstance.close(this.login);
      $cookies.put("blocChatCurrentUser", username);
    }
  };

  angular
    .module('blocChat')
    .controller('LoginCtrl', ['$uibModal', '$uibModalInstance', '$cookies', LoginCtrl])
})();
