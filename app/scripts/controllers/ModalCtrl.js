(function() {
  // This controller (ModalCtrl) listens for instructions from the 'New Chatroom' button in the home.html template.
  // Once the user clicks to open the modal from the view, this controller reaches out to the $uibModal service and calls the open() method, passing optional values to it in a JS object.
  function ModalCtrl($uibModal) {
    this.open = function() {

      // modalInstance uses the $uibModal service to open the modal and links the modal.html template to the ModalInstanceCtrl
      // Note from Carrie: in the future, we'll need to do something with this modalInstance variable in the ModalCtrl, but for now, we won't be doing anything with it.
      function ModalCtrl($uibModal, Room) {
        this.open = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalInstanceCtrl as modalInstance'
            })
            console.log('modal opened')

            modalInstance.result.then(function(chatroom) {
                Room.createNewRoom(room)
                console.log(Room.all)
            })
        }
    }

  angular
      .module('angularModals')
      .controller('ModalCtrl', ['$uibModal', ModalCtrl])
})()
