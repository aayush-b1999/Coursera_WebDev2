(function(){
    'use strict';
    angular.module('NarrowItDownApp',[])
    .controller('NarrowItDownController',NarrowItDownController)
    .service('MenuSearchService',MenuSearchService)
    .directive('foundItems',foundItemsDirective);

    function foundItemsDirective(){
        var ddo={
            templateUrl:'./loader/foundItems.html',
            scope: {
                items : '<',
                remove: '&onRemove'
            }, 
            controller: DirectiveController,
            controllerAs: 'list',
            bindToController: true
        }
        return ddo;
    }
    function DirectiveController() {  
        
    }
    NarrowItDownController.$inject=['MenuSearchService','$scope'];
    function NarrowItDownController(MenuSearchService,$scope){
        var list=this;
        list.found=[]
        list.ret=true;
        list.warning=''
        list.getMatchedMenuItems=function () {  
            // console.log(this.search)
            list.found=[]
            list.warning='';
            MenuSearchService.getMatchedMenuItems().then(function (res) {  
                for(var item of res.data.menu_items){
                    // console.log(item);
                    if(item.description.indexOf(list.search)!==-1){
                        if(list.search==='')continue;
                        list.found.push(item);
                    }
                }
                if(list.found.length===0)list.warning="Nothing found"
            }).catch(function (error) {  
                console.log(error);
                list.ret=false;
            })
        };
        this.removeMatchedMenuItems=function (index) {  
            console.log(index)
            this.found.splice(index,1);   
        }
    }
    MenuSearchService.$inject=['$http'];
    function MenuSearchService($http) {
        var service=this;
        service.getMatchedMenuItems=function(){
            // console.log(searchTerm);
            var res=$http({
                method: "GET",
                url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
            })
            return res;
        }
    }

})();