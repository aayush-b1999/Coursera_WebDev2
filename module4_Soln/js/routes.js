(function () {  
    'use strict';
    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject=['$stateProvider','$urlRouterProvider'];
    function RoutesConfig($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
        .state('home',{
            url: '/',
            templateUrl: 'components/home.html'
        })
        .state('categories',{
            url: '/categories',
            templateUrl: 'components/bigcat.html',
            controller: 'CategoriesController as list',
            resolve: {
                items:['MenuDataService',function (MenuDataService) {  
                    return MenuDataService.getAllCategories().then(function (items) {  
                        // console.log(items.data);
                        return items.data;
                    })
                }]
            }
        })
        .state('categitems',{
            url:'/items/{shortName}',
            templateUrl: 'components/second.html',
            controller: 'CategItemsController as list',
            resolve: {
                items: ['$stateParams','MenuDataService',function ($stateParams,MenuDataService) {  
                    return MenuDataService.getItemsForCategory($stateParams.shortName).then(function (items) {  
                        // console.log(items.data.menu_items);
                        return items.data.menu_items;
                    })
                }]
            }
        })
    }
})();