(function() {
  // This controller (ModalCtrl) listens for instructions from the 'New Chatroom' button in the home.html template.
  // Once the user clicks to open the modal from the view, this controller reaches out to the $uibModal service and calls the open() method, passing optional values to it in a JS object.

  // modalInstance uses the $uibModal service to open the modal and links the modal.html template to the ModalInstanceCtrl
  function ModalCtrl($uibModal, Room) {
    this.open = function() {
      var modalInstance = $uibModal.open({
        templateUrl: '/templates/modal.html',
        controller: 'ModalInstanceCtrl as modalInstance'
      })

      console.log('modal opened')
// Notes about promise handler: modalInstance is waiting for user to submit an event (result - promise object) then (promise handler) once the result is submitted, execute callback
    modalInstance.result.then(function(room) {
      Room.add(room)
      console.log(room)
      })
    }
  }

  angular
      .module('blocChat')
      .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl])
})()
