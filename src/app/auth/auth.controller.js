(function() {
  'use strict';
  
  angular
    .module('app.auth')
    .controller('AuthController', AuthController);
  
  AuthController.$inject = ['$location', '$firebaseAuth', 'FIREBASE_URL']; // list in order: Angular, 3rd party, customer services
  
  function AuthController($location, $firebaseAuth, FIREBASE_URL) { // positional -- must match services array above
    var vm = this;
    var firebaseReference = new Firebase(FIREBASE_URL);
    var firebaseAuthObject = $firebaseAuth(firebaseReference);
    
    vm.user = {
      email: '',
      password: ''
    };
    
    vm.register = register;
    vm.login = login;
    vm.logout = logout;
    
    function register(user) {
      return firebaseAuthObject.$createUser(user)
        .then(function() {
          vm.login(user);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
    
    function login(user) {
      return firebaseAuthObject.$authWithPassword(user)
        .then(function(loggedInUser) {
          console.log(loggedInUser);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
    
    function logout() {
      firebaseAuthObject.$unauth();
      // Redirect to landing page.
      $location.path('/'); //$location is a built in Anuglar  service
    }
  }
  
})();