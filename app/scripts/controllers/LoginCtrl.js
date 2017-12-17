(function(){
  function LoginCtrl($uibModal, $uibModalInstance, $cookies) {
    this.ok = function(username) {
      $uibModalInstance.close(this.login);
      console.log(username);
    }
  };

  angular
    .module('blocChat')
    .controller('LoginCtrl', ['$uibModal', '$uibModalInstance', LoginCtrl])
})();
