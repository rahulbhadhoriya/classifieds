(function () {

  "use strict";

  angular
    .module('ngClassifieds', ['ngMaterial', 'ui.router'])
    .config(function ($mdThemingProvider, $stateProvider, $urlRouterProvider) {

      $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('orange');

      $urlRouterProvider.otherwise('/classifieds');

      $stateProvider
        .state('classifieds', {
          url: '/classifieds',
          templateUrl: 'app/components/classifieds/classifieds.html',
          controller: 'classifiedsController',
          controllerAs: 'vm'
        })
        .state('classifieds.new', {
          url: '/new',
          templateUrl: 'app/components/classifieds/new/classifieds.new.html',
          controller: 'newClassifiedsController',
          controllerAs: 'vm'

        })
        .state('classifieds.edit', {
          url: '/:id/edit',
          templateUrl: 'app/components/classifieds/edit/classifieds.edit.html',
          controller: 'editClassifiedsController',
          controllerAs: 'vm',
          params: {
            classified: null
          }
        });
    });

})();