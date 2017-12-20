(function(){
  function NewMessage(){
// write code here that will accept the user's message and send it to the function in Message.js
console.log("you've reached the NewMessageCtrl - hi!")
  }
  angular
    .module('blocChat')
    .controller('NewMessage', [NewMessage]);
})();
