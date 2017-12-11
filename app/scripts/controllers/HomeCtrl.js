// Create a HomeCtrl controller and associate it with the home template in a $state in app.js
(function(){
  // Inject the Room service so that you can assign the array of objects retrieved by the all method to a $scope variable.
  // Need to inject Message service so that I can access getByRoomId fucntion. When I inject Message here and below in angular.controller, it breaks my app. 
  function HomeCtrl(Room){
    var home = this;
    home.room = Room.all;
    home.currentRoom = null;
    // home.messages = null; Need to set the inital value of home.messages to null so that nothing shows up when no room is selected.

    home.setCurrentRoom = function (room) {
      home.currentRoom = room;
      // home.messages = messages; Need to query the messages associated with roomID during the setCurrentRoom function so that when I ng-click on the room, the room name AND the message details appear.
    }
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', HomeCtrl]);
})()
