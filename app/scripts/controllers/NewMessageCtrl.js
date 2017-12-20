(function(){
  function NewMessageCtrl(){
    this.ok = function(myMessage){
      // write code here that will accept the user's message and send it to the function in Message.js
      console.log(myMessage);
    }
  };

  angular
    .module('blocChat')
    .controller('NewMessageCtrl', [NewMessageCtrl]);
})();
