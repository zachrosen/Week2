namespace app {
  angular .module('app').config((
    $stateProvider: ng.ui.IStateProvider
  ) => {
    $stateProvider.state('Home Page', {
      url: '/',
      templateUrl: '/components/home/home.html',
      controller: 'HomeController as vm'
    });
  });
}
