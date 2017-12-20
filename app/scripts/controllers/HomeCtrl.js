// Create a HomeCtrl controller and associate it with the home template in a $state in app.js
(function(){
  // Inject the Room service so that you can assign the array of objects retrieved by the all method to a $scope variable.
  function HomeCtrl(Room, Message){
    var home = this;
    home.room = Room.all;
    home.currentRoom = null;

    home.setCurrentRoom = function (room) {
      home.currentRoom = room;
      // Need to query the messages associated with roomID during the setCurrentRoom function so that when I ng-click on the room, the room name AND the message details appear.
      home.messages = Message.getByRoomId(home.currentRoom.$id);
    }

    home.sendMessage = function(myMessage){
      // write code here that will accept the user's message and send it to the function in Message.js
      Message.send(this.myMessage);
    }
};

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
})();
