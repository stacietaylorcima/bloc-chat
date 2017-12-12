(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.all = messages;

    Message.getByRoomId = function(roomId) {
      // Filter the messages by their room ID so that HomeCtrl can display all of  a room's messages on the home.html using ng-repeat.
      return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
