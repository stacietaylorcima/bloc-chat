(function() {
  function Message($firebaseArray, $cookies) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.all = messages;

    Message.getByRoomId = function(roomId) {
      // Filter the messages by their room ID so that HomeCtrl can display all of  a room's messages on the home.html using ng-repeat.
      return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    };

    // this method takes a message object as an argument and submits it to the Firebase server
    // this method also associates the messaage with the current user's username (inputs current username in the username property of the database message object) by injecting the $cookies service and referencing the user object

    Message.send = function(content, roomId) {
      var newMessageObject = {
        sentAt: Date.now(),
        // Other notes: new Date().toDateString need to reflect a formatted time on view
        username: $cookies.get('blocChatCurrentUser'),
        content: content,
        roomId: roomId
      };
      var messageList = $firebaseArray(ref);
      messageList.$add(newMessageObject);

      console.log(newMessageObject);
  };


    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
