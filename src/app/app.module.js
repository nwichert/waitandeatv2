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
      'app.core',
      'app.landing',
      'app.waitList'
    ]);
  
})();
