(function(){
    'use strict';
    angular.module('LunchCheck',[]).controller('LunchCheckController',LunchCheckController);
    LunchCheckController.$inject=['$scope']
    function LunchCheckController($scope) {  
        $scope.check=function () {
            var len=$scope.food.length;
            if(len==0){
                $scope.message="Please enter data first";
                return;
            }
            var list=$scope.food.split(',');
            if(list.length>3){
                $scope.message="Too much!";
            }
            else{
                $scope.message="Enjoy!";
            }
        }
    }
})();