(function () {  
    angular.module('data')
    .service('MenuDataService',MenuDataService)
    MenuDataService.$inject=['$http']
    function MenuDataService($http) {
        var ser=this;
        this.getAllCategories=function () {  
            // console.log("HERE")
            var res=$http({
                method: "GET",
                url : (" https://davids-restaurant.herokuapp.com/categories.json")
            })
            // console.log(res);
            return res;
        };

        this.getItemsForCategory=function (categoryShortName) {  
            // console.log(categoryShortName);
            var res=$http({
                method: "GET",
                url: ("https://davids-restaurant.herokuapp.com/menu_items.json?"),
                params: {
                    category: categoryShortName
                }
            });
            return res;
        }
    }
})();