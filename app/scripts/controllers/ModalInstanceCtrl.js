(function() {
  // The ModalInstanceCtrl controller listens for instructions from within the opened modal.
  // When the 'Cancel' button is clicked inside the open modal (modal.html), this.cancel() is called and uses the $uibModal service which dismisses the modal.
  function ModalInstanceCtrl($uibModalInstance) {
    // This function uses the uibModalInstance.dismiss to cancel the modal.
    this.cancel = function() {
      $uibModalInstance.dismiss('dismiss')
    }
    // This function uses the uibModalInstance.close to submit the new information (the parameter is this.chatrooms = Room.all on HomeCtrl) and close the modal.
    // this.create = function() {
    //         $uibModalInstance.close(this.chatroom)
    // }
  }

  angular
    .module('blocChat')
    .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl])
})()
