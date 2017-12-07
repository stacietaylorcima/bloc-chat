(function() {
  // The ModalInstanceCtrl controller listens for instructions from within the opened modal.
  // When the 'Cancel' button is clicked inside the open modal (modal.html), this.cancel() is called and uses the $uibModal service which dismisses the modal.
  function ModalInstanceCtrl($uibModalInstance) {
    this.cancel = function() {
      $uibModalInstance.dismiss('dismiss')
    }
  }

  angular
    .module('angularModals')
    .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl])
})()
