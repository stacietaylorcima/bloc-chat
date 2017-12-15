(function() {
  function BlocChatCookies($cookies){
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === ''){
      // use a bootstrap pop up to collect and store a username
    }
};

  angular
    .module ('blocChat')
    .run(['$cookies', BlocChatCookies]);

})();
