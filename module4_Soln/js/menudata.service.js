(function () {  
    angular.module('data')
    .service('MenuDataService',MenuDataService)
    MenuDataService.$inject=['$http']
    function MenuDataService() {
        var ser=this;
        this.getAllCategories=function () {  
            var res=$http({
                method: "GET",
                url : (" https://davids-restaurant.herokuapp.com/categories.json")
            })
            return res;
        }
        this.getItemsForCategory(categoryShortName)=function () {  
            var res=$http({
                method: "GET",
                url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category="),
                params: {
                    category: categoryShortName
                }
            });
            return res;
        }
    }
})();