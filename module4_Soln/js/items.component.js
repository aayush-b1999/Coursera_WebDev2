(function () {  
    'use strict';
    angular.module('data')
    .component('categitems',{
        templateUrl: './components/categitems.html',
        controller: CategoriesController,
        bindings: {
            ret: '<'
        }
    })
})();