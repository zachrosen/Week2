namespace app {
  angular.module('app', ['ui.router'])
  .config((
    $urlRouterProvider: ng.ui.IUrlRouterProvider,
    $locationProvider: ng.ILocationProvider
  ) => {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  });
}
