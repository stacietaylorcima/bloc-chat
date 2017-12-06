(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

// The Room service method add should take a room object as an argument.
// This room object will need to be created outside of this service.
// Where could you create the room object? What are the pros and cons of where you create that object?
    Room.add = function(room){
      var roomList = $firebaseArray(ref);
      roomList.$add({ foo: "bar" }).then(function(ref) {
          var id = ref.key;
          console.log("added record with id " + id);
          list.$indexFor(id); // returns location in the array
        });
    }

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
