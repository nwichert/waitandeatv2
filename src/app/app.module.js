(function() {
  'use strict';
  
    angular
      .module('app', [
      //Angular modules.
      'ngRoute',

      //Third Pary modules.
      'firebase',

      //Custom modules.
      'app.auth',
      'app.landing',
      'app.waitList'
    ]);
  
})();
