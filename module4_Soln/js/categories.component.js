(function () {  
    'use strict';
    angular.module('data')
    .component('categories',{
        templateUrl: './components/categories.html',
        controller: CategoriesController,
        bindings: {
            items: '<'
        }
    })
    function CategoriesController() {
        // console.log(this.items);
    }
})();