// Create a HomeCtrl controller and associate it with the home template in a $state in app.js
(function(){
  // Inject the Room service so that you can assign the array of objects retrieved by the all method to a $scope variable.
  function HomeCtrl(Room){
    var home = this;
    home.room = Room.all;
    home.currentRoom = null;

    home.setCurrentRoom = function (room) {
      home.currentRoom = room;
      console.log(home.currentRoom.$value);
    }
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', HomeCtrl]);
})()
