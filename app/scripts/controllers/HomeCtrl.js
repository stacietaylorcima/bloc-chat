// Create a HomeCtrl controller and associate it with the home template in a $state in app.js


(function(){
  // Inject the Room service so that you can assign the array of objects retrieved by the all method to a $scope variable.
  function HomeCtrl('Room'){
    this.chatrooms = Room.all;
    // $scope.chatrooms = Room.all; Maybe this is how you do a scope vaiable instead of above. 

  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
