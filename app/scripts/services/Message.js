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

    Message.send = function(newMessage) {
      // this method takes a message object as an argument and submits it to the Firebase server
      // this method also associates the messaage with the current user's username (inputs current username in the username property of the database message object) by injecting the $cookies service and referencing the user object
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
