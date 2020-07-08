(function () {  
    'use strict';
    angular.module('MenuApp',['data', 'ui.router'])
    .controller('CategoriesController',CategoriesController)
    .controller('CategItemsController',CategItemsController)

    CategoriesController.$inject=['items'];
    function CategoriesController(items) {
        var list=this;
        this.items=items;
        // this.str="yo!";
        // console.log(this.items);
    }
    CategItemsController.$inject=['items'];
    function CategItemsController(items) {
        var list=this;
        this.items=items;
    }
})();