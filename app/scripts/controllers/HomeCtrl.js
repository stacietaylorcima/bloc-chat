// This controller (HomeCtrl) is associated with the home template (home.html) in a $state in app.js

(function(){
  function HomeCtrl(Room, Message){
    var home = this;
    home.room = Room.all;
    home.currentRoom = null;

    home.setCurrentRoom = function (room) {
      home.currentRoom = room;
      // Query the messages associated with roomID during the setCurrentRoom function so that when the user clicks on the room, the room name AND the message details appear.
      home.messages = Message.getByRoomId(home.currentRoom.$id);
    }

    home.sendMessage = function(content){
      // write code here that will accept the user's message and send it to the function in Message.js
      Message.send(content, home.currentRoom.$id);
    }
};

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
})();
