(function () { 
    'use strict';
    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);
    ToBuyController.$inject=['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var l1=this;
        l1.removeItem=function (ind) {  
            ShoppingListCheckOffService.removeItem(ind);
        }
        l1.items=ShoppingListCheckOffService.getItems1();
        l1.isEmpty=ShoppingListCheckOffService.isEmpty1;
    }
    AlreadyBoughtController.$inject=['ShoppingListCheckOffService']
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var l2=this;
        l2.items=ShoppingListCheckOffService.getItems2();
        l2.isEmpty=ShoppingListCheckOffService.isEmpty2;
    }
    function ShoppingListCheckOffService() {
        var service=this;
        var items1=[
            {
                "name":"Cookies",
                "quantity":"10 Bags"
            },
            {
                "name":"Cookies",
                "quantity":"100 Bags"
            },
            {
                "name":"Cookies",
                "quantity":"1000 Bags"
            },
            {
                "name":"Cookies",
                "quantity":"100000 Bags"
            },
            {
                "name":"Cookies",
                "quantity":"1000000000 Bags"
            }
        ];
        var items2=[];
        service.removeItem=function (ind) {  
            items2.push(items1[ind]);
            items1.splice(ind,1)
        }
        service.getItems1=function () {  
            return items1;
        }
        service.getItems2=function () {  
            return items2;
        }
        service.isEmpty1=function (){
            return items1.length==0;
        }
        service.isEmpty2=function () {  
            return items2.length==0;
        }
    }
})();